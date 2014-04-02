/*

This is the generic text book example of the template for a window
 
 var window1 = Ti.UI.createWindow({
 	title: "Tab 1",
 	backgroundColor: "#fff"
 });
 
 var label1 = Ti.UI.createLabel ({
 	color: "#999",
 	text: "This is Window 1",
 	font:{fontSize: 20, fontFamily: "Helvetica Neue"},
 	textAlign: "center",
 	width: "auto"	
 });

window1.add(label1);
window1.open();
*/

Ti.UI.setBackgroundColor("#000");

var margin = 20;

var mainWindow = Ti.UI.createWindow({
	// Reserved Properties
	backgroundColor: "#fff",
	backgroundImage: "blueback.jpg",
	backgroundRepeat: true,
	title: "My First Window"
	// This only displays on Android
});

var myFirstView = Ti.UI.createView({
	// Reserved Properties
	backgroundColor: "#333",
	//borderColor: "#000",
	//borderRadius: 5,
	//borderWidth: 2,
	height: 100,
	top: 20,
	left: 20,
	right: 20,
	zIndex: 0,
	// Custom Properties
	id: "Header",
	cost: "$40",
});

/*
var mySecondView = Ti.UI.createView({
	backgroundColor: "Red",
	height: 100,
	top: myFirstView.top + myFirstView.height + 20,
	left: 20,
	right: 20,
	zIndex: 1
});
*/

var myText = Ti.UI.createLabel({
	text: "Hello World!",
	color: "#fff",
	font: {fintSize: 14, fontFamily: "Helvetica", fontWeight: "bold", fontStyle: "italic"},
	top: 10,
	left: 10
});

mainWindow.add(myFirstView);
myFirstView.add(myText);
mainWindow.open();