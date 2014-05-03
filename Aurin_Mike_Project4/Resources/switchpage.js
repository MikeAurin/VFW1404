var switchWindow = Ti.UI.createWindow({
	backgroundColor: "#0465b2"
});

switchTitle = Ti.UI.createLabel({
	text: "Are you traveling with little ones today?",
	top: 30,
	color: "white"
});

var label = Ti.UI.createLabel({
	text: "Family Friendly Rides",
	top: 60,
	color: "white",
	font: {fontFamily: "Futura", fontSize: 26},
	left: 20
});

var rideList = Ti.UI.createLabel({
	top: 150,
	width: Ti.UI.SIZE,
	height: Ti.UI.SIZE,
	text: "",
	color: "white",
	font: {fontFamily: "Futura", fontSize: 48},
});

var basicSwitch = Ti.UI.createSwitch({
	value: true,
	top: 60,
	right: 30,
});

basicSwitch.addEventListener("change", function(e){
	//Ti.API.info('Switch value: ' + basicSwitch.value)
	if(basicSwitch.value === false){
		rideList.text = "Rollercoasters!  Spider-man, The Incredible Hulk, The Mummy, Dueling Dragons, Rip Saw Falls, Jurassic Park.";
	}else{
		rideList.text = "Kiddy Rides!  The Cat in the Hat, E.T., Men In Black, Poseidon's Fury, Shrek, Twister, Disaster,";
	}
});

var backButton = Ti.UI.createLabel({
	height: 50,
	width: "100%",
	text: "Home",
	backgroundColor: "white",
	font: {fontFamily: "Futura", fontSize: 30},
	textAlign: "center",
	color: "#0465b2",
	bottom: 0
});

var closeSwitch = function(){
	switchWindow.close();
};

backButton.addEventListener("click", closeSwitch);

switchWindow.add(basicSwitch, label, switchTitle, rideList, backButton);
switchWindow.open();



