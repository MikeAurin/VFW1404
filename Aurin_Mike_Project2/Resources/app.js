
var mainWindow = Ti.UI.createWindow({
	
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

var titleView = Ti.UI.createView({
	height: 65,
	backgroundColor: "#fff",
	top: 0
});

var border = Ti.UI.createView({
	backgroundColor: "#dbdbdb",
	height: 1,
	top: titleView.height + titleView.top
});

var titleLabel = Ti.UI.createLabel({
	text: "Universal Orlando Resort",
	font: {fontSize: 24, fontFamily: "AppleSDGothicNeo"},
	top: 20,
	width: "100%",
	textAlign: "center"
});

// Table View
var parks = Ti.UI.createTableView({
	top: border.top + border.height
});

if(Ti.Platform.name === "iPhone OS"){
	parks.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

// Table View Section
var universalSection = Ti.UI.createTableViewSection({
	headerTitle: "Universal Studios",
	footerTitle: "Ride the Movies!"
});

var islandsSection = Ti.UI.createTableViewSection({
	headerTitle: "Islands of Adventure",
	footerTitle: "A Lifetime of Adventure"
});

var getDetail = function(){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "#f5f5f5"
	});
	
	var detailTitleView = Ti.UI.createView({
		height: 65,
		backgroundColor: "#fff",
		top: 0
	});
	
	var detailBorder = Ti.UI.createView({
		backgroundColor: "#dbdbdb",
		height: 1,
		top: detailTitleView.height + detailTitleView.top
	});
	
	var detailTitleLabel = Ti.UI.createLabel({
		text: this.title,
		font: {fontSize: 20, fontFamily: "Arial", fontWeight: "bold"},
		top: 30,
		width: "100%", 
		textAlign: "center"
	});
	
	var detailText = Ti.UI.createLabel({
		text: this.desc,
		font: {fontSize: 14, fontFamily: "Arial"},
		top : detailBorder.height + detailBorder.top + 40,
		left: 10,
		right: 10
	});

	detailTitleView.add(detailTitleLabel);
	detailWindow.add(detailTitleView, detailBorder, detailText);
	navWindow.openWindow(detailWindow);
};

var loadParks = require("parks");

titleView.add(titleLabel);
mainWindow.add(titleView, border, parks);
navWindow.open(); 
