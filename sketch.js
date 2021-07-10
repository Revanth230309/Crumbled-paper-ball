
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1500,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball_option={
     isStatic:false,
	 resitution:0.3,
	 friction:0,
	 density:1.2

	}
	ball= Bodies.circle(200,300,15,ball_option);
    World.add(world,ball)
	Engine.run(engine);

	ground = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1400,600,20,120);

  ellipseMode(RADIUS)
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,15);
  ground.display();
  leftSide.display();
  rightSide.display();
  drawSprites();
 Engine.update(engine);
}

function keyPressed(){

 if(keyCode ===	UP_ARROW){
Matter.Body.applyForce(ball,ball.position,{x:50,y:-50});                  

 }




}

