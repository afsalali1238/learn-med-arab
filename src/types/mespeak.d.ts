interface MeSpeakOptions {
  amplitude?: number;
  pitch?: number;
  speed?: number;
  voice?: string;
  wordgap?: number;
  volume?: number;
  rawdata?: boolean | "buffer" | "base64" | "mime" | "array";
}

interface MeSpeak {
  loadConfig(json: any): void;
  loadVoice(json: any, callback?: (success: boolean, message: string) => void): void;
  speak(str: string, options?: MeSpeakOptions): void;
  isConfigLoaded(): boolean;
  isVoiceLoaded(): boolean;
  resetQueue(): void;
  canPlay(): boolean;
}

interface Window {
  meSpeak: MeSpeak;
}

declare module "mespeak/mespeak_config.json" {
  const value: any;
  export default value;
}

declare module "mespeak/voices/ar.json" {
  const value: any;
  export default value;
}
