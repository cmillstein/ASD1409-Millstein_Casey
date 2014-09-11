

var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#EEE",
	fullscreen: true,
	layout: "vertical"
});

var header = Ti.UI.createView({
	height: 30,
	backgroundColor: "#000",
	top: 0
});

var headerLabel = Ti.UI.createLabel({
	text: "Reddit Data",
	font: {fontFamily: "Verdana", fontSize: "bold", fontWeight: "bold"},
	color: "fff"
});

var scrollView = Ti.UI.createScrollView({
	height: Ti.Platform.displayCaps.platformHeight - header,
	layout: "vertical"
});



header.add(headerLabel);
mainWindow.add(header);
mainWindow.add(scrollView);

var getData = require("data");


mainWindow.open();
