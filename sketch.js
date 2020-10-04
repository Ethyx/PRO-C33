const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var score,no;

function setup() {
  var canvas=createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
  
  ground=new Ground(width/2,height-10,width,20);
  //1st
  ground2=new Ground(400,310,260,10);
  //2nd
  ground3=new Ground(800,150,210,10);
  //1st level on 1st ground
  box1=new Box(400,290);
  box2=new Box(370,290);
  box3=new Box(340,290);
  box4=new Box(430,290);
  box5=new Box(460,290);
  box6=new Box(310,290);
  box7=new Box(490,290);
  //2nd level on 1st ground
  box8=new Box(400,270);
  box9=new Box(370,270);
  box10=new Box(340,270);
  box11=new Box(430,270);
  box12=new Box(460,270);
  //3rd level on 1st ground
  box13=new Box(400,250);
  box14=new Box(370,250);
  box15=new Box(430,250);
  //4th level on 1st ground
  box16=new Box(400,230);
  //1st level on 2nd ground
  box17=new Box(800,130);
  box18=new Box(770,130);
  box19=new Box(740,130);
  box20=new Box(830,130);
  box21=new Box(860,130);
  //2nd level on 2nd ground
  box22=new Box(800,110);
  box23=new Box(770,110);
  box24=new Box(830,110);
  //3rd level on 2nd ground
  box25=new Box(800,90);

  ball=new Ball();
  sling=new Sling(ball.body,{x:150,y:200});

  score=0;

  
   
    //mConstraint=Matter.MouseConstraint.create(engine);
    //World.add(world,mConstraint);
  
  
}

function draw() {
  
  background(255,255,255); 
  
  Engine.update(engine);
  textSize(20);
  text("Press space to play again",700,350);
  text("score:"+score,700,20)

  ground.display();
  ground2.display();
  ground3.display();
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
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  ball.display();
  sling.display();

  drawSprites();
}



function mouseReleased(){
   sling.fly();
}
function mouseDragged(){
  if(sling.sling.bodyA){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
     }
}

function keyPressed(){
  if(keyCode=== 32){
    
    Matter.Body.setPosition(ball.body,{x:150,y:200});
    sling.attach(ball.body);
  }
}
