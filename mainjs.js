var time = 0; 
var running = 0; 
var mins = 0;

function GBID (id) {
	return document.getElementById(id);
}
function start() {
	if (running == 0) {
		running = 1;
		increment();
		GBID("start").id = "pause";
		//GBID("start").innerHTML = "Pause";
	} else{
		running = 0;
		//GBID("start").style.background = "url(images/pausebutton.png) no-repeat";
		GBID("pause").id = "start";
	}
}

function repeat() {
	running = 0;
	time = 0;
	GBID("timer").innerHTML = "0:0";
	GBID("pause").id = "start";
	
}

function increment() {
	if (running == 1){
		setTimeout(function(){
			time++;
			var secs = Math.floor(time/10); 
			if (time > 590){
				time = time - 590;
				mins++;
			}
			document.getElementById("timer").innerHTML = mins + ":" + secs;
			increment();
		}, 100);
	}  
}

function addVariables () {
	console.log("It's work'd!")
}