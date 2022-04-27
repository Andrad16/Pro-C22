class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    
    this.cannonBase = loadImage("assets/cannonBase.png")
    this.canon = loadImage("assets/canon.png")

  }
 show(){
   image(this.cannonBase, this.x, this.y, this.width, this.height)
 }

}
