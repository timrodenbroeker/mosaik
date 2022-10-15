var img;

const W = 700;
const H = 700;

function preload() {
    img = loadImage("data/95.jpg");
    
}

function setup() {
    var canvas = createCanvas(W,H);
    canvas.parent('sketch');
    img.resize(W,H);
}

function draw() {

    let tilesX = document.getElementById("tilesX").value;
    let tilesY = tilesX;
    let threshold = document.getElementById("threshold").value;


    background("#ff0000");
    image(img,0,0);

    let tileW = W / tilesX;
    let tileH = H / tilesY;

    stroke("#aaaaaa");

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

            fill(fillColor);
            push();
            translate(px,py);
            rect(0,0,tileW,tileH);
            pop();
        }

    }

}

function changeTilesX(e) {
    console.log(e);
}

function changeTilesY() {

    
}

function changeThreshold() {

    
}