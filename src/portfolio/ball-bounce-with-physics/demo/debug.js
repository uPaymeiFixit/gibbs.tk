/**
 * @author Josh Gibbs
 */

function toggledebug() {
 	if(debug){
 		debug = false;
 	} else {
 		debug = true;
 	};
};

function renderTime(){
	starttime = endtime;
	endtime = (new Date()).getTime();
	totaltime = totaltime + endtime - starttime;
	timeints++;
}

function doStats() {
	if(debug){
		for(var i = 0; i < quant; i++){
			//energy of one ball, m/2*v^2
			energy += ball[i].radius / 2 * Math.pow(Math.sqrt(Math.pow(Math.abs(ball[i].vx), 2) + Math.pow(Math.abs(ball[i].vy), 2)), 2);
			sizec += Math.PI * Math.pow(ball[i].radius, 2);
			sizes += Math.pow(ball[i].radius, 2) * 4;
		};
		document.getElementById("stats").innerText = Math.round(1000 / (totaltime / timeints)) + "FPS";
		timeints = 0;
		totaltime = 0;
		document.getElementById("stats").innerHTML += "</br>Kinetic energy: " + Math.round(energy);
		energy = 0;
		sizeleft = ctx.canvas.width * ctx.canvas.height - sizes;
		document.getElementById("stats").innerHTML += "</br>Space left (sq): " + sizeleft;
		sizeleft = Math.round(ctx.canvas.width * ctx.canvas.height - sizec);
		document.getElementById("stats").innerHTML += "</br>Space left (ci): " + sizeleft;
		sizes = 0;
		sizec = 0;
	};
};