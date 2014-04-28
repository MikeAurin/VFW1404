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
	layout: "horizontal",
	title: "Image Gallery",
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWin
});

var border = Ti.UI.createView({
	backgroundColor: "#cecece",
	height: 20,
	top: 0
});

var viewContainer = Ti.UI.createScrollView({
	top: 0,
	layout: "horizontal",
	width: pWidth,
	height: pHeight-border.height-border.top,
	contentWidth: pWidth,
	showVerticalScrollIndicator: true,
	backgroundColor: "#cecece"
});

mainWin.add(border, viewContainer);

var backButton = Ti.UI.createLabel({
	top: 0,
	height: 50,
	width: "100%",
	backgroundColor: "grey",
	text: "Close Gallery",
	color: "white",
	textAlign: "center"
});

mainWin.add(backButton);

var getImage = function(){
	var imageWindow = Ti.UI.createImageView({
		backgroundColor: "#cecece",
		image: this.image
	});

	viewContainer.add(imageWindow);
	imageWindow.open();
	

};

for(var i=0; i<imageFiles.length; i++){
	var view = Ti.UI.createView({
		backgroundColor: "#cecece",
		top: 10,
		left: 10,
		width: size,
		height: size
	});
	var thumb = Ti.UI.createImageView({
		image: "proj3images/" + imageFiles[i],
		width: view.width*2
	});

	view.add(thumb);
	viewContainer.add(view);
	thumb.addEventListener("click", getImage); 
}

navWindow.add(mainWin);
navWindow.open();
