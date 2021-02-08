const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function preload(){
    
}

function setup(){
  createCanvas(400,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  drop = new Drops (200,400,5);

}
 function draw(){
     background (0);
   drop.display();
 }

