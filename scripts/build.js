// Simple build: checks that each source file loads, then copies it to dist/
const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "..", "src");
const distDir = path.join(__dirname, "..", "dist");

fs.rmSync(distDir, { recursive: true, force: true });
fs.mkdirSync(distDir);

for (const file of fs.readdirSync(srcDir)) {
  if (file.endsWith(".js")) {
    require(path.join(srcDir, file));
    fs.copyFileSync(path.join(srcDir, file), path.join(distDir, file));
    console.log(`Built ${file}`);
  }
}

console.log("Build completed successfully.");
