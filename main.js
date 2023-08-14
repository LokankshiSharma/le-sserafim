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
    text ("Kazuha", 100, 175);
    noFill();
    stroke ("white");
    rect(20, 10, 150, 350);

    fill("pink");
    text ("Chaewon", 175, 175);
    noFill();
    stroke ("pink");
    rect(120, 10, 100, 350 );

    fill("yellow");
    text ("Sakura", 250, 175);
    noFill();
    stroke ("yellow");
    rect(150, 10, 100 , 350);

    fill("purple");
    text ("Eunchae", 325, 175);
    noFill();
    stroke ("purple");
    rect(220, 10, 100 , 350);

    fill("blue");
    text ("Yunjin", 400, 175);
    noFill();
    stroke ("blue");
    rect(300, 10, 100 , 350);
}
