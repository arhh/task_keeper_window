const { app, BrowserWindow, Menu } = require('electron')
const config = require("./config.json");

const createWindow = () => {
  const win = new BrowserWindow({
    width: config.windowWidth,
    height: config.windowHeight,
    show: false,
  });

  win.loadURL(config.appUrl);

  win.once('ready-to-show', () => {
    win.show()
  })
}

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

Menu.setApplicationMenu(null);
console.log("Session data (inc. logged in account) stored in: " + app.getPath("sessionData"));

