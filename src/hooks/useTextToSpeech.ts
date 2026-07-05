import { useCallback, useEffect, useState, useRef } from "react";

export function useTextToSpeech() {
  const [supported, setSupported] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  
  // Track mespeak initialization
  const [mespeakReady, setMespeakReady] = useState(false);
  const [mespeakLoading, setMespeakLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      setSupported(true);

      const loadVoices = () => {
        setVoices(window.speechSynthesis.getVoices());
      };

      loadVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
      }
    }
  }, []);

  const loadMespeak = async () => {
    if (mespeakReady || mespeakLoading || typeof window === "undefined" || !window.meSpeak) return;
    try {
      setMespeakLoading(true);
      
      const configRes = await fetch("/mespeak/mespeak_config.json");
      const config = await configRes.json();
      
      const voiceRes = await fetch("/mespeak/voices/ar.json");
      const arVoice = await voiceRes.json();
      
      window.meSpeak.loadConfig(config);
      window.meSpeak.loadVoice(arVoice);
      setMespeakReady(true);
    } catch (e) {
      console.error("Failed to load mespeak offline TTS", e);
    } finally {
      setMespeakLoading(false);
    }
  };

  const speak = useCallback(async (text: string, fallbackText?: string) => {
    if (!supported || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();
    if (mespeakReady && window.meSpeak) {
      window.meSpeak.resetQueue();
    }
    
    const currentVoices = voices.length > 0 ? voices : window.speechSynthesis.getVoices();
    const arabicVoice = currentVoices.find(v => v.lang.startsWith("ar"));
    
    // If we have a native Arabic voice, use it
    if (arabicVoice) {
      const utterance = new SpeechSynthesisUtterance(text);
      utteranceRef.current = utterance;
      utterance.voice = arabicVoice;
      utterance.lang = "ar-SA";
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
      return;
    }

    // No native Arabic voice. Fallback to mespeak WASM engine
    try {
      if (!mespeakReady) {
        // Show loading state implicitly while it loads the tiny JSONs
        setSpeaking(true); 
        await loadMespeak();
      }

      if (window.meSpeak && window.meSpeak.isVoiceLoaded()) {
        // mespeak is synchronous but we can treat it as async roughly by wrapping
        // meSpeak handles playback via AudioContext natively.
        // It does not have an onend event easily, but we can fake it via timeout
        // based on word count / speed. But wait, we can just use the returned duration?
        // meSpeak.speak doesn't return a promise.
        // But for our UI, we can just toggle speaking state on, and turn it off after a delay.
        const estimatedDuration = Math.max(1000, text.split(" ").length * 500);
        setSpeaking(true);
        window.meSpeak.speak(text, { speed: 130, pitch: 40 }); // slightly deeper, slower for learning
        
        setTimeout(() => {
          setSpeaking(false);
        }, estimatedDuration);
        
        return;
      }
    } catch (err) {
      console.error("mespeak fallback failed", err);
    }

    // If all else fails, use the English transliteration fallback
    if (fallbackText) {
      const utterance = new SpeechSynthesisUtterance(fallbackText);
      utteranceRef.current = utterance;
      utterance.voice = currentVoices.find(v => v.lang.startsWith("en")) || null;
      utterance.lang = "en-US";
      utterance.rate = 0.85;

      utterance.onstart = () => setSpeaking(true);
      utterance.onend = () => {
        setSpeaking(false);
        utteranceRef.current = null;
      };
      utterance.onerror = () => {
        setSpeaking(false);
        utteranceRef.current = null;
      };
      window.speechSynthesis.speak(utterance);
    } else {
      setSpeaking(false);
    }
  }, [supported, voices, mespeakReady, mespeakLoading]);

  const stop = useCallback(() => {
    if (supported && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      if (mespeakReady && window.meSpeak) {
        window.meSpeak.resetQueue();
      }
      setSpeaking(false);
      utteranceRef.current = null;
    }
  }, [supported, mespeakReady]);

  return { speak, stop, speaking, supported };
}

