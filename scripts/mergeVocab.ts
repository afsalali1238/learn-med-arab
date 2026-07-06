import fs from "fs";
import { WEEKS as oldWeeks } from "../old_course_utf8.ts";
import { WEEKS as newWeeks } from "../src/data/course.ts";

for (let i = 0; i < newWeeks.length; i++) {
  const oldWeek = oldWeeks[i];
  const newWeek = newWeeks[i];

  if (!oldWeek) continue;

  // Merge Vocab Tables (Assuming 1 table per week)
  if (
    oldWeek.vocabTables &&
    oldWeek.vocabTables.length > 0 &&
    newWeek.vocabTables &&
    newWeek.vocabTables.length > 0
  ) {
    const oldRows = oldWeek.vocabTables[0].rows;
    const newRows = newWeek.vocabTables[0].rows;

    // We want to add old rows to new rows if the English term doesn't already exist (case insensitive, approximate)
    for (const oldRow of oldRows) {
      const oldEng = oldRow[0]
        .toLowerCase()
        .trim()
        .replace(/ \/ .*/, ""); // strip alternative names
      let found = false;
      for (const newRow of newRows) {
        const newEng = newRow[0]
          .toLowerCase()
          .trim()
          .replace(/ \/ .*/, "");
        if (newEng.includes(oldEng) || oldEng.includes(newEng)) {
          found = true;
          break;
        }
      }
      if (!found) {
        newRows.push(oldRow);
      }
    }
  }
}

// Now write it back
let finalContent = fs.readFileSync("src/data/course.ts", "utf8");
// Replace the WEEKS array
const match = finalContent.match(/export const WEEKS: Week\[\] = \[.*\];/s);
if (match) {
  finalContent = finalContent.replace(
    match[0],
    "export const WEEKS: Week[] = " + JSON.stringify(newWeeks, null, 2) + ";",
  );
  fs.writeFileSync("src/data/course.ts", finalContent);
  console.log("Merged successfully!");
} else {
  console.log("Could not find WEEKS array");
}
