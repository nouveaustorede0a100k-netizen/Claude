module.exports = {
  run: [
    {
      when: "{{platform !== 'win32'}}",
      method: "shell.run",
      params: {
        message: "curl -fsSL https://claude.ai/install.sh | bash"
      }
    },
    {
      when: "{{platform === 'win32'}}",
      method: "shell.run",
      params: {
        message: "irm https://claude.ai/install.ps1 | iex"
      }
    }
  ]
}
