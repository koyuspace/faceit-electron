const { app, BrowserWindow, screen } = require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow() {
    const display = screen.getPrimaryDisplay();
    const dimensions = display.workAreaSize;

    win = new BrowserWindow({
        width: parseInt(dimensions.width * 0.8),
        height: parseInt(dimensions.height * 0.8),
        minWidth: parseInt(dimensions.width * 0.8),
        minHeight: parseInt(dimensions.height * 0.8),
        maxWidth: dimensions.width,
        maxHeight: dimensions.height,
        icon: `assets/icon.png`
    })

    win.setTitle("FACEIT")

    win.loadURL("https://faceit.com")

    win.webContents.insertCSS(".jobeyF, #onetrust-banner-sdk, header-message-bar {display:none;} .main-header.--message-bar-visible { height: 64px !important; }")

    win.setBackgroundColor("#1f1f1f")

    win.setMenu(null)

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})
