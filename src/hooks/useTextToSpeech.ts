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

  const speak = useCallback((text: string) => {
    if (!supported || !window.speechSynthesis) return;

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance; // Prevent garbage collection bug in some browsers
    
    // Try to find an Arabic voice
    const currentVoices = voices.length > 0 ? voices : window.speechSynthesis.getVoices();
    const arabicVoice = currentVoices.find(v => v.lang.startsWith("ar"));
    
    if (arabicVoice) {
      utterance.voice = arabicVoice;
    }
    // Always set lang as fallback
    utterance.lang = "ar-SA";

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
