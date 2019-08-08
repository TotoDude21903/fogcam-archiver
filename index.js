const fs = require("fs");
const request = require("request");
var moment = require("moment");

function downloadScreenshot() {
	var time = moment().unix();
	try {
		request("http://www.fogcam.org/fogcam2.jpg").pipe(fs.createWriteStream(__dirname + "/screenshots/" + time + ".jpg"));
	} catch (e) {
		console.log("Error: " + e.message);
	}
	console.log("Saved " + time);
}
downloadScreenshot();
setInterval(function() {
	downloadScreenshot();
}, 20000);
