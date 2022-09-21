noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(500,550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet is Initialized');
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log("results");
    }
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
}
function draw() {
    background('#fff');
textSize(difference);
    fill('#ff007f');
    text('Lorem ipsum', 50, 400)
}