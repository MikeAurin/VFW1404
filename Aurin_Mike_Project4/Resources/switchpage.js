var switchWindow = Ti.UI.createWindow({
	backgroundColor: "#0465b2"
});

var label = Ti.UI.createLabel({
	text: "Family Friendly Rides",
	top: 50,
	left: 10
});

var familySwitch = Ti.UI.createSwitch({
	value: true,
	top: 50,
	right: 30
});

switchWindow.add(familySwitch);
switchWindow.open();

