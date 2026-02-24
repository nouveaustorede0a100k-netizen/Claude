/**
 * Platform-specific installer for Claude Code CLI.
 * Run with: node install_claude.js
 */
const { execSync } = require("child_process");
const os = require("os");

const isWin = os.platform() === "win32";

if (isWin) {
  execSync('powershell -NoProfile -ExecutionPolicy Bypass -Command "irm https://claude.ai/install.ps1 | iex"', {
    stdio: "inherit",
  });
} else {
  execSync("curl -fsSL https://claude.ai/install.sh | bash", {
    stdio: "inherit",
  });
}
