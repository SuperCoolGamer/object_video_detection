video = "";
status = "";

function preload(){
video=createVideo("video.mp4");
video.hide();


}

function setup(){

    canvas = createCanvas(500,400);
    canvas.center();

    
   video.size(500,400);
}

function draw(){

    image(video, 0 , 0 , 500, 400);
}

function start(){
    object_detector = ml5.objectDetector('cocossd', modelLoaded());
    document.getElementById('status').innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
console.log("modeLoaded");
status = true;

video.loop();
video.speed(1);
video.volume(1);
}