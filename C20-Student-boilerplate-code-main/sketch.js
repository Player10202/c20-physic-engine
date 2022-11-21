
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wall
var ball1
var smallball
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  var ball1_options={
    restitution:1.5
  }
var smallball_options={
  restitution:0.95,
}
smallball=Bodies.circle(150,30,20,smallball_options)
World.add(world,smallball)
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
ball1=Bodies.circle(300,100,20,ball1_options);
World.add(world,ball1)
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  wall=Bodies.rectangle(300,200,100,20,ground_options)
  World.add(world,wall)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
 rect(wall.position.x,wall.position.y,100,20)
 ellipse(ball1.position.x,ball1.position.y,20)
 ellipse(smallball.position.x,smallball.position.y,20)
}

