/*
* Space Invaders structure
** @author Josh GIbbs - uPaymeiFixit@gmail.com
*/

var ctx,_WIDTH,_HEIGHT,
	ai = [],
	player,
	bullet = [],
	frame = 0,
	timer,
	score = 0,
	vx, vy;

window.onload = function (){
	ctx = document.getElementById("canvas").getContext("2d");
	setup();
	for (var i = 0; i < 50; i++) {
		makeAI();
	};
	makePlayer();
	timer = setInterval('main()',1000/24);
};

window.onresize = setup;

function setup(){
	_WIDTH = window.innerWidth;
	_HEIGHT = window.innerHeight;
	ctx.canvas.width = _WIDTH;
	ctx.canvas.height = _HEIGHT;

	ctx.font = "20pt Arial";
};

/*** INPUT ***/

var mx = 0, my = 0, mdown = true;
document.onmousemove = function(e) { mx = e ? e.pageX : event.pageX; my = e ? e.pageY : event.pageY };
document.onmousedown = function() { mdown = true };
document.onmouseup = function() { mdown = false };
document.onkeypress = function(e) {
	e = e ? e : event;
	if( e.keyCode == 112 ) {
		timer ? clearInterval( timer ) : ( timer = setInterval( 'main()', 1000/30 ) );
	};
};

function makePlayer() {
	player = {x: _WIDTH / 2,
			y: _HEIGHT / 2,
			radius: 6 };
};

function makeAI() {
	if( Math.random() > 0.5 ) {
		var x = Math.random() < 0.5 ? Math.random() * -100 : Math.random() * 100 + _WIDTH;
		var y = Math.random() * _HEIGHT;
	} else {
		var x = Math.random() * _WIDTH;
		var y = Math.random() < 0.5 ? Math.random() * -100 : Math.random() * 100 + _HEIGHT;
	};
	ai[ai.length] = {x: x,
					y: y,
					radius: 4 };
};

function makeBullet() {
	bullet[bullet.length] = {
		x: player.x,
		y: player.y,
		vx: player.vx * 5,
		vy: player.vy * 5,
		radius: 2 }
};

function main() {

	ctx.clearRect(0, 0, _WIDTH, _HEIGHT);

	if ( ( !( frame++ % 2) ) && mdown ) {
		makeBullet();
	};

	var theta = Math.atan2(( my - player.y ), ( mx - player.x ));
	player.vx = Math.cos( theta ) * 5;
	player.vy = Math.sin( theta ) * 5;
	//console.log(Math.round(vy));

	player.x += player.vx;
	player.y += player.vy;

	ctx.fillStyle = '#00FF00';
	draw( player );

	for ( var i = 0; i < bullet.length; i++ ) {

		bullet[ i ].x += bullet[ i ].vx;
		bullet[ i ].y += bullet[ i ].vy;

		ctx.fillStyle = '#FF00FF';
		draw( bullet[ i ] );

		for (var j = 0; j < ai.length; j++) {
			if ( collision( bullet[ i ], ai[ j ] ) ) {
				ai.splice( j, 1 );
				bullet.splice( i, 1 );
				makeAI();
				makeAI();
				score++;
			};
		};

		if ( bullet[ i ].x > _WIDTH || bullet[ i ].x < 0 || bullet[ i ]. y > _HEIGHT || bullet[ i ].y < 0 ) {
			bullet.splice( i, 1 );
		};

		ctx.fillStyle = '#00FFFF'
		var sc = "Score " + score;
		ctx.fillText(sc, 100, 100)

	};

	

	ctx.fillStyle = '#FFFFFF';
	for ( var i = 0; i < ai.length; i++ ) {

		var theta = Math.atan2(( player.y - ai[i].y ), ( player.x - ai[i].x ));
		ai[i].vx = Math.cos( theta );
		ai[i].vy = Math.sin( theta );

		ai[i].x += ai[i].vx;
		ai[i].y += ai[i].vy;

		draw( ai[ i ] );

		if ( collision( ai[ i ], player ) ) {
			clearInterval( timer );
			ctx.fillStyle = '#FF0000'
			ctx.font = "70pt Arial";
			ctx.fillText('GAME OVER', 100, 300)
			return null;
		};
	};
};

function draw( ob ) {
	ctx.beginPath();
	ctx.arc(ob.x,ob.y,ob.radius,0,6.2832, true);
	ctx.fill();
};

function collision( obj1, obj2 ){
	var	radius = 15 //obj1.radius;
return ((obj2.y - radius <= obj1.y - radius && 
		obj1.y - radius <= (obj2.y + radius)) || 
		(obj1.y - radius <= obj2.y - radius && 
		obj2.y - radius <= (obj1.y + radius))) && 
		((obj2.x -radius <= obj1.x - radius && 
		obj1.x - radius <= (obj2.x + radius)) || 
		(obj1.x - radius <= obj2.x - radius && 
		obj2.x - radius <= (obj1.x + radius)));
};
