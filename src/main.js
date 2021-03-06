import { app, BrowserWindow, Menu, MenuItem, ipcMain, ipcRenderer, dialog } from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';
import { enableLiveReload } from 'electron-compile';
import fs from 'fs';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let selectedImage;

const isDevMode = process.execPath.match(/[\\/]electron/);

if (isDevMode) enableLiveReload({ strategy: 'react-hmr' });

const createWindow = async () => {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    // and load the index.html of the app.
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    var menu = Menu.buildFromTemplate([
        {
            label: 'Electron',
            submenu: [
                {
                    label: 'View Devtools',
                    click: () => {
                        installExtension(REACT_DEVELOPER_TOOLS);
                        mainWindow.webContents.openDevTools();
                    }
                },
                {
                    label: 'Save as...',
                    click: () => {
                        mainWindow.webContents.send('save-as');
                    }
                },
                {
                    label: 'Open...',
                    click: function() {
                        dialog.showOpenDialog(
                            mainWindow,
                            fileNames => {
                                if (!fileNames) return;
                                var fileName = fileNames[0];
                                fs.readFile(fileName, 'utf-8', (err, data) => {
                                    mainWindow.webContents.send('replace-state', data);
                                });
                            }
                        );
                    }
                }
            ]
        }
    ]);
    Menu.setApplicationMenu(menu);

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
};

const contextMenu = new Menu();
const menuItem = new MenuItem({
    label: 'Add to Favourites',
    type: 'normal',
    click() {
        mainWindow.webContents.send('addimage', selectedImage);
    }
});
contextMenu.append(menuItem);

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

ipcMain.on('show-context-menu', function(event, arg) {
    selectedImage = arg;
    const win = BrowserWindow.fromWebContents(event.sender);
    contextMenu.popup(win);
});

ipcMain.on('save-as-file', function(event, arg) {
    dialog.showSaveDialog(
        mainWindow,
        {
            filters: [{ name: 'text', extensions: ['txt'] }]
        },
        fileName => {
            if (!fileName) return;
            fs.writeFile(fileName, arg, function(err) {});
        }
    );
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
