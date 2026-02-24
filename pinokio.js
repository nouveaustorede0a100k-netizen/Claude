module.exports = {
  version: "5.0",
  title: "Claude Code",
  description: "Anthropic's agentic coding tool that lives in your terminal",
  icon: "icon.png",
  menu: async (kernel, info) => {
    let installed = info.exists("installed")
    let running = {
      install: info.running("install.js"),
      start: info.running("start.js"),
      update: info.running("update.js"),
    }

    if (running.install) {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Installing",
        href: "install.js",
      }]
    } else if (running.update) {
      return [{
        default: true,
        icon: "fa-solid fa-rotate",
        text: "Updating",
        href: "update.js",
      }]
    } else if (running.start) {
      return [{
        default: true,
        icon: "fa-solid fa-terminal",
        text: "Running",
        href: "start.js",
      }]
    } else if (installed) {
      return [{
        default: true,
        icon: "fa-solid fa-power-off",
        text: "Start",
        href: "start.js",
      }, {
        icon: "fa-solid fa-rotate",
        text: "Update",
        href: "update.js",
      }, {
        icon: "fa-solid fa-plug",
        text: "Install",
        href: "install.js",
      }]
    } else {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Install",
        href: "install.js",
      }]
    }
  }
}
