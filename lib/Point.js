class Point {
  constructor(x, y, r, color)
   {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
    this.r2 = this.r * 2;
    this.draggable = false;

  }
  draw(ctx)
  {
    ctx.beginPath();
    ctx.lineWidth = 8;
    ctx.strokeStyle = "black";
    ctx.fillStyle = this.color;
    ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }

  // drawLine(ctx)
  // {
  //   ctx.beginPath();
  //   ctx.lineWidth = 10;
  //   ctx.strokeStyle = "red";
  //   ctx.fillStyle = this.color;
  //   ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
  //   ctx.stroke();
  //   ctx.fill();
  //   ctx.closePath();
  // }

  position(vector)
  {
    this.x = vector.dx;
    this.y = vector.dy;
  }

  printText(myText)
  {
    ctx.fillStyle = "black";
    ctx.font = "16px Courier New";
    ctx.fillText(myText, this.x - this.r - 5, this.y - this.r - 18);
  }

  distanceToAnotherPoint(P)
  { //Assign dx and dy
    let dx = this.x - P.x;
    let dy = this.y - P.y;
    //Get square root of dx2 and dy2
    return Math.sqrt(dx * dx + dy * dy);
  }

  drag()
  {
    let dragStatus = false;
    let mousePosition = {};
    //console.log("dragStatus = " + dragStatus);
    //Clicked?
    document.addEventListener('mousedown',(evt) =>
    {
    //What are the coordinates of the mouse cursor?
    mousePosition.x = evt.clientX;
    mousePosition.y = evt.clientY;
    //console.log(mousePosition);
    //What is the distance between point and cursor?
    //console.log("Distance from cursor to point = " + this.distanceToAnotherPoint(mousePosition));
    if (this.distanceToAnotherPoint(mousePosition) <= this.r)
    {
      dragStatus = true;
    }
    else
    {
      dragStatus = false;
    }
    //console.log("Clicked on the point? " + dragStatus);
    });

    document.addEventListener('mousemove', (evt) =>
    {
      if (this.distanceToAnotherPoint(mousePosition <= this.r))
      {
      canvas.style.cursor = "pointer";
      evt.stopImmediatePropagation();
      }
      else
      {
      canvas.style.cursor = "default";
      }
      mousePosition.x = evt.clientX;
      mousePosition.y = evt.clientY;
      // console.log(mousePosition);
      if (dragStatus)
      {
        this.x = mousePosition.x;
        this.y = mousePosition.y;
      }
    })
    document.addEventListener('mouseup', (evt) =>
  {
    dragStatus = false;
  })
  }
}
