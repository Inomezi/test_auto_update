const { version } = require("./package.json")
const { ipcRenderer } = require('electron');

window.onload = () => {
  document.getElementById("version").innerText = version
}

ipcRenderer.on('message', function (event, text) {
  console.log('Message from updater:', text);
});