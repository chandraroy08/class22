const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;

var backgroundimg
var tower

var cannontop

function preload() {

  backgroundimg= loadImage("./assets/background.gif")
  towerimg= loadImage("./assets/tower.png")
  canImg=loadImage("./assets/canon.png")
 
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
 options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);

 tower_options={
   isStatic:true
 }

 tower= Bodies.rectangle(100,200,160,300,tower_options)
  World.add(world,tower)

 cannontop= new Cannon(60,-10,250,250)
  //cannontop1=createSprite(70,30,50,50)
  //cannontop1.addImage(canImg)
 
}

function draw() {
  background(backgroundimg);
  Engine.update(engine);
 //imageMode(CENTER)
 rect(ground.position.x, ground.position.y,width*2,1);
 image(towerimg,tower.position.x,tower.position.y,160,300)
 cannontop.display()
 //cannontop1.display()
 // drawSprites()
   
}
