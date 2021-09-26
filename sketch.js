var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 var options = {
		isStatic: true
	}

	 leftedge = Bodies.rectangle(270,600,10,150,options);
	 wallwidth = 10;
	wallheight = 150;
	 World.add(world, leftedge);
   
	 rightEdge = Bodies.rectangle(430,600,10,150,options);
	 wallheight = 150;
	 wallwidth = 10;
	 World.add(world, rightEdge);

	 bottomSurface = Bodies.rectangle(350,640,10,150,options);
	 botttomheight = 17;
	 bottomwidth = 165;
	 World.add(world, bottomSurface);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  var pos =leftedge.position;
  rectMode(CENTER);
  fill("aqua");
  rect(pos.x, pos.y, wallwidth, wallheight);
  var pos1 = rightEdge.position;
  rectMode(CENTER);
  rect(pos1.x,pos1.y,wallwidth,wallheight);
  var pos2 = bottomSurface.position;
  rectMode(CENTER);
  fill("red");
  rect(pos2.x,pos2.y + 20,bottomwidth,botttomheight);
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}



