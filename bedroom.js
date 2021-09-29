img = "";
status = "";
objects = [];
function preload() {
    img = loadImage("bedroom.jpg");
}

function setup() {
    canvas = createCanvas(600, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modalLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() {
    image(img, 0, 0, 600, 420);
    for (i = 0; i < objects.length; i++) {
        fill("#f72a5a")
        document.getElementById("status").innerHTML = "Status= Object Detected"
        percent = floor(objects[i].confidence * 100)
        text(objects[i].label + " " + percent + "%", objects[i].x+15, objects[i].y+15)
        noFill()
        stroke("#f72a5a")
rect(objects[i].x,objects[i].y, objects[i].width, objects[i].height )
    }

}

function bed_back() {
    window.location = "index.html";
}

function modalLoaded() {
    console.log("Modal Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
    objects= results

}