// Make a point.
// is Point clicked?
//
//
//
//
//


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let dragPoint = new Point(200, 200, 30, "green");
dragPoint.draw(ctx);
dragPoint.drag();

let dragPoint2 = new Point(300, 100, 20, "blue");
dragPoint2.drag();

let dragPoint3 = new Point(500, 400, 40, "red");
dragPoint3.drag();

let dragPoint4 = new Point(600, 200, 30, "orange");
dragPoint4.drag();


function animate()
{
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(animate)
  ctx.beginPath();
  ctx.moveTo(dragPoint.x, dragPoint.y);
  ctx.lineTo(dragPoint2.x, dragPoint2.y);
  ctx.lineTo(dragPoint3.x, dragPoint3.y);
  ctx.lineTo(dragPoint4.x, dragPoint4.y);
  ctx.fill();
  ctx.closePath();
  ctx.lineWidth = 3;
  ctx.stroke();
  dragPoint.draw(ctx);
  dragPoint2.draw(ctx);
  dragPoint3.draw(ctx);
  dragPoint4.draw(ctx);
}

animate();
