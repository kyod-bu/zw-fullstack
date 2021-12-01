// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain, dialog} = require('electron')
const path = require('path')
const fs = require('fs')

// require('electron-reload')(__dirname); // 监听当前文件夹

function createWindow () {
  // Create the browser window.
  const iconPath = path.join(__dirname, './assets/icon.png');
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // 配置，将 node 注入到 渲染进程中去
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js'),
      icon: path.join(__dirname, iconPath) // 设置图标
    }
  })

  // 判断当前系统
  // if (process.platform === 'darwin') {
  //   app.dock.setIcon(iconPath);
  // }
  // setInterval(function() {
  //   if (process.platform === 'darwin') {
  //     app.dock.setIcon(iconPath);
  //   }
  // }, 1000);

  // 监听渲染进程：
  // 监听事件 open-folder
  ipcMain.on('open-folder', (event, arg) => {
    const files = dialog.showOpenDialogSync({
      properties: ['openDirectory', 'openFile']
    });
    const content = fs.readFileSync(files[0], 'utf-8');
    event.sender.send('file-content', content);
  })

  // and load the index.html of the app.
  // mainWindow.loadFile('index.html');
  // 加载远端的文档
  mainWindow.loadURL('http://localhost:3000/');

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
