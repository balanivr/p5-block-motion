// var newx = 0, newy = 0;
// var originx = 0, originy = 0;
// var spd = 0.09; // (val - 0.0-1.0) increase or decrease the follow through 

let width_ratio = 5 / 100;
let height_ratio = 12.5 / 100;

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
    
    resizeCanvas(windowWidth, windowHeight);
    draw_b1(x_factor, y_factor);
    draw_t(x_factor, y_factor);
    draw_b2(x_factor, y_factor);
}

function draw_b1(x, y) {
    fill(255);
    beginShape();
    vertex(2 * x, 1 * y);
    vertex(3 * x, 1 * y);
    vertex(3 * x, 4 * y);
    vertex(6 * x, 4 * y);
    vertex(6 * x, 7 * y);
    vertex(2 * x, 7 * y);
    vertex(2 * x, 2 * y);
    endShape();

    fill(0);
    beginShape();
    vertex(3 * x, 5 * y);
    vertex(5 * x, 5 * y);
    vertex(5 * x, 6 * y);
    vertex(3 * x, 6 * y);
    vertex(3 * x, 5 * y);
    endShape();
}

function draw_t(x, y) {
    fill(255);
    beginShape();
    vertex(9 * x, 1 * y);
    vertex(10 * x, 1 * y);
    vertex(10 * x, 3 * y);
    vertex(11 * x, 3 * y);
    vertex(11 * x, 4 * y);
    vertex(10 * x, 4 * y);
    vertex(10 * x, 6 * y);
    vertex(12 * x, 6 * y);
    vertex(12 * x, 7 * y);
    vertex(9 * x, 7 * y);
    vertex(9 * x, 4 * y);
    vertex(8 * x, 4 * y);
    vertex(8 * x, 3 * y);
    vertex(9 * x, 3 * y);
    vertex(9 * x, 1 * y);
    endShape();
}

function draw_b2(x, y) {
    fill(255);
    beginShape();
    vertex(14 * x, 1 * y);
    vertex(15 * x, 1 * y);
    vertex(15 * x, 4 * y);
    vertex(18 * x, 4 * y);
    vertex(18 * x, 7 * y);
    vertex(14 * x, 7 * y);
    vertex(14 * x, 2 * y);
    endShape();

    fill(0);
    beginShape();
    vertex(15 * x, 5 * y);
    vertex(17 * x, 5 * y);
    vertex(17 * x, 6 * y);
    vertex(15 * x, 6 * y);
    vertex(15 * x, 5 * y);
    endShape();
}