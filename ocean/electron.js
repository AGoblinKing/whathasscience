const Electron = require('electron');

Electron.app.on('ready', () => {
    const mainWindow = new Electron.BrowserWindow({ width: 800, height: 600 });
    mainWindow.loadURL(`file://${__dirname}/index.html`);
    //mainWindow.webContents.openDevTools();

    Electron.app.on('window-all-closed', () => {
        Electron.app.quit();
    });
});
