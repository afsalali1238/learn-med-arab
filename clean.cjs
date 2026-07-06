const fs = require("fs");
let code = fs.readFileSync("src/data/course.ts", "utf8");

const badUrls = [
  "https://www.who.int/publications/i/item/9789241511810",
  "https://www.who.int/teams/regulation-prequalification/regulation-and-safety",
  "https://www.pharmaceutical-journal.com/",
  "https://www.idf.org/our-activities/education/diabetes-and-ramadan.html",
  "https://www.who.int/publications/i/item/9789241548373",
  "https://www.dha.gov.ae/",
];

for (const url of badUrls) {
  const index = code.indexOf(url);
  if (index !== -1) {
    // Find the opening brace of this object
    const start = code.lastIndexOf("{", index);
    // Find the closing brace of this object
    let end = code.indexOf("}", index);
    if (code[end + 1] === ",") {
      end++;
    }

    code = code.substring(0, start) + code.substring(end + 1);
  }
}

// Format it by replacing multiple empty lines with a single one (since we left gaps)
code = code.replace(/,\s*,/g, ",");

fs.writeFileSync("src/data/course.ts", code);
