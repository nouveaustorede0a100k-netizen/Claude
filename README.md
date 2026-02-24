# Claude Code

Anthropic's official agentic coding CLI tool that lives in your terminal, understands your codebase, and helps you code faster.

## What it does

Claude Code helps you:
- Execute routine coding tasks through natural language commands
- Explain complex code and handle git workflows
- Understand your entire codebase context
- Work from your terminal, IDE, or via @claude on GitHub

## How to use

1. **Install** — Click "Install" in the Pinokio sidebar. This downloads and installs Claude Code globally on your system.
2. **Start** — Click "Start" to launch the interactive `claude` terminal session.
3. **Update** — Click "Update" to upgrade Claude Code to the latest version.

Once started, type your coding requests in natural language directly in the terminal.

## Requirements

- Node.js 18+
- An [Anthropic API key](https://console.anthropic.com/) (you will be prompted on first run)

## API

Claude Code exposes a REST-compatible API when running as a server (see `--api-server` flag). Below are examples for programmatic use.

### JavaScript

```javascript
const { execSync } = require('child_process')
const result = execSync('claude -p "List all functions in app.js"', { encoding: 'utf8' })
console.log(result)
```

### Python

```python
import subprocess
result = subprocess.run(
    ['claude', '-p', 'List all functions in app.js'],
    capture_output=True, text=True
)
print(result.stdout)
```

### cURL (SDK server mode)

```bash
claude --api-server &
curl -X POST http://localhost:3000/v1/messages \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Explain the main function in app.js"}'
```

## Links

- [Official Documentation](https://code.claude.com/docs/en/overview)
- [GitHub Repository](https://github.com/nouveaustorede0a100k-netizen/Claude)
- [Report Issues](https://github.com/anthropics/claude-code/issues)
