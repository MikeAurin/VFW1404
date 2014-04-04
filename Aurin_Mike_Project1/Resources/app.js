Ti.UI.setBackgroundColor("#white");

var albumList = ["Sounding the Seventh Trumpet",
				 "Waking the Fallen", 
				 "City of Evil",
				 "Avenged Sevenfold", 
				 "Nightmare", 
				 "Hail to the King"];
				 
var counter = 0;

var appWindow = Ti.UI.createWindow({
	backgroundColor: "black",
	top: 20,
});

var titleView = Ti.UI.createView({
	backgroundColor: "white",
	height: 40,
	top : 20,
	left: 20,
	right: 20,
	borderRadius: 2,
	borderColor: "red",
});

var titleText = Ti.UI.createLabel({
	text: "Avenged Sevenfold Albums",
	color: "Black",
	font: {fontSize: 18, fontFamily: "Palatino", fontWeight: "bold"},
	align: "center"
});

var logoView = Ti.UI.createView({
	left: 40,
	right: 40,
	top: titleView.top + 50,
	height: 100,
	backgroundImage: "deathbat.png",
	backgroundColor: "black"
});

var albumView = Ti.UI.createView({
	backgroundColor: "white",
	left: 30,
	right: 30,
	top: logoView.top + 150,
	height: 50
});

var albumText = Ti.UI.createLabel({
	text: "Click Previous or Next to Begin",
	color: "black",
	align: "center"
});

var backButton = Ti.UI.createView({
	left: 20,
	width: 130, 
	height: 100,
	bottom: 20,
	borderRadius: 20,
	backgroundColor: "red"
});

var goBack = function(){
          albumText.text = albumList[counter];
    if (counter === 0){
        counter = albumList.length - 1;
    }
    else {counter = counter - 1};
};

	appWindow.add(albumText);

backButton.addEventListener("click", goBack);

var previousText = Ti.UI.createLabel({
	text: "Previous Album",
	color: "black",
	align: "center"
});

var nextText = Ti.UI.createLabel({
	text: "Next Album",
	color: "black",
	align: "center"
});
var nextButton = Ti.UI.createView({
	right: 20,
	width: 130,
	height: 100,
	bottom: 20,
	borderRadius: 20,
	backgroundColor: "green"
});

var goForward = function(){	
	  console.log (counter);
    albumText.text=albumList[counter];
    if (counter === albumList.length-1){
        counter=0;  
    }
    else {counter=counter+1};    
};

	
nextButton.addEventListener("click", goForward);



appWindow.open();

appWindow.add(titleView);
titleView.add(titleText);
appWindow.add(logoView);
backButton.add(previousText);
appWindow.add(nextButton);
nextButton.add(nextText);
appWindow.add(albumView);
albumView.add(albumText);
appWindow.add(backButton);
appWindow.add(nextButton);