const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,dustbin;

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(width/2,700,1300,80);
	paper=new Paper(50,650,75);
	dustbin=new Dustbin(1000,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  Engine.update(engine);
  
  paper.display();
  ground.display();
  dustbin.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position ,{x:70,y:-80});
	}
}


