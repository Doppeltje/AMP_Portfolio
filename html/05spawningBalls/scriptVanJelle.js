// 1. Show Balls
// 2. Kinetic Object
// 3. Voeg positie-vector toe
// 4. Voeg snelheid-vector kineticObject
// 5. Maak de x-pos random
// 6. Maak array van 10 kinetic objects

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

 let kineticObjects = [];





function animate(){
  context.clearRect(0,0,canvas.width,canvas.height)
  requestAnimationFrame(animate);
  if (Math.random()<0.01){
    let kineticObject = {};
    kineticObject.ball = new Point(1000,100,10,"red");
    kineticObject.pos = new Vector2d(getRandomNumber(canvas.width),100);
    kineticObject.vel = new Vector2d(0,1);
    kineticObjects.push(kineticObject);

}
for (var i = 0; i < kineticObjects.length; i++) {
  kineticObjects[i].pos.add(kineticObjects[i].vel);
  kineticObjects[i].ball.position(kineticObjects[i].pos)
  kineticObjects[i].ball.draw(context);
}
for(var i = 0; i<kineticObjects.length; i++){
  if (kineticObjects[i].pos.dy > canvas.heigth -100){
    kineticObjects.splice(i , 1);
  }
}
}

animate();

function getRandomNumber(max){
  return Math.floor(Math.random()*max);
}
