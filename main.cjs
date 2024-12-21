const { app, BrowserWindow, Menu, MenuItem } = require('electron')
const config = require("./config.json");

const handleQuickNavigationClick = async (menuItem, focusedWindow, _) => {
  await focusedWindow.loadURL(config.navigation[menuItem.id]);
};

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

    // Add quick navigation menu item
    const appMenu = Menu.getApplicationMenu();
    const quickNavigationMenuItem = new MenuItem({
      label: 'Quick Navigation',
      id: 'quick-nav',
      submenu: [
        {
          id: 'drive',
          label: 'Drive',
          click: handleQuickNavigationClick,
        },
        {
          id: 'photos',
          label: 'Photos',
          click: handleQuickNavigationClick,
        },
        {
          id: 'keep',
          label: 'Keep',
          click: handleQuickNavigationClick,
        },
        {
          id: 'calendar',
          label: 'Calendar and Tasks',
          click: handleQuickNavigationClick,
        }
      ]
    });
    appMenu.append(quickNavigationMenuItem);
    Menu.setApplicationMenu(appMenu);

    win.show();
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

console.log("Session data (inc. logged in account) stored in: " + app.getPath("sessionData"));

