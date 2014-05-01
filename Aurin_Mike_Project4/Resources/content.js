
var chooseScreen = Ti.UI.createWindow({
	backgroundColor:"#cecece"
});

tableButton = Ti.UI.createLabel({
	top: 80,
	left: 20,
	right: 20,
	height: 100,
	borderRadius: 5,
	textAlign: "center",
	color: "#black",
	backgroundColor: "#0465b2",
	text: "Rides and Attractions",
});

var openTable = function(){
	var tableFunction = require("table");
};

tableButton.addEventListener ("click", openTable);

galleryButton = Ti.UI.createLabel({
	bottom: 210,
	left: 20,
	right: 20,
	height: 100,
	borderRadius: 5,
	textAlign: "center",
	color: "#black",
	backgroundColor: "#e1a60a",
	text: "Theme Park Gallery",
});

var openGallery =function(){
	var galleryFunction = require("gallery");
};

galleryButton.addEventListener("click", openGallery);

settingsButton = Ti.UI.createLabel({
	bottom: 50,
	left: 20,
	right: 20,
	height: 100,
	borderRadius: 5,
	textAlign: "center",
	color: "#black",
	backgroundColor: "#d40b1e",
	text: "Settings",
});


chooseScreen.add(tableButton, galleryButton, settingsButton);
chooseScreen.open();
