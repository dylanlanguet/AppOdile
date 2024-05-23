const { app, BrowserWindow } = require('electron/main');
const path = require('node:path');

function createWindow() {
  const win = new BrowserWindow({

    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html');

  // Maximiser la fenêtre une fois qu'elle est prête
  win.maximize();
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});