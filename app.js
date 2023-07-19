var myFriends = ["Jack", "Fred", "Sean", "Kyle", "Andrew"];
var myLocations = [
	"Grand Foyer",
	"Library",
	"Ballroom",
	"Home Theater",
	"Indoor Pool",
	"Conservatory",
	"Game Room",
	"Wine Cellar",
	"Master Suite",
	"Backyard",
];
var myWeapons = [
	"Ashbringer",
	"Thunderfury, Blessed Blade of the Windseeker",
	"Frostmourne",
	"Doomhammer",
	"Warglaives of Azzinoth",
	"Sulfuras, Hand of Ragnaros",
	"Gorehowl",
	"Shadowmourne",
	"The Lich King's Helm",
	"The Eye of Sargeras",
	"Thunderaan's Rebirth",
	"Dragonwrath, Tarecgosa's Rest",
	"Quel'Delar, Might of the Faithful",
	"Zin'rokh, Destroyer of Worlds",
	"The Twin Blades of Azzinoth",
	"Thori'dal, the Stars' Fury",
	"The Ashes of Al'ar",
	"The Skull of Gul'dan",
	"The Fangs of the Father",
	"Westfall Staff",
];
// Add 100 h3 elements to the page
// How can i make the page display Accusation 1 and when clicked on it shows array index 0 instead of 1.
for (var i = 1; i <= 100; i++) {
	var h3 = $("<h3>Accusation " + i + "</h3>");
	$("body").append(h3);
	$(h3).click(myAlert(i));

	//How come it would keep running the function with this code but not the code above?
	// $("h3").click(myAlert(i));
}

function myAlert(i) {
	var friends = myFriends[i % 5];
	var locations = myLocations[i % 10];
	var weapons = myWeapons[i % 20];
	function alertMsg() {
		// Alert message
		alert(
			"Accusation " +
				i +
				": I accuse " +
				friends +
				", with the " +
				weapons +
				" in the " +
				locations +
				"!"
		);
	}
	return alertMsg;
}
