var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var rover_width = 100;
var rover_height = 90;
var rover_x = 10;
var rover_y = 10;

var bg_imgs = ["mars1.jpg", "mars2.jpg", "mars3.jpg", "mars4.jpg"];
var random = Math.floor(Math.random()*4);

var bg = bg_imgs[random];
var rover_image = "rover.png";  

function add(){
    background_ImgTag = new Image();
    background_ImgTag.onload = uploadbg;
    background_ImgTag.src = bg;

    rover_ImgTag = new Image();
    rover_ImgTag.onload = roverupload;
    rover_ImgTag.src = rover_image;
}
function uploadbg(){
    ctx.drawImage(background_ImgTag, 0, 0, canvas.width, canvas.height);
}
function roverupload(){
    ctx.drawImage(rover_ImgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", myKeydown);

function myKeydown(e){
    var keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == "38" || keypressed == "87"){
        up();
        console.log("up");
    }

    if (keypressed == "37" || keypressed == "65"){
        left();
        console.log("left");
    }

    if (keypressed == "40" || keypressed == "83"){
        down();
        console.log("down");
    }

    if (keypressed == "39" || keypressed == "68"){
        right();
        console.log("right");
    }
}
function up(){
    if (rover_y > 0){
        rover_y = rover_y - 10;
        uploadbg();
        roverupload();
        console.log("When up is pressed x = " + rover_x + "and y = " + rover_y);
    }
}
function down(){
    if (rover_y < 500){
        rover_y = rover_y + 10;
        uploadbg();
        roverupload();
        console.log("When down is pressed x = " + rover_x + "and y = " + rover_y);
    }
}
function left(){
    if (rover_x > 0){
        rover_x = rover_x - 10;
        uploadbg();
        roverupload();
        console.log("When left is pressed x = " + rover_x + "and y = " + rover_y);
    }
}
function right(){
    if (rover_x < 700){
        rover_x = rover_x + 10;
        uploadbg();
        roverupload();
        console.log("When right is pressed x = " + rover_x + "and y = " + rover_y);
    }
}