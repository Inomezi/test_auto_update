const { version } = require("./package.json")

window.onload = () => {
  document.getElementById("version").innerText = version
}