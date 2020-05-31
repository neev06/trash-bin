
var ground1;
var ground2;
var ground3;
var ball;
var gr;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	
	world = engine.world;
	
	gr = Bodies.rectangle(600, 650, 1200000, 10 , {isStatic:true} );
	stroke(99,69,312);
	fill(0);
	World.add(world, gr);

	
	ground2=new round(830,550,20,100);
	

	

	ground1=new round(950,588,250,20);

	var options={
isStatic:false,
friction:0.5,
restituion:0.3,
density:1.2


	}
	
	ball=Bodies.circle(200,200,20,options);
World.add(world,ball);


	
ground3=new round(1065,550,20,100);

	Engine.run(engine);

	
	
}


function draw() {
  
  background(232,93,239);
  ground1.display();
  ground2.display();
  ground3.display();
  Engine.update(engine);
  rectMode(CENTER);
  rect(gr.position.x,gr.position.y,1200,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
  keyPressed();
 drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}




