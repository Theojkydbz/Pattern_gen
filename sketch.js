const CRYSTAL_SIZE = 900;
const SIDES = 6;

// //layout
// const MARGIN = CRYSTAL_SIZE / 2
// const COLUMNS = 3
// const ROWS = 4
// const PADDING = CRYSTAL_SIZE * 0.2
// const GRIDBOX = CRYSTAL_SIZE + PADDING
// const START = CRYSTAL_SIZE / 2 + MARGIN

let PALETTE = [];
ALL_CRYSTALS = []

const layers = []

function setup() {

    // const totalX = START + GRIDBOX * COLUMNS
    // const totalY = START + GRIDBOX * ROWS

    createCanvas(window.innerWidth,window.innerHeight);
    background(255);
    PALETTE = [
        color(104, 199, 250),    //beige
        color(255, 119, 0),       //salmon
    ]
    noLoop();
    angleMode(DEGREES);
    rectMode(CENTER);

}

function draw() { 

    const crystal = makeCrystal({x: window.innerWidth/2,y: window.innerHeight/2})
    ALL_CRYSTALS.push(crystal)
    // for(let x = 0; x < COLUMNS; x++) {
    //     for(let y = 0; y < ROWS; y++) {
    //         const posX = START + (x * GRIDBOX)
    //         const posY = START + (y * GRIDBOX)
    //         const crystal = makeCrystal({x: posX, y: posY})
    //         ALL_CRYSTALS.push(crystal)
    //         //console.log(crystal)
    //     } 
    // }
    
 
    ALL_CRYSTALS.forEach(crystal =>{
        drawCrystal(crystal)
    })

    // console.log(Circles({test: 'hello'}))
    save('myCanvas.jpg')
}



