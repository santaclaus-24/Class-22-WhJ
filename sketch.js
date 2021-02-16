//const = constant
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld, ground, ball;

function setup() {
  //setting up the canvas
  createCanvas(400,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  var Obj = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,390,200,20,Obj);

  World.add(myWorld, ground);
  console.log(ground);
  
  var Obj2 = {
    restitution : 1.4
  }
  ball = Bodies.circle(200,100,20,Obj2);
  World.add(myWorld, ball);
}

function draw() {
  //background, 0 = BLACK!
  background(0); 
  Engine.update(myEngine);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
}

//JSON = JavaScript Object Notation