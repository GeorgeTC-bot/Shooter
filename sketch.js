var player;

var enemy = [];

var checkpoint = [[200,200],[],[],[],[]];
var tab = 0;

var pos;
var settings = {
  maxEntitySpawn: 50,
  friendlyFire: false,
}

var r;

var bossimgdata, bossimg; 

function preload(){
  bossimgdata = loadJSON('assets/Boss Ship.json');
  bossimg = loadImage("assets/Boss Ship.png",bossimgdata);
}

function setup(){
  createCanvas(775,500);

  //create Player
  player = new Ship(100,100,"triangle");
  player.player = true;
  
  pos = new spawn();

  snipe ={
    bullets: [],
    fired: false
  };
}

function draw(){
  background(240);

  //controls
  playerControls();

  //spawns enemy
  if(enemy.length < settings.maxEntitySpawn){
    enemy.push(new Ship(random(camera.x - width, camera.x + width),
     random(camera.y - height, camera.y + height),
     Math.round(random(0.5,3))));
  }

  //keeps a certain no of bullets
  if(snipe.bullets.length > 5){
    snipe.bullets.splice(0, 1);
  }

  //enemy details
  for( var i = 0; i < enemy.length; i++){
    enemy[i].targets[0] = player.body;
    /*for(var w = 0; w < enemy.length; w++){
      enemy[w].targets[w + 1] = enemy[w].body;
    }*/

    enemy[i].display();
    enemy[i].GetTarget();

    takeDamage(player ,enemy ,i);

    if(enemy[i].health <= 0){
      enemy[i].body.destroy();
      enemy.splice(i,1);
    }

    if(enemy[i].shape === "rectangle"){
      rAI(enemy[i]);
    }
    else if(enemy[i].shape === "triangle"){
      tAI(enemy[i]);
    }
    else if(enemy[i].shape === "circle"){
      cAI(enemy[i]);
    }

    if(enemy[i].body.x > player.body.x + 1000 || enemy[i].body.x < player.body.x - 1000 && enemy[i].body.y > player.body.y + 1000 || enemy[i].body.y < player.body.y - 1000){
      enemy.splice(i, 1);
      i -= 1;
    }
  }
  player.display();
  //player.addImage(bossimg,0,0,100,100);

  //camera Properties
  camera.x = player.body.x;
  camera.y = player.body.y;
  camera.zoom.in = 2;  

  
  //drawSprites();
}

function keyPressed(){
  if(keyCode === 49){
    tab = 0;
  }
  else if(keyCode === 50){
    tab = 1;
  }
  else if(keyCode === 51){
    tab = 2;
  }
  else if(keyCode === 52){
    tab = 3;
  }
  else if(keyCode === 53){
    tab = 4;
  }
  else if(keyCode === 70){
    if(settings.friendlyFire === true){
      settings.friendlyFire = false;
    }
    else if(settings.friendlyFire === false){
      settings.friendlyFire = true;
    }
  }

  if(keyCode === 90){
    checkpoint[tab] = [];
    checkpoint[tab][0] = player.body.x;
    checkpoint[tab][1] = player.body.y;
  }
  if(keyCode === 32){
    if(player.shape != "triangle"){
      snipe.bullets.push( new Bullet(player ,player.body.x ,player.body.y ,camera.mouseX, camera.mouseY));
      snipe.fired = true;
    }
    else{
      if(player.properties.maxSpeed <= 9){
        player.properties.maxSpeed = 20; 
      }
    }
  }
}



//controls
function playerControls(){
  if(keyIsDown(RIGHT_ARROW)){
    player.body.velocityX += 1;
  }
  if(keyIsDown(LEFT_ARROW)){
    player.body.velocityX -= 1;
  }

  if(keyIsDown(UP_ARROW)){
    player.body.velocityY -= 1;
  }
  if(keyIsDown(DOWN_ARROW)){
    player.body.velocityY += 1;
  }

  //if(keyWentUp(32)){
    if(player.properties.maxSpeed > 9){
      player.properties.maxSpeed -= 0.02;
    }
  //}
}


function spawn(){
  var rand = Math.round(random(1,2));
  this.x;
  this.y
  if(rand === 1){
    this.x = random(camera.x - camera.width/2, camera.x - camera.width/2 - 100);
  }
  else{
    this.x = random(camera.x + camera.width/2, camera.x + camera.width/2 + 100);
  }
  
  rand = Math.round(random(1,2));

  if(rand === 1){
    this.y = random(camera.y - camera.height/2, camera.y - camera.height/2 - 100);
  }
  else{
    this.y = random(camera.y + camera.height/2, camera.y + camera.height/2 + 100);
  }
}

