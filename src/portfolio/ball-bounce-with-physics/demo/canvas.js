/**
 * @author Josh Gibbs
 */

//find largest uninterrupted space, divide by 2, and if this is less than maxRadius then we change maxRadius to this number
//balls change color when they get closer to another object
//get physics working
//needs more controls
//fix merging error (push balls off the edge (offset))
//be able to create balls anywhere and have others move around them
//organize code
//program needs seperated into ball program and pattern program
//use time collision check for optimization

//This project is not finished, but I stopped development on it because I have
//no defined goal for it, therefore it I keep finding features and optimizations 
//I could add that are taking too much time.


const maxRadius = 30;
const minRadius = 10;

const maxSpeed = 5;
const minSpeed = 1;

const quantity = 2;

var ball = new Array;


var debug = true;
var ballcollisions = true;
var clear = true;
var lines = false;
var transparency = 1;
var drawmultiplier = 1;

var ctx, sizec, sizes, energy, starttime, endtime, totaltime, timeints;
var quant = 0;

window.onload = function() {
	//Sets and gets DOM stuff
	ctx = document.getElementById("canvas").getContext("2d");
	ctx.canvas.width = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	
	for(var i = 0; i < quantity; i++) {
		addCircle();
	};
	setInterval("animate()", 1000/60);
	setInterval("doStats()", 500);
};

function addCircle(){
	ball[quant] = new Object;
	
	ball[quant].vx = (Math.random() * (maxSpeed - minSpeed) - maxSpeed) * (Math.random() < 0.5 ? -1 : 1);
	ball[quant].vy = (Math.random() * (maxSpeed - minSpeed) - maxSpeed) * (Math.random() < 0.5 ? -1 : 1);
	
	ball[quant].radius = Math.floor(Math.random() * (maxRadius - minRadius) + minRadius);
	
	//do{
		ball[quant].y = Math.floor(Math.random() * (ctx.canvas.height - ball[quant].radius * 2) + ball[quant].radius);
		ball[quant].x = Math.floor(Math.random() * (ctx.canvas.width - ball[quant].radius * 2) + ball[quant].radius);
	//} while (checkcollision(quant));
	
	//ball[quant].color = randomColor(); //'#' + (Math.random() * (0xFFFFFF + 1) << 0).toString(16);
	
	quant++;
}

function randomColor(){
	return 'rgb(' + hsvToRgb(Math.random(), 1, 1) + ')';
};

/**
 * Converts an HSV color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 * Assumes h, s, and v are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   Number  h       The hue
 * @param   Number  s       The saturation
 * @param   Number  v       The value
 * @return  Array           The RGB representation
 */
function hsvToRgb(h, s, v){
    var r, g, b;

    var i = Math.floor(h * 6);
    var f = h * 6 - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);

    switch(i % 6){
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    };

    return [Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255)];
};

function checkcollision(i){
	if(ballcollisions){
	for (var n = 0; n < i; n ++) {
		if(Math.sqrt(Math.pow((ball[i].x - ball[n].x), 2) + Math.pow((ball[i].y - ball[n].y), 2)) <= ball[i].radius + ball[n].radius){
			if(debug){
				console.log("Move(" + i + ", " + n + ")");
			};
			return true;
		};
	};
	} else { 
		return false;
	};
};

//tmp
function timetocollision(i, n){
/*
var x1 = 0;
var x2 = 10;
var y1 = 0;
var y2 = 0;
var vx1 = 1;
var vx2 = 0;
var vy1 = 0;
var vy2 = 0;
var r1 = 10;
var r2 = 10;
*/
	
	
	var x1 = ball[i].x;
	var x2 = ball[n].x;
	var y1 = ball[i].y;
	var y2 = ball[n].y;
	var vx1 = ball[i].vx;
	var vx2 = ball[n].vx;
	var vy1 = ball[i].vy;
	var vy2 = ball[n].vy;
	var r1 = ball[i].radius;
	var r2 = ball[n].radius;
	
	
	var t = (2 * (-x1 * vx1 - y1 * vy1 + vx1 * x2 + vy1 * y2 + x1 * vx2 - x2 * vx2 + y1 * vy2 - y2 * vy2) - Math.sqrt(Math.pow((-2 * (-x1 * vx1 - y1 * vy1 + vx1 * x2 + vy1 * y2 + x1 * vx2 - x2 * vx2 + y1 * vy2 - y2 * vy2)), 2)) - 4 * (Math.pow(vx1, 2) + Math.pow(vy1, 2) - 2 * vy1 * vy2 + Math.pow(vy2, 2)) * (Math.pow(x1, 2) + Math.pow(y1, 2) - Math.pow(r1, 2) - 2 * x1 * x2 + Math.pow(y2, 2) - 2 * r1 * r2- Math.pow(r2, 2))) / (2 * (Math.pow(vx1, 2) + Math.pow(vy1 , 2) - 2 * vx1 * vx2 + Math.pow(vx2, 2) - 2 * vy1 * vy2 + Math.pow(vy2, 2)));
	
	return t;
}

function wallcollision(i){
	if(ball[i].x >= ctx.canvas.width - ball[i].radius - ball[i].vx || ball[i].x <= ball[i].radius - ball[i].vx){
		ball[i].vx *= -1;
		ball[i].x += ball[i].vx; //keeps circles from being bumped further into the wall
	};
	if(ball[i].y >= ctx.canvas.height - ball[i].radius - ball[i].vy || ball[i].y <= ball[i].radius - ball[i].vy) {
		ball[i].vy *= -1;
		ball[i].y += ball[i].vy; //keeps circles from being bumped further into the wall
	};
};

function circlecollisions(i){
	for (var n = 0; n < i; n ++) {
// if (((ball[n].y - ball[n].radius <= ball[i].y - ball[i].radius && 
// 		ball[i].y - ball[i].radius <= (ball[n].y + ball[n].radius)) || 
// 		(ball[i].y - ball[i].radius <= ball[n].y - ball[n].radius && 
// 		ball[n].y - ball[n].radius <= (ball[i].y + ball[i].radius))) && 
// 		((ball[n].x - ball[n].radius <= ball[i].x - ball[i].radius && 
// 		ball[i].x - ball[i].radius <= (ball[n].x + ball[n].radius)) || 
// 		(ball[i].x - ball[i].radius <= ball[n].x - ball[n].radius && 
// 		ball[n].x - ball[n].radius <= (ball[i].x + ball[i].radius)))) {

// TODO: ball[i].x is undefined, throwing errors
if ( ball[i].x != NaN && ball[n].x != NaN && ball[i].y != NaN && ball[n].y != NaN &&
    ball[i].x != undefined && ball[n].x != undefined && ball[i].y != undefined && ball[n].y != undefined) {
if ( ball[n].IntersectsWith(ball[i]) ) {

			//distance formula
			var d = Math.sqrt(Math.pow((ball[i].x - ball[n].x), 2) + Math.pow((ball[i].y - ball[n].y), 2));
			if(d <= ball[i].radius + ball[n].radius){
			
				//only works for head on 1d collisions@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
				var v1i = ball[i].vx;
				var v2i = ball[n].vx;
				var m1 = ball[i].radius;
				var m2 = ball[n].radius;
				var vf1 = (m1 - m2) / (m1 + m2) * v1i + 2 * m2 / (m1 + m2) * v2i;
				var vf2 = 2 * m1 / (m1 + m2) * v1i + (m2 - m1) / (m1 + m2) * v2i;
				ball[i].vx = vf1;
				ball[n].vx = vf2;
			
				//only works for head on 1d collisions
				var v1i = ball[i].vy;
				var v2i = ball[n].vy;
				var m1 = ball[i].radius;
				var m2 = ball[n].radius;
				var vf1 = (m1 - m2) / (m1 + m2) * v1i + 2 * m2 / (m1 + m2) * v2i;
				var vf2 = 2 * m1 / (m1 + m2) * v1i + (m2 - m1) / (m1 + m2) * v2i;
				ball[i].vy = vf1;
				ball[n].vy = vf2;
				
				ball[n].x = ball[n].px;
				ball[n].y = ball[n].py;
				ball[i].x = ball[i].px;
				ball[i].y = ball[i].py;

				//ball[n].x -= d*ball[n].vx/(ball[n].vx + ball[n].vy);
				//ball[n].y -= d*ball[n].vy/(ball[n].vx + ball[n].vy);
				
				//ball[i].x += d*ball[i].vx/(ball[i].vx + ball[i].vy);
				//ball[i].y += d*ball[i].vy/(ball[i].vx + ball[i].vy);
			};
		};
	};
};
}

function animate() {
	
	//Calculates time took for each frame render
	if(debug){renderTime();};
	
	//Renders a frame multiple (specified) times per tick
	for(var dm = 0; dm <= drawmultiplier; dm++){
		
		//Clears canvas
		if(clear){ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);};
	
	
		for(var i = quant - 1; i >= 0; i--) {
		
			//renders circle to canvas
			var co = ball[i].x / ctx.canvas.width;
			ctx.beginPath();
			ctx.arc(ball[i].x, ball[i].y, ball[i].radius + 5, 0, 6.284, true);
			ctx.fillStyle = 'rgba(' + hsvToRgb(co, 1, 1) + ',' + transparency + ')';
			ctx.fill();
			ctx.strokeStyle = 'rgba(' + hsvToRgb(co + 0.5, 1, 1) + ',' + transparency + ')';
			ctx.stroke();
		
	
			//checks for wall collisions
			wallcollision(i);
			//checks for circle collisions
			if(ballcollisions){circlecollisions(i);};
	
			
			if(lines){
				for (var n = 0; n < i; n ++) {
					ctx.lineTo(ball[i].x, ball[i].y);
					ctx.lineTo(ball[n].x, ball[n].y);
					ctx.strokeStyle = ball[i].color;
					ctx.stroke();
				};
			};
			
		//ball movement
		ball[i].px = ball[i].x;
		ball[i].py = ball[i].y;
		ball[i].y += ball[i].vy;
		ball[i].x += ball[i].vx;
		
	};
	};
};

function checkStuck(){
	for(var i = 0; i < quant; i++) {
		if(ball[i].y >= ctx.canvas.height - ball[i].radius){
			ball[i].y = ctx.canvas.height - ball[i].radius;
		};
		if(ball[i].x >= ctx.canvas.width - ball[i].radius){
			ball[i].x = ctx.canvas.width - ball[i].radius;
		};
	};
};

window.onresize = function() {
	var h = window.innerHeight;
	var w = window.innerWidth;
	if(w < 640){
		ctx.canvas.width = 640;
	} else {
		ctx.canvas.width = w;
	};
	if(h < 480){
		ctx.canvas.height = 480;
	} else {
		ctx.canvas.height = h;
	}
	checkStuck();
};