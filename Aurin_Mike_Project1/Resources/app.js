Ti.UI.setBackgroundColor("white");


var appWindow = Ti.UI.createWindow({
	backgroundColor: "black",
	top: 20,
});

var titleView = Ti.UI.createView({
	backgroundColor: "black",
	height: 40,
	top : 20,
	left: 0,
	right: 0,
	borderRadius: 2,
	
});

var titleText = Ti.UI.createLabel({
	text: "Avenged Sevenfold Albums",
	color: "White",
	font: {fontSize: 22, fontFamily: "Palatino", fontWeight: "bold"},
	align: "center"
});

var logoView = Ti.UI.createView({
	left: 40,
	right: 40,
	top: titleView.top + 50,
	height: 100,
	backgroundImage: "deathbat.png",
	backgroundColor: "black"
});

var albumView = Ti.UI.createView({
	backgroundColor: "white",
	left: 30,
	right: 30,
	top: logoView.top + 150,
	height: 50
});

var albumText = Ti.UI.createLabel({
	text: "Click Previous or Next to Begin",
	color: "black",
	align: "center"
});

var backButton = Ti.UI.createView({
	left: 20,
	width: 130, 
	height: 50,
	bottom: 20,
	borderRadius: 20,
	backgroundColor: "#CC0000"
});


var previousText = Ti.UI.createLabel({
	text: "Previous Album",
	color: "black",
	align: "center"
});

var nextText = Ti.UI.createLabel({
	text: "Next Album",
	color: "black",
	align: "center"
});
var nextButton = Ti.UI.createView({
	right: 20,
	width: 130,
	height: 50,
	bottom: 20,
	borderRadius: 20,
	backgroundColor: "#009933"
});

var loadAlbum = require("albums");

appWindow.open();

appWindow.add(titleView);
titleView.add(titleText);
appWindow.add(logoView);
backButton.add(previousText);
appWindow.add(nextButton);
nextButton.add(nextText);
appWindow.add(albumView);
albumView.add(albumText);
appWindow.add(backButton);
appWindow.add(nextButton);