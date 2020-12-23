function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	rot = 0;
}

let rot;

function drawSquare(size, r) {
	push();
	translate(size, size);
	rotate(r);
	square(-size, -size, size * 2);
	pop();
}

function draw() {
	clear();
	rot += deltaTime / 1000;
	for (var y = 0; y < 15; ++y) {
		for (var x = 0; x < 15; ++x) {
			push();
			let r = rot + (x + y);
			translate(x * 50, y * 50);
			drawSquare(25, r);
			pop();
		}
	}
}