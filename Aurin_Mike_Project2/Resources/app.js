Titanium.UI.setBackgroundColor("#000");

var universal = [
	{title: "Rip Ride Rockit", description: "A high speed rollercoaster with a music them.  Guests can pick a song from a preselected group of genres before riding the ride.  Also has the world's largest non-inverted loop. "}, 
	{title: "Twister: Ride It Out", description: "Guests step onto a live sound stage as they experience the sounds, sights and feelings of a real life tornado."},
	{title: "Disaster", description: "Guests are cast as extras for Mr. Kincaid's next big disaster movie, 'Mutha Nature'.  Climb aboard a subway train and prepare to sit through a. 8.0 earthquake deep below the heart of downtown Los Angeles."},
	{title: "Men in Black: Alien Attack", description: "Alright recruits, suit up.  Aliens have crash landed in the heart of Manhatten and it's up to you to clean up the mess.  Aim for the thermal exhaust ports!'"}
];

var islands = [
	{title: "The Incredible Spiderman", description: "Calling all true believers...Spiderman needs your help to stop Dr. Octopus and his Sinsiter Syndicate from stealing the Statue of Liberty.  Hop in the Daily Bugle's Scoop vehicle and help your friendly neighborhood Spiderman before it's too late."},
 	{title: "Jurassic Park Adventure", description: "Take a relaxing ride through the river at Jurassic Park and become immersed in the prehistoric scenery and wildlife on this guided tour.  Don't worry.  The raptors are safely locked away in containment."}, 
 	{title: "Poseidon's Fury", description: "Journey deep into the Temple of Poseidon in search of the Golden Trident.  Your scheduled tour guide appears to have called in sick, although I'm sure your replacement, Taylor will be a suitable replacement."}, 
 	{title: "Cat in the Hat", description: "Hop aboard your comfy couch and take a spin with the Cat in the Hat himself as you go page by page through this beloved children's tale."}
 ];

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

for(var i=0, j=universal.length; i<j; i++){
	var tableRow = Ti.UI.createTableViewRow({
		title: universal[i].title,
		desc: universal[i].description,
		hasDetail:true
	});
	universalSection.add(tableRow);
	tableRow.addEventListener("click", getDetail);
} 

for(var i=0, j=islands.length; i<j; i++){
	var tableRow = Ti.UI.createTableViewRow({
		title: islands[i].title,
		desc: islands[i].description,
		hasDetail: true
	});
	
	
	if(Ti.Platform.name === "iPhone OS"){
		tableRow.hasChild = false;
		tableRow.hasDetail = true;
	}

	islandsSection.add(tableRow);
	tableRow.addEventListener("click", getDetail);
};

var parksSections = [universalSection, islandsSection];

parks.setData(parksSections);

titleView.add(titleLabel);
mainWindow.add(titleView, border, parks);
navWindow.open(); 
