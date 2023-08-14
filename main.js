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
    text ("Kazuha", 90, 175);
    noFill();
    stroke ("white");
    rect(20, 10, 150, 350);

    fill("pink");
    text ("Chaewon", 220, 175);
    noFill();
    stroke ("pink");
    rect(170, 10, 150, 350 );

    fill("yellow");
    text ("Sakura", 340, 175);
    noFill();
    stroke ("yellow");
    rect(320, 10, 150 , 350);

    fill("purple");
    text ("Jisoo", 500, 175);
    noFill();
    stroke ("purple");
    rect(470, 10, 120 , 350);

    fill("purple");
    text ("Yunjin", 500, 175);
    noFill();
    stroke ("purple");
    rect(470, 10, 120 , 350);
}
