galleryWindow = Ti.UI.createWindow({
	backgroundColor: "#0465b2",
	title: "Cant decide what to do next?"
});

navWin = Ti.UI.iOS.createNavigationWindow({
	window: galleryWindow
});

var imageArray = 
	["gallery/et.jpg",
	"gallery/etride.jpg",
	"gallery/fury.jpg",
	"gallery/hulk.jpg",
	"gallery/hulk2.jpg",
	"gallery/jpart.gif",
	"gallery/jppromo.gif",
	"gallery/mib.jpg",
	"gallery/mib2.jpg",
	"gallery/mummyride.jpg",
	"gallery/poseidon.jpg",
	"gallery/ripride.jpg",
	"gallery/ripridepromo.jpg",
	"gallery/ripsaw.jpg",
	"gallery/ripsaw2.jpg",
	"gallery/shrek4d.jpg",
	"gallery/shrekpromo.jpg",
	"gallery/spidey.jpg",
	"gallery/spideypromo.jpg",
	"gallery/themummypromo.jpg",
	"gallery/twister.jpg",
	"gallery/twisterpromo.jpg",
	];

var imgs = Ti.UI.createImageView({
		image: "",
		width: "100%",
		top: 100,
		zIndex: 0
		});

changeButton = Ti.UI.createButton({
	backgroundColor: "white",
	bottom: 0,
	width: "200%",
	title: "Choose My Next Ride!",
	height: 50,
	color: "black",
	zIndex: 1,
	
});

var backButton = Ti.UI.createLabel({
	top: 0,
	height: 50,
	left: 5,
	text: "< Home",
	font: {fontFamily: "Futura", fontSize: 24},
	color: "white",
	textAlign: "center"
});

var closeGallery = function(){
	var goHome = require("app");
	mainWin.open();
	navWin.close();
};

backButton.addEventListener("click", closeGallery);


var randomPictures = function(min, max){
	return Math.floor(Math.random() * (max - min + 1) + min);
	};

changeButton.addEventListener('click', function (e) {
    imgs.image = (imageArray[randomPictures(1, imageArray.length) - 1]);
    });
    
    

galleryWindow.add(changeButton, imgs, backButton);
navWin.add(mainWin);
navWin.open();
