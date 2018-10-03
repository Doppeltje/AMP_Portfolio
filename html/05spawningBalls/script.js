// 1. Show Balls
// 2. Kinetic Object
// 3. Voeg positie-vector toe
// 4. Voeg snelheid-vector kineticObject
// 5. Maak de x-pos random
// 6. Maak array van 10 kinetic objects

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let woosh = new Audio();
// woosh.src = "media/woosh.wav";

 let kineticObjects = [];

function animate()
{
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  requestAnimationFrame(animate);
  if (Math.random() < 0.5)
  {
    let kineticObject = {};
    //Make new ball (x, y, r, color)
    kineticObject.ball = new Point(1000, 100, 45, "#009991");
    //Spawn somewhere on x, y value = 100
    kineticObject.pos = new Vector2d(getRandomNumber(canvas.width), 100);
    //Base speed
    kineticObject.vel = new Vector2d(0,2);
    //Increase in speed
    kineticObject.acc = new Vector2d(0,0.08);
    kineticObjects.push(kineticObject);

  }
for (var i = 0; i < kineticObjects.length; i++)
{
  kineticObjects[i].vel.add(kineticObjects[i].acc);
  kineticObjects[i].pos.add(kineticObjects[i].vel);
  kineticObjects[i].ball.position(kineticObjects[i].pos)
  kineticObjects[i].ball.draw(ctx);
}
for(var i = 0; i < kineticObjects.length; i++)
{ //Remove when bottom canvas
  if (kineticObjects[i].pos.dy > canvas.heigth -100)
  {
    kineticObjects.splice(i , 1);
  }
}
}
//Click event for ball
//Get mouse position
document.addEventListener('mousedown',(evt)=>
{
  let mousePos = {};
  mousePos.x = evt.clientX;
  mousePos.y = evt.clientY;
  for (var i = 0; i < kineticObjects.length; i++) {
    if (kineticObjects[i].ball.distanceToAnotherPoint(mousePos) < kineticObjects[i].ball.r)
    {
      kineticObjects[i].ball.color = "black";
      // woosh.play();
    }
  }
})

animate();

function getRandomNumber(max)
{
  return Math.floor(Math.random()*max);
}
