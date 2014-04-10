var bands = {
	"band1":{
		"headTitle": "Avenged Sevenfold",
		"footTitle": "Orange County metal band",
		"members": [
			{
				"M.Shadows": "Lead singer.  Known for raspy yet powerful vocals."
			},
			{
				"Synester Gates": "Lead guitarist.  Known for fast and technical solos."
			},
			{
				"Zacky Vengeance": "Rhymthm guitarist and backup vocals.  Capable of tight rhythm guitar as well as harmonizing many solos and guitar riffs with Synester Gates."
			},
			{
				"Johnny Christ": "Bassist and backup vocals.  Plays deep, powerful grooves as well as adding complexity and melody to riffs."
			},
			{
				"Arin Iljeay": "Drummer.  New comer to the band, took over for the band after passing of the original drummer Jimmy 'The Rev' Sullivan."
			}
		]
	},
	"band2": {
		"headTitle": "A Day to Remember",
		"footTitle": "Ocala based pop-punk band.",
		"members": [
			{
				"Jermey Mckinnon": "Lead Singer.  Has a diverse range of high clean notes to deep, thunderous screams."
			},
			{
				"Neil Westfall": "Rhythm Guitarist and backup vocals.  Known for quick punk riffs as well as supplemental screaming during live shows."
			},
			{
				"Kevin Skaff": "Lead Guitarist and backup vocals.  Plays lead melodic riffs as well as provides additional clean vocals on albums and live shows."
			},
			{
				"Joshua Woodard": "Bassist.  Consistent with breakdowns and rhythm sections."
			},
			{
				"Alex Shelnutt": "Drummer.  Fast punk drummer with a proficiency in double bass fills."
			}
		]
	}
};



for(var i in bands){
	console.log(bands[i].headTitle);
	for(var n=0, p=bands[i].members.length; n<p; p++){
		console.log(bands[i].members[p]);
	}
}