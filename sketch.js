//Variables for canvas & music:
var canvas;
var music;
var edges;

//Variables for sprites:
var box;
var surface1, surface2, surface3, surface4;

//-------------------------------------------------------------------------------------------------------------------------------------

function preload(){
    music = loadSound("music.mp3");
}

//-------------------------------------------------------------------------------------------------------------------------------------

function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces:
    surface1 = createSprite(92.5, 570, 185, 20);
    surface1.shapeColor = "blue";

    surface2 = createSprite(297.5, 570, 185, 20);
    surface2.shapeColor = "yellow";

    surface3 = createSprite(502.5, 570, 185, 20);
    surface3.shapeColor = "red";

    surface4 = createSprite(707.5, 570, 185, 20);
    surface4.shapeColor = "green";


    //create box sprite and give velocity:
    box = createSprite(random(20, 750), 100, 30, 30);
    box.shapeColor = "white";
    box.velocityX = 4;
    box.velocityY = 5;

//create Edge Sprites:
    edges = createEdgeSprites()

}

//-------------------------------------------------------------------------------------------------------------------------------------

function draw() {
    background(rgb(245, 197, 130));

//Change the color of box accordingly:
    if(box.isTouching(surface1) && box.bounceOff(surface1)) {
        box.shapeColor = surface1.shapeColor;
        music.play();
    }
    
    if(box.isTouching(surface2) && box.bounceOff(surface2)) {
        box.shapeColor = surface2.shapeColor;
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    if(box.isTouching(surface3) && box.bounceOff(surface3)) {
        box.shapeColor = surface3.shapeColor;
    }

    if(box.isTouching(surface4) && box.bounceOff(surface4)) {
        box.shapeColor = surface4.shapeColor;
    }

//create Edge Sprites (for surfaces):
    box.bounceOff(surface1);
    box.bounceOff(surface2);
    box.bounceOff(surface4);
    box.bounceOff(edges);

    drawSprites();
}
