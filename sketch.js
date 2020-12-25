const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine,world

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var options={
    isStatic:true
  }
  var balloptions={
    restitution:1.0
  }
  ground=Bodies.rectangle(200,390,200,20,options);
  World.add(world,ground);
  ball =Bodies.circle(200,100,20,balloptions);
  World.add(world,ball);
  //console.log(object.type)
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,200,20) 
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20);
}