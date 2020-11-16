var bullet, bulletIMG;
var wall, thickness, speed, weight, damage;
var BEGIN = 0;
var END = 1;
var state = BEGIN;

function preload() {
  //bulletIMG = loadImage("bullet-8489.png");
}

function setup() {
  createCanvas(1600, 400);
//random
  thickness = random(22,83);
  speed = random(223, 321);
  weight = random(30, 52);

//bullet
  bullet = createSprite(50, 200, 50, 20);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
  /*bullet.addImage(bulletIMG);
  bullet.scale = 0.1;*/

//wall
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = (80, 80, 80);
}

function draw() {
  background("black");
    if(bullet.isTouching(wall)) {
      bullet.velocityX = 0;
      damage = (0.5*weight*speed**2)/(thickness**3);
      console.log(bullet.shapeColor);
      damageCalculate();
      console.log(bullet.shapeColor);
    }
  
    var bulletColor = bullet.shapeColor;
    //functions
    display("Speed: " + Math.round(speed), 50, 100, bulletColor);
    display("Thickness: " + Math.round(thickness), 250, 100, bulletColor);
    display("Weight: " + Math.round(weight), 450, 100, bulletColor);
    display("Damage: " + Math.round(damage), 650, 100, bulletColor);
    drawSprites();
  }
  
  
  function damageCalculate() {
    if(damage <= 10) {
      bullet.shapeColor = "green";
    }
    
    if(damage > 10) {
      bullet.shapeColor = "red";
    }
    
  }


function display(variable, x, y, color) {
  fill(color);
  text(variable, x, y);
}