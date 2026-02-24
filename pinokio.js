const path = require("path");

module.exports = {
  version: "1.0",
  title: "Claude Code",
  description:
    "Agentic coding tool in the terminal — understand codebase, run tasks, git workflows via natural language. Includes plugins from this repo.",
  icon: "icon.png",
  menu: async (kernel, info) => {
    const installed = info.exists(".claude-code-installed");
    const running = {
      install: info.running("install.js"),
      start: info.running("start.js"),
    };

    if (running.install) {
      return [
        {
          default: true,
          icon: "fa-solid fa-plug",
          text: "Installing",
          href: "install.js",
        },
      ];
    }

    if (installed) {
      if (running.start) {
        return [
          {
            default: true,
            icon: "fa-solid fa-terminal",
            text: "Claude Code (running)",
            href: "start.js",
          },
        ];
      }
      return [
        {
          default: true,
          icon: "fa-solid fa-play",
          text: "Start",
          href: "start.js",
        },
        {
          icon: "fa-solid fa-plug",
          text: "Reinstall",
          href: "install.js",
        },
      ];
    }

    return [
      {
        default: true,
        icon: "fa-solid fa-plug",
        text: "Install",
        href: "install.js",
      },
    ];
  },
};
