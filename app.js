var img;

let receiveImage = false;
let newImagePath = "";
var font;

var overlay = document.getElementById("overlay");

const W = 700;
const H = 700;

var pg;

function preload() {
    img = loadImage("data/img/0.jpg");
    font = loadFont("data/spaceMonoBold.ttf");
}

function setup() {
    var canvas = createCanvas(W,H);
    canvas.parent('sketch');
    img.resize(W,H);
    textFont(font);
    textSize(12);
    textAlign(LEFT,TOP);
}

function draw() {
    img.resize(W,H);
    let tilesX = document.getElementById("tilesX").value;
    let tilesY = tilesX;
    let threshold = document.getElementById("threshold").value;


    background("#ff0000");
    image(img,0,0);

    let tileW = W / tilesX;
    let tileH = H / tilesY;


    for (let x = 0; x < tilesX; x++) {
        for (let y = 0; y < tilesY; y++) {
            var px = Math.floor(x*tileW);
            var py = Math.floor(y*tileH);

            let c = img.get(parseInt(px),parseInt(py));

            let b = brightness(c);
            let fillColor = 0;

            if (b < threshold) {  
                fillColor = 0;

            } else {
                fillColor = 255;
            }

            
            push();
            translate(px,py);
            stroke("#aaaaaa");
            fill(fillColor);
            rect(0,0,tileW,tileH);
            pop();
        }
    }

    for (let x = 0; x < tilesX; x++) {
        fill("#ff0000");
        noStroke();
        push();
        translate(x*tileW,0);
        text(x,1,1);
        pop();
    }

    for (let y = 0; y < tilesY; y++) {
        fill("#ff0000");
        noStroke();
        push();
        translate(0,y*tileH);
        text(y,1,1);
        pop();
    }


    if (changeImage == true) {
       
        changeImage = false;
    }
}

function changeTilesX(e) {

}

function changeTilesY() {

    
}

function changeThreshold() {

    
}

function saveImage() {
    save("frame.png");
}

function toggleOverlay() {
    overlay.classList.toggle("active");
}


let selectedImage;
let changeImage = false;

function selectImage(e) {
    console.log(e);
    selectedImage = e;
    changeImage = true;
    img = loadImage(selectedImage);
    
    console.log(W,H);
    overlay.classList.toggle("active");
}

