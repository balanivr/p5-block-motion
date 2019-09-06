// var newx = 0, newy = 0;
// var originx = 0, originy = 0;
// var spd = 0.09; // (val - 0.0-1.0) increase or decrease the follow through 

let width_ratio = 5 / 100;
let height_ratio = 12.5 / 100;
let dx = 0;
let dy = 0;

function setup() {            
    noStroke();            
    smooth(8);            
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('hero');
}

function draw() {
    initCanvas();
}

function windowResized() {
    initCanvas();
}

function initCanvas() {
    let x_factor = width_ratio * windowWidth;
    let y_factor = height_ratio * windowHeight;

    dx = (mouseX / x_factor);
    dy = (mouseY / y_factor);
    
    resizeCanvas(windowWidth, windowHeight);
    draw_b1(x_factor, y_factor);
    draw_t(x_factor, y_factor);
    draw_b2(x_factor, y_factor);
}

function draw_b1(x, y) {
    fill(255, 120, 0);
    beginShape();
    vertex(2 * x, 1 * y + dy * 4);
    vertex(3 * x, 1 * y + dy * 4);
    vertex(3 * x, 4 * y);
    vertex(6 * x - dx, 4 * y);
    vertex(6 * x - dx, 7 * y);
    vertex(2 * x, 7 * y);
    vertex(2 * x, 2 * y);
    endShape();

    fill(0);
    beginShape();
    vertex(3 * x, 5 * y - dy * 3);
    vertex(5 * x - dx * 2, 5 * y - dy * 3);
    vertex(5 * x - dx * 2, 6 * y - dy * 3);
    vertex(3 * x, 6 * y - dy * 3);
    vertex(3 * x, 5 * y - dy * 3);
    endShape();
}

function draw_t(x, y) {
    fill(255, 120, 0);
    beginShape();
    vertex(9 * x - dx, 1 * y);
    vertex(10 * x - dx, 1 * y);
    vertex(10 * x - dx, 3 * y - dx * 2);
    vertex(11 * x - dx, 3 * y - dx * 2);
    vertex(11 * x - dx, 4 * y - dx * 2);
    vertex(10 * x - dx, 4 * y - dx * 2);
    vertex(10 * x - dx, 6 * y - dy * 3);
    vertex(12 * x - dx, 6 * y - dy * 3);
    vertex(12 * x - dx, 7 * y);
    vertex(9 * x - dx, 7 * y);
    vertex(9 * x - dx, 4 * y - dx * 2);
    vertex(8 * x - dx, 4 * y - dx * 2);
    vertex(8 * x - dx, 3 * y - dx * 2);
    vertex(9 * x - dx, 3 * y - dx * 2);
    vertex(9 * x - dx, 1 * y);
    endShape();
}

function draw_b2(x, y) {
    fill(255, 120, 0);
    beginShape();
    vertex(14 * x - dx, 1 * y);
    vertex(15 * x, 1 * y);
    vertex(15 * x, 4 * y - dy * 4);
    vertex(18 * x - dy * 3, 4 * y - dy * 4);
    vertex(18 * x - dy * 3, 7 * y);
    vertex(14 * x - dx, 7 * y);
    vertex(14 * x - dx, 2 * y);
    endShape();

    fill(0);
    beginShape();
    vertex(15 * x - dx * 2 + 3 * dy, 5 * y - 3 * dy);
    vertex(17 * x + 3 * dy, 5 * y - 3 * dy);
    vertex(17 * x + 3 * dy, 6 * y - 3 * dy);
    vertex(15 * x - dx * 2 + 3 * dy, 6 * y - 3 * dy);
    vertex(15 * x - dx * 2 + 3 * dy, 5 * y - 3 * dy);
    endShape();
}