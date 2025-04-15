// This script syncs `.env` → `[vars]` in wrangler.toml.
// It runs before build/deploy. You can configure .env and ignore this file.

const fs = require("fs");
const dotenv = require("dotenv");
const path = require("path");
const envPath = path.resolve(process.cwd(), ".env");
const wranglerPath = path.resolve(process.cwd(), "wrangler.toml");
const env = dotenv.parse(fs.readFileSync(envPath, "utf-8"));
const toml = fs.readFileSync(wranglerPath, "utf-8");
let newToml = toml;
// Remove old [vars] block if it exists
newToml = newToml.replace(/\[vars\][\s\S]*?(?=\n\[|$)/, "");
// Append new [vars] block at end
newToml += "\n[vars]\n";
for (const [key, value] of Object.entries(env)) {
  newToml += `${key} = "${value.replace(/"/g, '\\"')}"\n`;
}
fs.writeFileSync(wranglerPath, newToml.trim() + "\n");
