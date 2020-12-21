function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}
let PI = 3.141592;

function drawClock(x, y, radius, hour, minute, second) {
	circle(x, y, radius * 2);
	var hourx = sin(hour / 12 * PI * 2);
	var houry = cos(hour / 12 * PI * 2);
	line(x, y, x + hourx * radius * 0.5, y - houry * radius * 0.5);

	var minutex = sin(minute / 60 * PI * 2);
	var minutey = cos(minute / 60 * PI * 2);
	line(x, y, x + minutex * radius * 0.8, y - minutey * radius * 0.8);

	var secondx = sin(second / 60 * PI * 2);
	var secondy = cos(second / 60 * PI * 2);
	line(x, y, x + secondx * radius * 0.9, y - secondy * radius * 0.9);
}

function drawClockOnCircle(x, y, radius, numSections) {
	var h = hour();
	var m = minute();
	var s = second();
	for (var i = 0; i < numSections; ++i) {
		var xx = x + sin(i * PI / numSections * 2) * radius;
		var yy = y + cos(i * PI / numSections * 2) * radius;
		drawClock(xx, yy, 10, h, m, s);
	}
}

function drawClockOnLine(x1, y1, x2, y2, numSections) {
	var h = hour();
	var m = minute();
	var s = second();
	var yinc = (y2 - y1) / numSections;
	var xinc = (x2 - x1) / numSections;
	var yiter = 0;
	var x = x1;
	for (var y = y1; yiter < numSections; y += yinc) {
		drawClock(x, y, 10, h, m, s);
		x += xinc;
		yiter++;
	}
}

function draw() {
	clear();
	let x = 400;
	let y = 400;
	let radius = 300;
	var h = hour();
	var m = minute();
	var s = second();

	drawClockOnCircle(x, y, radius, 60);
	var hourx = sin(h / 12 * PI * 2);
	var houry = cos(h / 12 * PI * 2);
	drawClockOnLine(x, y, x + hourx * radius * 0.5, y - houry * radius * 0.5, 10);

	var minutex = sin(m / 60 * PI * 2);
	var minutey = cos(m / 60 * PI * 2);
	drawClockOnLine(x, y, x + minutex * radius * 0.8, y - minutey * radius * 0.8, 12);

	var secondx = sin(s / 60 * PI * 2);
	var secondy = cos(s / 60 * PI * 2);
	drawClockOnLine(x, y, x + secondx * radius * 0.9, y - secondy * radius * 0.9, 14);
}