


//Crie um namespace (espaço de nomes) para Mecanismo
const Engine=matter.Engine;
//Crie um namespace (espaço de nomes) para Mundo
const World=matter.World;
//Crie um namespace (espaço de nomes) para Corpos
const Bodies=matter.Bodies;
//Crie um namespace (espaço de nomes) para Corpo
const Body=matter.body;

var engine,world

function setup() {
  createCanvas(400,400);
//crie o mecanismo
engine=Engine. create();
world=engine.world;
  //Adicione mundo ao mecanismo
  

  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//crie o solo
//adicione ao mundo
ground=Bodies.rectangle(100,400,500,20,ground_options);
world.add(world.ground);
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  //escreva uma função de retângulo para exibir o solo.
 rect(ground.position.x,ground.position.y,500,50)


  
  
}

