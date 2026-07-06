const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "src", "data", "course.ts");
const content = fs.readFileSync(filePath, "utf8");

const newResources = [
  // Week 1
  `    resources: [
      {
        type: "audio",
        title: "Simple & Easy Arabic Podcast (Beginner Greetings)",
        description: "Standard beginner greetings without heavy dialectal influence.",
        url: "https://preply.com/en/blog/arabic-podcasts/"
      }
    ],`,
  // Week 2
  `    resources: [
      {
        type: "docs",
        title: "Hospital Vocabulary in Arabic (Kalimah Center)",
        description: "Standard Medical Arabic vocabulary for hospital settings.",
        url: "https://kalimah-center.com/hospital-vocabulary-in-arabic/"
      }
    ],`,
  // Week 3
  `    resources: [
      {
        type: "audio",
        title: "Learn Arabic Podcast: Health / Medical Consultations",
        description: "Podcast focusing on standard medical consultations.",
        url: "https://www.youtube.com/watch?v=EE0TtA8UkC8"
      }
    ],`,
  // Week 4
  `    resources: [
      {
        type: "article",
        title: "Best ways to learn Arabic medical terminology",
        description: "Guide to mastering standard medical terminology in Arabic.",
        url: "https://talkpal.ai/culture/what-is-the-best-way-to-learn-arabic-medical-terminology/"
      }
    ],`,
  // Week 5
  `    resources: [
      {
        type: "article",
        title: "Arabic Vocabulary for Healthcare Professionals",
        description: "Comprehensive medical vocabulary for healthcare settings.",
        url: "https://www.tareequljannah.com/blogs/arabic-vocabulary-for-healthcare-professionals/"
      }
    ],`,
  // Week 6
  `    resources: [
      {
        type: "docs",
        title: "65 Must-Know Arabic Words/Phrases for Healthcare",
        description: "Essential standard phrases for any healthcare worker.",
        url: "https://www.scribd.com/document/467153936/65-Must-Know-Arabic-Words-Phrases-for-Anyone-Working-in-Healthcare"
      }
    ],`,
  // Week 7
  `    resources: [
      {
        type: "video",
        title: "Arabic Medical Empathy and Communication",
        description: "Standard phrases for calming patients and showing empathy in healthcare.",
        url: "https://www.youtube.com/results?search_query=MSA+arabic+medical+empathy"
      }
    ],`,
  // Week 8
  `    resources: [
      {
        type: "video",
        title: "Standard Arabic Medical Case Studies",
        description: "Live case studies utilizing formal Medical Arabic.",
        url: "https://www.youtube.com/results?search_query=MSA+arabic+medical+case+studies"
      }
    ],`,
];

let lines = content.split("\\n");
let newLines = [];
let skip = false;
let resIndex = 0;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("resources: [")) {
    skip = true;
    newLines.push(newResources[resIndex]);
    resIndex++;
    continue;
  }

  if (skip) {
    if (lines[i].trim() === "],") {
      skip = false;
    }
    continue;
  }

  newLines.push(lines[i]);
}

fs.writeFileSync(filePath, newLines.join("\\n"), "utf8");
console.log("Replaced resources.");
