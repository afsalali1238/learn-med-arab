const fs = require("fs");
const path = require("path");

const mdPath = path.join(__dirname, "../Medical Pharmacy Terminology.md");
const coursePath = path.join(__dirname, "../src/data/course.ts");

const mdContent = fs.readFileSync(mdPath, "utf8");

// Parse MD content into categories
const categories = {};
let currentCategory = "";

const lines = mdContent.split(/\r?\n/);
for (const line of lines) {
  if (line.startsWith("## ")) {
    currentCategory = line.substring(3).trim();
    categories[currentCategory] = [];
  } else if (line.startsWith("|") && !line.includes("---|") && !line.includes("English Term")) {
    const parts = line.split("|").map((s) => s.trim());
    if (parts.length >= 4 && parts[1]) {
      const eng = parts[1];
      const ar = parts[2];
      const trans = parts[3];
      categories[currentCategory].push([eng, ar, trans]);
    }
  }
}

// Helper to map specific terms to specific weeks
// 1. General Vocabulary & Body Parts -> Week 1 (General), Week 2 (Body Parts/States)
// 2. Symptoms, Conditions & Diseases -> Week 5 (Mild), Week 6 (Severe), Week 7 (Chronic)
// 3. Dosage Forms & Drug Classes -> Week 4
// 4. Routes of Administration -> Week 4
// 5. Dosage, Frequency & Timings -> Week 3
// 6. Common Medical Instructions -> Week 8

const weekMapping = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  8: [],
};

// 1. General Vocab
const bodyPartsList = [
  "Blood",
  "Skin",
  "Liver",
  "Kidney",
  "Urine",
  "Heart",
  "Ear",
  "Milk",
  "Food",
  "Face",
  "Joint",
  "Conjunctiva",
  "Cerebrum",
  "Brain",
  "Tongue",
  "Breast",
];
const statesList = ["Youth", "Old Age", "Death", "Infant", "Children", "Pregnant"];

if (categories["1. General Vocabulary & Body Parts"]) {
  for (const term of categories["1. General Vocabulary & Body Parts"]) {
    if (bodyPartsList.includes(term[0]) || statesList.includes(term[0])) {
      weekMapping[2].push(term);
    } else {
      weekMapping[1].push(term);
    }
  }
}

// 2. Symptoms
const chronicList = [
  "Cancer",
  "Paralysis",
  "Anemia",
  "Coma",
  "Cataract",
  "Psoriasis",
  "Warts",
  "Hypoglycemia",
  "Hyperglycemia",
  "Hepatitis",
  "Peptic Ulcer",
  "Hernia",
  "Syphilis",
  "Gonorrhea",
  "Cholera",
  "Scabies",
  "Gangrene",
];
const severeList = [
  "Toxicity / Poisoning",
  "Bleeding",
  "Spasm / Cramp",
  "Swelling",
  "Small Pox",
  "Measles",
  "Whooping Cough",
];

if (categories["2. Symptoms, Conditions & Diseases"]) {
  for (const term of categories["2. Symptoms, Conditions & Diseases"]) {
    if (chronicList.includes(term[0])) {
      weekMapping[7].push(term);
    } else if (severeList.includes(term[0])) {
      weekMapping[6].push(term);
    } else {
      weekMapping[5].push(term); // Default to mild/OTC
    }
  }
}

// 3. Dosage Forms
if (categories["3. Dosage Forms & Drug Classes"]) {
  weekMapping[4].push(...categories["3. Dosage Forms & Drug Classes"]);
}

// 4. Routes
if (categories["4. Routes of Administration"]) {
  weekMapping[4].push(...categories["4. Routes of Administration"]);
}

// 5. Timings
if (categories["5. Dosage, Frequency & Timings"]) {
  weekMapping[3].push(...categories["5. Dosage, Frequency & Timings"]);
}

// 6. Instructions
if (categories["6. Common Medical Instructions"]) {
  weekMapping[8].push(...categories["6. Common Medical Instructions"]);
}

// Load course.ts WEEKS
let courseContent = fs.readFileSync(coursePath, "utf8");

// We will use a regex to extract the WEEKS array, eval it, update it, and inject it back
let pre = courseContent.split("export const WEEKS: Week[] = ")[0];
let jsonStr = courseContent.split("export const WEEKS: Week[] = ")[1].replace(/;\s*$/, "");

// Because JSON.parse requires strict JSON (no unquoted keys, no single quotes),
// and the course.ts is a TS object, we evaluate it in a safe context
const sandbox = { weeks: null };
eval("sandbox.weeks = " + jsonStr);
const WEEKS = sandbox.weeks;

// Merge logic
for (let i = 0; i < WEEKS.length; i++) {
  const week = WEEKS[i];
  const newTerms = weekMapping[week.number] || [];

  if (week.vocabTables && week.vocabTables.length > 0) {
    const existingRows = week.vocabTables[0].rows;
    for (const term of newTerms) {
      const engTerm = term[0]
        .toLowerCase()
        .trim()
        .replace(/ \/ .*/, "");
      const exists = existingRows.some(
        (row) =>
          row[0]
            .toLowerCase()
            .trim()
            .replace(/ \/ .*/, "")
            .includes(engTerm) ||
          engTerm.includes(
            row[0]
              .toLowerCase()
              .trim()
              .replace(/ \/ .*/, ""),
          ),
      );
      if (!exists) {
        existingRows.push(term);
      }
    }
  }
}

// Stringify it nicely
let newJsonStr = JSON.stringify(WEEKS, null, 2);

const finalContent = pre + "export const WEEKS: Week[] = " + newJsonStr + ";\n";

fs.writeFileSync(coursePath, finalContent);
console.log("Successfully distributed terms across 8 weeks!");
