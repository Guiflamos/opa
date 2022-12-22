var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;


function preload(){
pathImg=loadImage ("path.png")
 boyImg=loadAnimation ("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png")
}

function setup(){
  
  createCanvas(400,400);
path=createSprite(200,200,50,50)
path.addImage(pathImg)
path.velocityY=0
path.scale=1.2;

boy=createSprite(200,350,100,100)
boy.addAnimation("corrida",boyImg)
boy.scale=0.5;
  
//crie um limite à esquerda
leftBoundary=createSprite(10,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible=false
//crie um limite à direita
rightBoundary=createSprite(400,0,100,800);
//defina visibilidade como falsa para o limite à direita
rightBoundary.visible=false
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  boy.x=World.mouseX

  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);
  //código para redefinir o fundo
  if(path.y > 500 ){
    path.y = height/2;
  }
  
  drawSprites();
}
