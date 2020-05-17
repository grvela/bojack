const { app, BrowserWindow} = require('electron')

app.on('ready', () => {
    let win = new BrowserWindow({
        minWidth: 900,
        minHeight: 600,
        autoHideMenuBar: true,
        webPreferences:{
            nodeIntegration: true
        }
    })
    win.loadFile('public/index.html')
})