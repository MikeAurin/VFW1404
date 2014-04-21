var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "proj3images");
var imageFiles = imagesFolder.getDirectoryListing();

console.log(imageFiles);

var mainWin = Ti.UI.createWindow({
	backgroundColor: "#fff",
	layout: "horizontal"
});

var border = Ti.UI.createView({
	backgroundColor: "#cecece",
	height: 1,
	top: 20
});

viewContainer = Ti.UI.createScrollView({
	top: 0,
	layout: "horizontal",
	width: pWidth,
	height: pHeight-border.top-border.height,
	contentWidth: pWidth,
	showVerticalScrollIndicator: true,
	backgroundColor: "#fef"
});

for(var i=0; i<imageFiles.length; i++){
	var view = Ti.UI.createView({
		backgroundColor: "#33CCFF",
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
}
 mainWin.add(border);
 mainWin.add(viewContainer);
 mainWin.open();
