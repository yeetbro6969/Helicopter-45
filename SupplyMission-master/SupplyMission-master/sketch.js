var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,gstate;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var l1,l2,l3;
var l1Body,l2Body,l3Body;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	gstate = "PLAY";

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	l1 = createSprite(width/2,655,100,10);
	l1Body = Bodies.rectangle(width/2 , 655 , width , 40 , {restitution: 0,isStatic:true} );
	l1.shapeColor=color(255,0,0);


	l2 = createSprite(346, 623, 10, 75);
	l2Body = Bodies.rectangle(346,623,10,75,{restitution:0, isStatic:true});
	l2.shapeColor=color(255,0,0);

	l3 = createSprite(446, 623, 10, 75);
	l3Body = Bodies.rectangle(446,623,10,75,{restitution:0, isStatic:true});
	l3.shapeColor=color(255,0,0);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	World.add(world, l3Body);
	World.add(world, l2Body);
	World.add(world,  l1Body);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 
	l1.position.x = l1Body.position.x
	l1.position.y = l1Body.position.y
  
	l2.position.x = l2Body.position.x
	l2.position.y = l2Body.position.y

	l3.position.x = l3Body.position.x
	l3.position.y = l3Body.position.y
	
	





  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
	
}
}

