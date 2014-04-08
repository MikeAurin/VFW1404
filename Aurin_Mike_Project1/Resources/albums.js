var albumList = ["Sounding the Seventh Trumpet",
				 "Waking the Fallen", 
				 "City of Evil",
				 "Avenged Sevenfold", 
				 "Nightmare", 
				 "Hail to the King"];
				 
var counter = 0;

var goBack = function(){
	if (counter === 0){
        counter = albumList.length - 1;
    }
    else {counter = counter - 1};
    albumText.text = albumList[counter];
};

	appWindow.add(albumText);

backButton.addEventListener("click", goBack);

var goForward = function(){	
	  console.log (counter);
    if (counter === albumList.length - 1 ){
        counter = 0;  
    }
    else {counter = counter + 1};   
    albumText.text = albumList[counter]; 
};

nextButton.addEventListener("click", goForward);

