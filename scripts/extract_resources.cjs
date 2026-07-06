const fs = require("fs");
const path = require("path");

const weeksDir = "C:\\\\Users\\\\HP\\\\Desktop\\\\antigravity\\\\physio\\\\src\\\\data\\\\weeks";
const files = fs.readdirSync(weeksDir).filter((f) => f.endsWith(".ts"));

for (const file of files) {
  const content = fs.readFileSync(path.join(weeksDir, file), "utf8");
  const lines = content.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('"url"')) {
      console.log(
        `[${file}] ${lines[i - 3]?.trim() || ""} | ${lines[i - 2]?.trim() || ""} | ${lines[i - 1]?.trim() || ""} | ${lines[i].trim()}`,
      );
    }
  }
}
