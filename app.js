/* =================
    Create Image Overlay
*/

let imagesContainer = document.getElementById("images");

for (let i = 0; i < 142; i++) {
    let img = document.createElement("img");
    let source = "./data/img/" + i + ".jpg"
    img.src= source;
    img.addEventListener('click', function() {
        selectImage(source);
    });      
    imagesContainer.appendChild(img);
}



let selectedImage;
let changeImage = false;

function selectImage(e) {
    selectedImage = e;
    changeImage = true;
    img = loadImage(selectedImage);
    
    console.log(W,H);
    overlay.classList.toggle("active");
}





/* =================
    Sketch
*/


var img;

var alphabet ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let receiveImage = false;
let newImagePath = "";
var font;

var overlay = document.getElementById("overlay");

const W = 700;
const H = 700;

var pg;

function preload() {
    img = loadImage("data/img/40.jpg");
    font = loadFont("data/spaceMonoBold.ttf");
}

function setup() {
    var canvas = createCanvas(W,H);
    canvas.parent('sketch');
    img.resize(W,H);
    textFont(font);
    textSize(10);
    textAlign(LEFT,TOP);
}

function draw() {
    // img.resize(W,H);
    let tilesX = document.getElementById("tilesX").value;
    let tilesY = tilesX;
    let threshold2 = document.getElementById("threshold2").value;
    let threshold3 = document.getElementById("threshold3").value;

    if (img.width != width){
        img.resize(width,height);
    }

    background("#FFFFFF");
    // image(img,0,0);

    let tileW = W / tilesX;
    let tileH = H / tilesY;
    stroke("#DDDDDD");

    for (let x = 0; x < tilesX; x++) {
        for (let y = 0; y < tilesY; y++) {
            var px = Math.floor(x*tileW);
            var py = Math.floor(y*tileH);

            let c = img.get(parseInt(px),parseInt(py));

            let b = brightness(c);
            
            push();
            translate(px,py);
            fill("#FFFFFF");
            rect(0,0,tileW,tileH);  
            if (b < threshold2) {  
                fill("#AAAAAA");
                rect(0,0,tileW,tileH);  
            } if (b < threshold3) {  
                fill("#000000");
                rect(0,0,tileW,tileH);
            } 

            pop();
        }
    }

    // for (let x = 0; x < tilesX; x++) {
    //     fill("#ff0000");
    //     noStroke();
    //     push();
    //     translate(x*tileW,0);
    //     text(x+1,1,1);
    //     pop();
    // }

    // for (let y = 0; y < tilesY; y++) {
    //     fill("#ff0000");
    //     noStroke();
    //     push();
    //     translate(0,y*tileH);
    //     text(alphabet.charAt(y),1,1);
    //     pop();
    // }


    if (changeImage == true) {
       
        changeImage = false;
    }
}

function changeTilesX(e) {

}

function changeTilesY() {

    
}



function saveImage() {
    save("frame.png");
}

function toggleOverlay() {
    overlay.classList.toggle("active");
}
