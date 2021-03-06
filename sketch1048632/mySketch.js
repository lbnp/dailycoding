function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

let PI = 3.141592;

let digits = [
	[
		[0, 0, 0],
		[0, 0, PI / 2],
		[1, 0, PI / 2],
		[0, 1, PI / 2],
		[1, 1, PI / 2],
		[0, 2, 0]
	], // 0
	[
		[1, 0, PI / 2],
		[1, 1, PI / 2]
	], // 1
	[
		[0, 0, 0],
		[1, 0, PI / 2],
		[0, 1, 0],
		[0, 1, PI / 2],
		[0, 2, 0]
	], //2
	[
		[0, 0, 0],
		[1, 0, PI / 2],
		[0, 1, 0],
		[1, 1, PI / 2],
		[0, 2, 0]
	], //3
	[
		[0, 0, PI / 2],
		[0, 1, 0],
		[1, 0, PI / 2],
		[1, 1, PI / 2]
	], //4
	[
		[0, 0, 0],
		[0, 0, PI / 2],
		[0, 1, 0],
		[1, 1, PI / 2],
		[0, 2, 0]
	], //5
	[
		[0, 0, 0],
		[0, 0, PI / 2],
		[0, 1, 0],
		[1, 1, PI / 2],
		[0, 2, 0],
		[0, 1, PI / 2]
	], //6
	[
		[1, 0, PI / 2],
		[1, 1, PI / 2],
		[0, 0, 0]
	], // 7
	[
		[0, 0, PI / 2],
		[0, 0, 0],
		[1, 0, PI / 2],
		[0, 1, 0],
		[0, 1, PI / 2],
		[1, 1, PI / 2],
		[0, 2, 0]
	], //8
	[
		[0, 0, PI / 2],
		[0, 0, 0],
		[1, 0, PI / 2],
		[0, 1, 0],
		[1, 1, PI / 2],
		[0, 2, 0]
	] // 9
];

function drawNum(i) {
	digits[i].forEach(function(seg) {
		drawSeg(seg[0] * 100, seg[1] * 100, seg[2]);
	});
}

function drawColon()
{
	push();
	translate(0,20);
	rect(0,0,10,50);
	translate(0,100);
	rect(0,0,10,50);
	pop();
}

function drawSeg(x, y, rot) {
	push();
	translate(10, 0);
	translate(x, y);
	rotate(rot);
	rect(0, 0, 100, 10);
	pop();
}

function draw() {
	clear();
	push();
	var h = hour();
	drawNum(int(h / 10));
	translate(120, 0);
	drawNum(h % 10);
	translate(120, 0);
	drawColon();
	translate(20,0);
	var m = minute();
	drawNum(int(m / 10));
	translate(120, 0);
	drawNum(m % 10);
	translate(120, 0);
	drawColon();
	translate(20,0);
	var s = second();
	drawNum(int(s / 10));
	translate(120, 0);
	drawNum(s % 10);
	pop();
}