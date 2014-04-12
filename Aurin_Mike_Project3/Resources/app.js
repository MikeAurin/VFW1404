Ti.UI.setBackgroundColor("#000");

var bands = {
	"sevenfold": {
		"headTitle": "Avenged Sevenfold",
		"footTitle": "Orange County Metal Band",
		"members": [
			{
				"name": "M. Shadows", 
				"info": "Lead Singer.  Known for his raspy yet powerful vocals"
			}, 
			{
				"name": "Synyster Gates", 
				"info": "Lead guitarist and backup vocalist.  Known for technical solos and melodic riffs."
			}, 
			{
				"name": "Zacky Vengeance",
				"info": "Rhythm guitarist and backup vocalist.  Capable of tight and fast riffs and harmonizing with lead guitar parts. "
			}, 
			{
				"name": "Johnny Christ",
				"info": "Bassist.  Contributes heavy grooves as well as intricate undertones to the rhythm section."
			}, 
			{
				"name": "Arin Iljey", 
				"info": "Drummer.  New-comer to the band.  Filled in for the late Jimmy 'The Rev' Sullivan."
			}, 
		]
	},
	"adtr": {
		"headTitle": "A Day To Remember",
		"footTitle": "Ocala Based Pop-Punk Band",
		"members":	[
			{
				"name": "Jeremey McKinnon", 
				"info": "Lead Singer.  Capable of hitting clean high notes as well as low screams."
			}, 
			{
				"name": "Neil Westfall",
				"info": "Rhythm guitarist and backup vocalist.  Plays fast punk inspired rhythm sections while contributing back up screams during live shows."
			},
			{
				"name": "Joshua Woodard",
				"info": "Bassist.  Contributes to the heavy tones of the rhythm section."
			},
			{
				"name": "Kevin Skaff", 
				"info": "Lead guitarist and backup vocalist.  Plays the melodic section of songs and aids Jeremy with clean vocals both in the studio and on live shows."
			},
			{
				"name": "Alex Shelnut", 
				"info": "Drummer.  Adds fast punk fills with metal influenced double bass beats."
			}
		]
	}
};

var mainWindow = Ti.UI.createWindow({
	backgroundColor:"#fff"
});
var tableView = Ti.UI.createTableView({
	top: 20
});
var makeUI = function(){
for(var i in bands){
		var bandsTable = Ti.UI.createTableViewSection({
			text: bands[i].headTitle
		});
		for(var j = 0, k = bands[i].members.length; j < k; k++){
			var bandsTableRow = Ti.UI.createTableViewRow({
				text: bands[i].members.length
			});
		}
		
	};
		
};

makeUI();

mainWindow.add(tableView);
mainWindow.open();
