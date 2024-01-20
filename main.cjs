const { app, BrowserWindow, Menu } = require('electron')
const config = require("./config.json");

const createWindow = () => {
  const win = new BrowserWindow({
    width: config.windowWidth,
    height: config.windowHeight,
    show: false,
    icon: 'resources/material_apps.png',
  });

  // Same behaviour as win.webContents.loadURL(...)
  win.loadURL(config.appUrl);

  win.once('ready-to-show', () => {
    win.setTitle(config.title);
    win.show()
  })

  // Load contents of new windows in main window instead.
  // Avoids desktop clutter
  win.webContents.setWindowOpenHandler((details) => {
    win.loadURL(details.url);
    return {action: 'deny'};
  })
}

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', () => {
  app.quit();
});

Menu.setApplicationMenu(null);
console.log("Session data (inc. logged in account) stored in: " + app.getPath("sessionData"));

