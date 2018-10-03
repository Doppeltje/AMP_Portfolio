const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let kineticObject = {};
kineticObject.point = new Point(1000, 2000, 30, "#F44295");
kineticObject.pos = new Vector2d(100, 250);
kineticObject.vel = new Vector2d(5, 8);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  requestAnimationFrame(animate);
  kineticObject.pos.add(kineticObject.vel);
  kineticObject.point.position(kineticObject.pos);
  kineticObject.point.draw(ctx);
  if (kineticObject.pos.dx + kineticObject.point.r * 2 > canvas.width) {
      kineticObject.vel.dx = - kineticObject.vel.dx;
  }
  if (kineticObject.pos.dy + kineticObject.point.r * 2 > canvas.height) {
      kineticObject.vel.dy = - kineticObject.vel.dy;
  }
  if (kineticObject.pos.dx + kineticObject.point.r * 2 < (0 + kineticObject.point.r * 3)) {
      kineticObject.vel.dx = - kineticObject.vel.dx;
  }
  if (kineticObject.pos.dy + kineticObject.point.r * 2 < (0 + kineticObject.point.r * 3)) {
      kineticObject.vel.dy = - kineticObject.vel.dy;
  }
  console.log(kineticObject.point.r * 2);
}

// if (kineticObject.pos.dx + this.r > canvas.width) {
// kineticObject.pos.dx > canvas.width
// }

animate();
