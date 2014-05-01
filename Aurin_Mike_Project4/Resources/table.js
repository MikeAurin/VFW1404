var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWin
});

var titleView = Ti.UI.createLabel({
	height: 65,
	backgroundColor: "#cecece",
	top: 0
});

var border = Ti.UI.createView({
	backgroundColor: "#dbdbdb",
	height: 1,
	top: titleView.height + titleView.top
});

var titleLabel = Ti.UI.createLabel({
	text: "The Parks",
	font: {fontSize: 50, fontFamily: "Futura", fontWeight: "medium"},
	top: 0,
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
		font: {fontSize: 20, fontFamily: "Futura", fontWeight: "medium"},
		top: 30,
		width: "100%", 
		textAlign: "center"
	});
	
	var detailText = Ti.UI.createLabel({
		text: this.desc,
		font: {fontSize: 14, fontFamily: "Futura"},
		top : detailBorder.height + detailBorder.top + 40,
		left: 10,
		right: 10
	});

	detailTitleView.add(detailTitleLabel);
	detailWindow.add(detailTitleView, detailBorder, detailText);
	navWindow.openWindow(detailWindow);
};


titleView.add(titleLabel);
mainWin.add(titleView, border, parks);
navWindow.open(); 


var universal = [
	{title: "Rip Ride Rockit", description: "A high speed rollercoaster with a music them.  Guests can pick a song from a preselected group of genres before riding the ride.  Also has the world's largest non-inverted loop. "}, 
	{title: "Shrek 4D", description: "Join Shrek and Donkey in another whirl-wind adventure to save Princess Fiona from the ghost of Lord Farquad in a journey that goes beyond the third dimension."},
	{title: "Revenge of the Mummy", description: "Venture deep inside an Egyptian tomb in search of the Magi.  Every twist and turn of this high speed coaster holds a secret or surprise."},
	{title: "E.T", description: "E.T.'s home planet is dying and needs your help!  Hop aboard your bike and follow E.T. in an adventure that is out of this world!"},
	{title: "Twister: Ride It Out", description: "Guests step onto a live sound stage as they experience the sounds, sights and feelings of a real life tornado."},
	{title: "Disaster", description: "Guests are cast as extras for Mr. Kincaid's next big disaster movie, 'Mutha Nature'.  Climb aboard a subway train and prepare to sit through a. 8.0 earthquake deep below the heart of downtown Los Angeles."},
	{title: "Men in Black: Alien Attack", description: "Alright recruits, suit up.  Aliens have crash landed in the heart of Manhatten and it's up to you to clean up the mess.  Aim for the thermal exhaust ports!'"}
];

var islands = [
	{title: "The Amazing Spiderman", description: "Calling all true believers...Spiderman needs your help to stop Dr. Octopus and his Sinsiter Syndicate from stealing the Statue of Liberty.  Hop in the Daily Bugle's Scoop vehicle and help your friendly neighborhood Spiderman before it's too late."},
 	{title: "The Incredible Hulk", description: "Enter Bruce Banner's lab and climb aboard his Gamma Ray Accelerator as you go from 0-60 in 3 seconds flat!"},
 	{title: "Rip Saw Falls", description: "Calling all Mounties!  Dudley Do-Right needs your help to rescue Nell from the dastardly Snidely Whiplash.  Follow along Dudley and Horse in this side splitting adventure that jumps right out of the pages from the Sunday Funnys."},
 	{title: "Dueling Dragons", description: "Choose your destiny: Fire or Ice as the dragon of your choice duels to the death high above the earth in a roller coaster battle that will take you within inches of your opponent."},
 	{title: "Jurassic Park Adventure", description: "Take a relaxing ride through the river at Jurassic Park and become immersed in the prehistoric scenery and wildlife on this guided tour.  Don't worry.  The raptors are safely locked away in containment."}, 
 	{title: "Poseidon's Fury", description: "Journey deep into the Temple of Poseidon in search of the Golden Trident.  Your scheduled tour guide appears to have called in sick, although I'm sure your replacement, Taylor will be a suitable replacement."}, 
 	{title: "Cat in the Hat", description: "Hop aboard your comfy couch and take a spin with the Cat in the Hat himself as you go page by page through this beloved children's tale."}
 ];

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

