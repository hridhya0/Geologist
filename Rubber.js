class Rubber {
    constructor(x, y) {
      var options = {
        'density':0.3,
        'friction': 5,
        'restitution':0.3
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 40;
      this.height = 60;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('blue')
      fill('blue')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  