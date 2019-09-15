const CRYSTAL_SIZE = 500;
const SIDES = 6;
let PALETTE = [];

function setup() {
    createCanvas(530,530,SVG);

    PALETTE = [
        color(255, 50, 154),    //pink
        color(4, 0, 152),       //blue
    ]
    noLoop();
    angleMode(DEGREES);
    rectMode(CENTER);

}
function draw() {
    // testLines();
    outlineShape();
}

function hexagon(posX, posY, radius) {
    let rotAngle = 360 / 6;
    beginShape();
    for (let i = 0; i < 6; i++) {
      const thisVertex = pointOncircle(posX, posY, radius, i * rotAngle)
      vertex(thisVertex.x, thisVertex.y);
    }
    endShape(CLOSE);
}

function pointOncircle(posX, posY, radius, angle) {
    const x = posX + radius * cos(angle)
    const y = posY + radius * sin(angle)
    return createVector(x, y)
}

function outlineShape () {
    const strokeColor = getRandomFromPalette()
    const weight = randomSelectTwo() ? 1 : 3
    const hexagonTrue = randomSelectTwo();
    stroke(strokeColor);
    strokeWeight(weight);
    push();
    translate(width/2,height/2);
    if(hexagonTrue){
        hexagon(0,0,CRYSTAL_SIZE / 2);
    } else {
        ellipse(0,0,CRYSTAL_SIZE,CRYSTAL_SIZE);
    }
    pop();
}

function testLines () {

    strokeWeight(2);
    let numShapes = randomSelectTwo() ? SIDES : SIDES * 2
    const strokeColor = getRandomFromPalette()


    noFill();
    stroke(PALETTE[0]);
    push();
        translate(width/2, height/2);
        ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)

        stroke(strokeColor)
        const angle = 360 / numShapes
        for(let i =0;i<numShapes; i++){
            line(0, 0, 0, CRYSTAL_SIZE/2);
            rotate(angle);
        }
    pop();

}

function randomSelectTwo() {

    const rando = random(1)
    if(rando > 0.5){
        return true
    } else {
        return false
    }

}

function getRandomFromPalette () {

    const rando2 = floor(random(0, PALETTE.length));
    return PALETTE[rando2];

}