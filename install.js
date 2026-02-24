module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "node install_claude.js",
        path: ".",
      },
    },
    {
      method: "shell.run",
      params: {
        message: "node -e \"require('fs').writeFileSync('.claude-code-installed', '')\"",
        path: ".",
      },
    },
  ],
};
