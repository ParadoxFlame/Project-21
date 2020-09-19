var bullet, wall;
var speed, weight, thickness;
var damage;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor = color(255);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(230,230,230);

  speed = random(30,52);
  weight = random(223,321);
  thickness = random(22,83);


  bullet.velocityX = speed;
}

function draw() {
  background("black");  

  
  if (hasCollided(bullet,wall))
    {
      damage = 0.5*speed*weight*speed/(thickness*thickness*thickness);
      bullet.velocityX = 0;

        if(damage>10)
        {
          wall.shapeColor = "red";
        }

        else if(damage<10)
        {
          wall.shapeColor = "green";
        }
    }

  drawSprites();
}

function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}

