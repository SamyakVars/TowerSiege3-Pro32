class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0
           
      }

      this.visibility = 255
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
  display(){
    var angle = this.body.angle;
    var pos= this.body.position;
  }

    
}