var img = "";

function setup(){
    canvas= createCanvas(600, 400);
    canvas.position(360, 190);

}

function preload(){
    img = loadImage("ls.png");
}

function draw(){
    image(img, 0, 0, 600, 400);

    fill("black");
    text ("Kazuha", 75, 175);
    noFill();
    stroke ("white");
    rect(20, 10, 150, 350);

    fill("pink");
    text ("Chaewon", 175, 175);
    noFill();
    stroke ("pink");
    rect(170, 10, 90, 350 );

    fill("yellow");
    text ("Sakura", 280, 175);
    noFill();
    stroke ("yellow");
    rect(260, 10, 100 , 350);

    fill("purple");
    text ("Eunchae", 380, 175);
    noFill();
    stroke ("purple");
    rect(360, 10, 100 , 350);

    fill("blue");
    text ("Yunjin", 440, 175);
    noFill();
    stroke ("blue");
    rect(460, 10, 100 , 350);
}
