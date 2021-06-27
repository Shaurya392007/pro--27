
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 580);


	engine = Engine.create();
	world = engine.world;

	

	paper = new Paper(100,540,10);
	ground = new Ground(400,560,800,20);


	leftSide = new Dustbin(550,500,20,100);
	rightSide = new Dustbin(610,540,100,20);
	bottom = new Dustbin(670,500,20,100);
	

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);

  drawSprites();
 
  ground.display();
  paper.display();
  leftSide.display();
  rightSide.display();
  bottom.display();


}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15});
	}
}






