var time = 0; 
var running = 0; 
var mins = 0;
function start() {
	if (running == 0) {
		running = 1;
		increment();
		document.getElementById("start").innerHTML = "Pause";
	} else{
		running = 0;
		document.getElementById("start").innerHTML = "Resume";
	}
}

function reset() {
	running = 0;
	time = 0;
	document.getElementById("start").innerHTML = "Start";
	document.getElementById("timer").innerHTML = "0:0";
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
