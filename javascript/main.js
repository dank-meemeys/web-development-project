var perClick = 1.0;
var multiplier = 1.0;
var total = 0;
var totalClicks = 0;

function addValue() {
	total = total + perClick * multiplier;
	totalClicks ++;
	document.title = totalClicks + " Total Clicks";
	var totalDisplay = document.getElementById("total-display");
	totalDisplay.innerHTML = total;
	audio = document.getElementById("anthem");
	audio.play()
	setTimeout(pause, 30000)
	function pause() {
		audio.pause()
	}
}

function main() {
}

main()
