#!/usr/bin/env node

import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";

if (process.argv.length < 3) {
  console.error("Please specify a JavaScript file to run.");
  process.exit(1);
}

const scriptFile = process.argv[2];
const scriptPath = fileURLToPath(import.meta.url);
const scriptDirectory = path.dirname(scriptPath);
const scriptFilePath = path.join(scriptDirectory, scriptFile);

if (!fs.existsSync(scriptFilePath)) {
  console.error(`File not found: ${scriptFilePath}`);
  process.exit(1);
}

try {
  import(scriptFilePath).then((module) => {
    if (module.default) {
      console.log(module.default);
    } else {
      console.log(module);
    }
    process.exit(0); // Exit the script when done
  });
} catch (error) {
  console.error("An error occurred while executing the script:", error);
  process.exit(1);
}
