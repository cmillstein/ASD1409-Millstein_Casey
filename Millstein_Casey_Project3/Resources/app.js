var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#EEE",
	title: "Database"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});


mainWindow.add(navWindow);
navWindow.open();
