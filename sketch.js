
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1,ground2;
var block2,block3,block4,block5,block6,block7,block8,block10,block11,block12,block13;
var block15,block16,block17,block18,block19,block20,block21,block22,block23;
var block24,block25,block26,block27,block28;
var polygon;
var chain;
var score = 0;



function setup() {
		createCanvas(1200, 600);

		var options = {
			isStatic : true,
		}


		engine = Engine.create();
		world = engine.world;

		ground1 = new Ground(610,506,350,15);

		ground2 = new Ground(1000,300,250,15);

		
		block2 = new Block(510,473,40,50);
		block3 = new Block(550,473,40,50);
		block4 = new Block(590,473,40,50);
		block5 = new Block(630,473,40,50);
		block6 = new Block(670,473,40,50);
		block7 = new Block(710,473,40,50);
		block10 = new Block(940,267,40,50);
		block11 = new Block(980,267,40,50);
		block12 = new Block(1020,267,40,50);
		block13 = new Block(1060,267,40,50);
		
		block16 = new Block2(530,423,40,50);
		block17 = new Block2(570,423,40,50);
		block18 = new Block2(610,423,40,50);
		block19 = new Block2(650,423,40,50);
		block20 = new Block2(690,423,40,50);
		block21 = new Block2(960,217,40,50);
		block22 = new Block2(1000,217,40,50);
		block23 = new Block2(1040,216,40,50);
		
		block24 = new Block3(570,373,40,50);
		block25 = new Block3(610,373,40,50);
		block26 = new Block3(650,373,40,50);
		block27 = new Block3(1000,167,40,50);

		block28 = new Block4(610,323,40,50);

		polygon = new Poly(150,400,50,50);

		chain = new Chain(polygon.body,{x:150,y:400});

		Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  fill("white");
  textSize(20);
  text("Score :" + score,750,40);

  ground1.display();
  ground2.display();


  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
 
  block10.display();
  block11.display();
  block12.display();
  block13.display();
 
 
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();

  block24.display();
  block25.display();
  block26.display();
  block27.display();

  block28.display();

  polygon.display();

  chain.display();

  if(polygon.body.speed > 2){
	  score ++
  }
 



  

}



function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chain.fly();
}

function keyPressed(){
	if(keyCode === 32){
		chain.attach(polygon.body);
	}
}



