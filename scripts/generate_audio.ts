import fs from "fs";
import path from "path";
import * as googleTTS from "google-tts-api";
import { WEEKS } from "../src/data/course";
import crypto from "crypto";

export function getAudioFilename(text: string) {
  return crypto.createHash("sha256").update(text).digest("hex") + ".mp3";
}

async function main() {
  const publicAudioDir = path.join(process.cwd(), "public", "audio");

  if (!fs.existsSync(publicAudioDir)) {
    fs.mkdirSync(publicAudioDir, { recursive: true });
  }

  const textsToGenerate = new Set<string>();

  WEEKS.forEach((w) => {
    w.vocabTables.forEach((t) => {
      t.rows.forEach((r) => {
        if (r[1]) textsToGenerate.add(r[1]);
      });
    });

    if (w.scenario?.answerKey?.arabic) {
      textsToGenerate.add(w.scenario.answerKey.arabic);
    }
  });

  console.log(`Found ${textsToGenerate.size} unique Arabic phrases to generate.`);

  let count = 0;
  for (const text of textsToGenerate) {
    const filename = getAudioFilename(text);
    const filepath = path.join(publicAudioDir, filename);

    if (fs.existsSync(filepath)) {
      console.log(`Skipping already generated: ${text.slice(0, 20)}...`);
      count++;
      continue;
    }

    try {
      console.log(`Generating audio for: ${text.slice(0, 20)}...`);
      if (text.length > 200) {
        const results = await googleTTS.getAllAudioBase64(text, {
          lang: "ar",
          slow: false,
          host: "https://translate.google.com",
          splitPunct: ",.?",
        });

        const buffers = results.map((r) => Buffer.from(r.base64, "base64"));
        const finalBuffer = Buffer.concat(buffers);
        fs.writeFileSync(filepath, finalBuffer);
      } else {
        const base64 = await googleTTS.getAudioBase64(text, {
          lang: "ar",
          slow: false,
          host: "https://translate.google.com",
        });
        const buffer = Buffer.from(base64, "base64");
        fs.writeFileSync(filepath, buffer);
      }

      await new Promise((r) => setTimeout(r, 500));
      count++;
    } catch (err) {
      console.error(`Failed to generate audio for: ${text}`, err);
    }
  }

  console.log(`Finished generating ${count} files.`);
}

main().catch(console.error);
