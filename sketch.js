const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1, stand2, ground;

var block1, block2, block3, block4, 
block5, block6, block7, block8, 
block9, block10, block11, block12, 
block13, block14, block15, block16;

var block17, block18, block19, block20,
block21, block22, block23, block24, block25;

var polygonObject, polygonImage;

var slingShot;

function preload() {
	polygonImage = loadImage("polygon.png");
}

function setup() {
	createCanvas(1200, 600);
     
    fill("ivory");
    textSize(20);
    textFont("Broadway");
    text("Drag the hexagon to launch it towards blocks.", 300, 100);

	engine = Engine.create();
	world = engine.world;

	rectMode(CENTER);

	Engine.run(engine);

	//Create the Bodies Here.
	stand1 = new Ground(490, 550, 315, 10, 210, 105, 30);
	stand2 = new Ground(940, 350, 235, 10, 210, 105, 30);

	ground = new Ground(width/2, 585, width, 10, 139, 69, 19);

	block1 = new Block(395, 540, "DeepPink");
	block2 = new Block(420, 540, "DeepPink");
	block3 = new Block(450, 540, "DeepPink");
	block4 = new Block(480, 540, "DeepPink");
	block5 = new Block(510, 540, "DeepPink");
	block6 = new Block(540, 540, "DeepPink");
	block7 = new Block(570, 540, "DeepPink");
	block8 = new Block(430, 475, "MediumAquamarine");
	block9 = new Block(460, 475, "MediumAquamarine");
	block10 = new Block(490, 475, "MediumAquamarine");
	block11 = new Block(520, 475, "MediumAquamarine");
	block12 = new Block(540, 475, "MediumAquamarine");
	block13 = new Block(440, 415, "GreenYellow");
	block14 = new Block(480, 415, "GreenYellow");
	block15 = new Block(520, 415, "GreenYellow");
	block16 = new Block(480, 355, "Coral");

	block17 = new Block(870, 340, "DarkMagenta");
	block18 = new Block(900, 340, "DarkMagenta");
	block19 = new Block(930, 340, "DarkMagenta");
	block20 = new Block(960, 340, "DarkMagenta");
	block21 = new Block(990, 340, "DarkMagenta");
	block22 = new Block(900, 275, "Crimson");
	block23 = new Block(930, 275, "Crimson");
	block24 = new Block(980, 275, "Crimson");
	block25 = new Block(930, 215, "SteelBlue");

	polygonObject = Bodies.circle(100, 400, 25);
	World.add(world, polygonObject);

	slingShot = new SlingShot(this.polygonObject, {x:105, y:300});
}


function draw() {
  background("Bisque");
  rectMode(CENTER);

  fill("black");
  textSize(28);
  textFont("algerian");
  text("Drag the hexagon to launch it towards the blocks", 150, 100)
  
  //Stands display
  stand1.display();
  stand2.display();
  ground.display();

  //Blocks Set 1
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();

  block16.display();

  //Blocks Set 2
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();

  block25.display();

  imageMode(CENTER);
  image(polygonImage, polygonObject.position.x, polygonObject.position.y, 55, 55);

  slingShot.display();
  
  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(this.polygonObject, {x: mouseX, y: mouseY});
}

function mouseReleased() {
  slingShot.fly();
}