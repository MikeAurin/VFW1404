/*
var mainWindow = Ti.UI.createWindow({
	title: "Mike's First Gallery",
	backgroundImage: ("iphonebg.jpg")
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

var openGallery = function(){
	var pWidth = Ti.Platform.displayCaps.platformWidth;
	var pHeight = Ti.Platform.displayCaps.platformHeight;
	var itemCount = 15;
	var rowCount = 3;
	var margin = 10;
	var size = 40;
	var mainGallery = Ti.UI.createWindow({
		title: "Gallery",
		backgroundImage: "iphonebg.jpg",
	});
	navWindow.openWindow(mainGallery);
	var container = Ti.UI.createView({
		width: pWidth,
		backgroundcolor: "#fef"
	});
	navWindow.open(container);
};

var titleImage = Ti.UI.createView({
	backgroundImage: "cover.jpg",
	borderRadius: 8,
	top: 20,
	left: 30,
	right: 30,
	bottom: 120
});

var beginButton = Ti.UI.createLabel({
	height: 40,
	bottom: 30,
	left: 30,
	right: 30,
	height: 50,
	borderRadius: 10,
	backgroundColor: "#c42332",
	text: "Start Gallery",
	font: {fontFamily: "Verdana", fontSize: 30, fontWeight: "bold"},
	color: "#fff",
	textAlign: "center"
});

var getImages = require("gallery");

beginButton.addEventListener("click", openGallery);

mainWindow.add(beginButton);
mainWindow.add(titleImage);
navWindow.open();
*/

var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var rowCount = 3;
var margin = 10;
var trueCanvasWidth = (pWidth - (margin * 2)) - rowCount;
var size = ((pHeight - trueCanvasWidth)/rowCount);
var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "proj3images");
var imageFiles = imagesFolder.getDirectoryListing();

console.log(imageFiles);

var mainWin = Ti.UI.createWindow({
	backgroundColor: "#fff",
	layout: "horizontal",
	title: "Images"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWin,
	top: 0
});

var border = Ti.UI.createView({
	backgroundColor: "#cecece",
	height: 1,
	top: 0
});

viewContainer = Ti.UI.createScrollView({
	top: 0,
	layout: "horizontal",
	width: pWidth,
	height: pHeight-border.top-border.height,
	contentWidth: pWidth,
	showVerticalScrollIndicator: true,
	backgroundColor: "black"
});

var getImage = function(){
	var imageWindow = Ti.UI.createWindow({
		backgroundColor: "#fff",
		backgroundImage: "proj3images/" + imageFiles[i],
	});
	
	imageWindow.open();
};

for(var i=0; i<imageFiles.length; i++){
	var view = Ti.UI.createView({
		backgroundColor: "black",
		top: 10,
		left: 10,
		width: size,
		height: size
	});
	var thumb = Ti.UI.createImageView({
		image: "proj3images/" + imageFiles[i],
		top: 0,
		width: view.width*2
	});
	
	view.add(thumb);
	viewContainer.add(view);
	thumb.addEventListener("click", getImage); 
}

mainWin.add(border);
mainWin.add(viewContainer);
mainWin.open();
navWindow.open(mainWin);
