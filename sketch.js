
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var hitr;
var base;
var ch;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,
box19,box20,box21,box22,box23;
var bg1;
var score = 0;

function preload()
{
	bg1 = loadImage("sprites/bg1.png")
}

function setup() {
	createCanvas(1350, 625);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	hitr = new Hitter(150,350,20,20);
	base = new Ground(500,450,200,10);
	box1 = new Box(410,430,20,20);
	box2 = new Box(430,430,20,20);
	box3 = new Box(450,430,20,20);
	box4 = new Box(470,430,20,20);
	box5 = new Box(490,430,20,20);
	box6 = new Box(510,430,20,20);
	box7 = new Box(530,430,20,20);
	box8 = new Box(550,430,20,20);
	box9 = new Box(570,430,20,20);
	box10 = new Box(590,430,20,20);
	box11 = new Box(420,410,20,20);
	box12 = new Box(440,410,20,20);
	box13 = new Box(460,410,20,20);
	box14 = new Box(480,410,20,20);
	box15 = new Box(500,410,20,20);
	box16 = new Box(520,410,20,20);
	box17 = new Box(540,410,20,20);
	box18 = new Box(560,410,20,20);
	box19 = new Box(580,410,20,20);
	box20 = new Box(430,390,20,20);
	box21 = new Box(450,390,20,20);
	box22 = new Box(470,390,20,20);
	box23 = new Box(490,390,20,20);
	box24 = new Box(510,390,20,20);
	box25 = new Box(530,390,20,20);
	box26 = new Box(550,390,20,20);
	box27 = new Box(570,390,20,20);
	box28 = new Box(440,370,20,20);
	box29 = new Box(460,370,20,20);
	box30 = new Box(480,370,20,20);
	box31 = new Box(500,370,20,20);
	box32 = new Box(520,370,20,20);
	box33 = new Box(540,370,20,20);
	box34 = new Box(560,370,20,20);
	
    ch = new Chain(hitr.body,{x:150,y:350});





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg1);

  getBackgroundImage();
  
  text("SCORE:"+score,width-300,50);

  drawSprites();
  hitr.display();
  base.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  
  ch.display();
}
function mouseDragged(){
	Matter.Body.setPosition(hitr.body, {x: mouseX , y: mouseY});
  }
  
  function mouseReleased(){
	ch.fly();
  }

  function keyPressed(){
	if (keyCode === 32){
	  ch.attach(hitr.body)
	}
	}
  async function getBackgroundImage(){
	 var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
	 var responseJSON = await response.json();
	 var datetime = responseJSON.datetime;
	 var hour = datetime.slice(11,13);

	 if(hour>=0600 && hour<=1900){
		 bg1 = "sprites/bg1.png"
	 }
	 else {
		 bg1 = "sprites/bg2.jpg"
	 }
	 console.log(bg1);

  }
