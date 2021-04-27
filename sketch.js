// tanishq
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
function preload() {
//preload the images here
bg = loadImage("Images/GamingBackground.png")

}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(displayWidth, displayHeight);
  // create sprites here
  ground = new Ground(displayWidth/2,displayHeight/2+100,displayWidth, 20 );
b1 = new Box(400,displayHeight/2-50, 100,100)
b2 = new Box(400,displayHeight/2-100, 100,100)
b3 = new Box(400,displayHeight/2-150, 100,100)
b4= new Box(400,displayHeight/2-200, 100,100)
hero = new Hero(100,300,50)
rope = new Rope(hero.body, {x:100, y:50})
monster = new Monster(600,displayHeight/2, 300)
}

function draw() {
 
  background(bg);
  Engine.update(engine);
  ground.display()
  b1.display()
  b2.display()
  b3.display()
  b4.display()
  hero.display()
  rope.display()
  monster.display()
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}