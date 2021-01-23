const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,poly,ground;
var base1,base2;
var sling;
var polyImg;

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;

var cube1, cube2, cube3, cube4, cube5, cube6, cube7, cube8, cube9;

var blocks = []

var redImg, yellowImg, orangeImg, whiteImg, darkblueImg, blueImg, lightblueImg;

var tintVis = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
var tints = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ,false, false, false, false, false, false];

var score = 0

var col = 0

function preload(){
  polyImg=loadImage("polygon.png");

  redImg = loadImage("images/red.png")
  orangeImg = loadImage("images/orange.png")
  yellowImg = loadImage("images/yellow.png")
  whiteImg = loadImage("images/white.png")
  darkblueImg = loadImage("images/darkblue.png")
  blueImg = loadImage("images/blue.png")
  lightblueImg = loadImage("images/lightblue.png")

}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);


  ground = new Ground();

  base1 = new Stand(390,275,250,10);
  base2 = new Stand(720,225,200,10);
 
  //1 level
  block1 = new Block(300,250,30,40);
  block2 = new Block(330,250,30,40);
  block3 = new Block(360,250,30,40);
  block4 = new Block(390,250,30,40);
  block5 = new Block(420,250,30,40);
  block6 = new Block(450,250,30,40);
  block7 = new Block(480,250,30,40);

  //2 level
  block8 = new Block(330,210,30,40);
  block9 = new Block(360,210,30,40);
  block10 = new Block(390,210,30,40);
  block11 = new Block(420,210,30,40);
  block12 = new Block(450,210,30,40);

  //3 level
  block13 = new Block(360,170,30,40);
  block14 = new Block(390,170,30,40);
  block15 = new Block(420,170,30,40);

  //4 level
  block16 = new Block(390,130,30,40);


  blocks.push(block1.body)
  blocks.push(block2.body)
  blocks.push(block3.body)
  blocks.push(block4.body)
  blocks.push(block5.body)
  blocks.push(block6.body)
  blocks.push(block7.body)
  blocks.push(block8.body)
  blocks.push(block9.body)
  blocks.push(block10.body)
  blocks.push(block11.body)
  blocks.push(block12.body)
  blocks.push(block13.body)
  blocks.push(block14.body)
  blocks.push(block15.body)
  blocks.push(block16.body)


  //second pyamid

  // 1 level
  cube1 = new Block(660,200,30,40);
  cube2 = new Block(690,200,30,40);
  cube3 = new Block(720,200,30,40);
  cube4 = new Block(750,200,30,40);
  cube5 = new Block(780,200,30,40);
  //2 level
  cube6 = new Block(690,160,30,40);
  cube7 = new Block(720,160,30,40);
  cube8 = new Block(750,160,30,40);
  //3 level
  cube9 = new Block(720,120,30,40);

  blocks.push(cube1.body)
  blocks.push(cube2.body)
  blocks.push(cube3.body)
  blocks.push(cube4.body)
  blocks.push(cube5.body)
  blocks.push(cube6.body)
  blocks.push(cube7.body)
  blocks.push(cube8.body)
  blocks.push(cube9.body)

  poly = Bodies.circle(50,200,20);

  World.add(world,poly);

  sling = new Slingshot(poly,{x:100,y:200});

}
function draw() {
  getBgColor()

  background(col); 

  textSize(20);
  fill("lightyellow");
  text("Launch the hexagonal block by dragging and releasing.",100,30);
  text("Press SPACE to try again.",100,50);

  ground.display();
  base1.display();
  base2.display();

  strokeWeight(2);
  stroke(15);

  for(var z = 0; z < 25; z++){
    blocks[z].display
  }

  imageMode(CENTER)

  for(i = 0; i < 7; i++){
    push()
    tint(255, tintVis[i])
    image(redImg, blocks[i].position.x, blocks[i].position.y)
    if(blocks[i].speed > 3){
      tints[i] = true
      World.remove(world, blocks[i])
    }
    if(tints[i]){
      tintVis[i] = tintVis[i] - 5
    }
    pop()

  }

  for(d = 7; d < 12; d++){
    push()
    tint(255, tintVis[d])
    image(orangeImg, blocks[d].position.x, blocks[d].position.y)
    if(blocks[d].speed > 3){
      tints[d] = true
      World.remove(world, blocks[d])
    }
    if(tints[d]){
      tintVis[d] = tintVis[d] - 5
    }
    pop()

  }

  for(l = 12; l < 15; l++){
    push()
    tint(255, tintVis[l])
    image(yellowImg, blocks[l].position.x, blocks[l].position.y)
    if(blocks[l].speed > 3){
      tints[l] = true
      World.remove(world, blocks[l])
    }
    if(tints[l]){
      tintVis[l] = tintVis[l] - 5
    }
    pop()

  }

  push()
    tint(255, tintVis[15])
    image(whiteImg, blocks[15].position.x, blocks[15].position.y)
    if(blocks[15].speed > 3){
      tints[15] = true
      World.remove(world, blocks[15])
    }
    if(tints[15]){
      tintVis[15] = tintVis[15] - 5
    }
    pop()



    for(c = 16; c < 21; c++){
      push()
      tint(255, tintVis[c])
      image(darkblueImg, blocks[c].position.x, blocks[c].position.y)
      if(blocks[c].speed > 3){
        tints[c] = true
        World.remove(world, blocks[c])
      }
      if(tints[c]){
        tintVis[c] = tintVis[c] - 5
      }
      pop()
  
    }

    for(h = 21; h < 24; h++){
      push()
      tint(255, tintVis[h])
      image(blueImg, blocks[h].position.x, blocks[h].position.y)
      if(blocks[h].speed > 3){
        tints[h] = true
        World.remove(world, blocks[h])
      }
      if(tints[h]){
        tintVis[h] = tintVis[h] - 5
      }
      pop()
  
    }



    push()
      tint(255, tintVis[24])
      image(lightblueImg, blocks[24].position.x, blocks[24].position.y)
      if(blocks[24].speed > 3){
        tints[24] = true
        World.remove(world, blocks[24])
      }
      if(tints[24]){
        tintVis[24] = tintVis[24] - 5
      }
      pop()


   fill("gold");
   imageMode(CENTER)
   image(polyImg ,poly.position.x,poly.position.y,40,40);

   text("Score: " + score, 700, 30)

   for(var t = 0; t < 25; t++){
    if(tintVis[t] < 0 && tintVis[t] > -105){
      score++
      
    }
  }


  sling.display();
}
function mouseDragged(){
  Matter.Body.setPosition(poly,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if (keyCode == 32){
    sling.attach(poly)
    Matter.Body.setPosition(poly, {x: 50, y: 200})
  }
}


async function getBgColor(){

  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON = await response.json()
  var datetime = responseJSON.datetime
  var hour = datetime.slice(11, 13)

  console.log(hour)

  if(hour >= 6 && hour <= 19){
    col = 200
  }else{
      col = 0
  }


}