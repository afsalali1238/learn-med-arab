import { useCallback, useEffect, useState, useRef } from "react";

export function useTextToSpeech() {
  const [supported, setSupported] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      setSupported(true);

      const loadVoices = () => {
        setVoices(window.speechSynthesis.getVoices());
      };

      loadVoices();
      // Chrome/Safari need this event to load voices asynchronously
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
      }
    }
  }, []);

  const speak = useCallback((text: string, fallbackText?: string) => {
    if (!supported || !window.speechSynthesis) return;

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    // Try to find an Arabic voice
    const currentVoices = voices.length > 0 ? voices : window.speechSynthesis.getVoices();
    const arabicVoice = currentVoices.find(v => v.lang.startsWith("ar"));
    
    let textToSpeak = text;
    let voiceToUse = arabicVoice;
    let langToUse = "ar-SA";

    if (!arabicVoice && fallbackText) {
      // Graceful fallback: speak the transliteration using an English/default voice
      textToSpeak = fallbackText;
      voiceToUse = currentVoices.find(v => v.lang.startsWith("en"));
      langToUse = "en-US";
    }

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utteranceRef.current = utterance; // Prevent garbage collection bug in some browsers

    if (voiceToUse) {
      utterance.voice = voiceToUse;
    }
    // Always set lang as fallback
    utterance.lang = langToUse;

    // Slightly slower rate for learning
    utterance.rate = 0.85;

    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => {
      setSpeaking(false);
      utteranceRef.current = null;
    };
    utterance.onerror = (e) => {
      console.error("Speech synthesis error", e);
      setSpeaking(false);
      utteranceRef.current = null;
    };

    window.speechSynthesis.speak(utterance);
  }, [supported, voices]);

  const stop = useCallback(() => {
    if (supported && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      utteranceRef.current = null;
    }
  }, [supported]);

  return { speak, stop, speaking, supported };
}
