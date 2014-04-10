Titanium.UI.setBackgroundColor("#000");

var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#f5f5f5"
});

var titleView = Ti.UI.createView({
	height: 65,
	backgroundColor: "fff",
	top: 0
});

var border = Ti.UI.createView({
	backgroundColor: "dbdbdb",
	height: 1,
	top: titleView.height + titleView.top
});

var titleLabel = Ti.UI.createLabel({
	text: "Band Members",
	font: {fontSize: 20, fontFamily: "Arial", fontWeight: "Bold"},
	top: 30,
	width: "100%",
	textAlign: "center"
});

var loadBands = require("bands");

titleView.add(titleLabel);
mainWindow.add(titleView, border);
mainWindow.open();