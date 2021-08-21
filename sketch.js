const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

let engine;
let world;
var ball;
var ground;



function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  
ball =new Ball(10,20,50);

  
}


function draw() 
{
  background(51);
  
  Engine.update(engine);
  ball.show();
  ground.show();
  
  
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
 
}
