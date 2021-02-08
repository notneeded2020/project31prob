class Drops {
   constructor(x,y,radius){
    var options = {   
        restitution :0.4,
        friction :0.1,
        density :0.1
        //isStatic:true
    }
    this.body = Bodies.circle(x, y,radius, options);
    this.radius = radius;
    this.drops = []  
    World.add (world,this.body)
   }
   display(){
    var maxDrops = 100;
    var angle = this.body.angle;
    fill("lightblue");
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y,this.radius);
    pop();

    if (this.body.position.y > height){
        Matter.Body.setPosition (this.body,{x:random(0,400),y:random(0,400)})
    }

    for (var i = 0; i<maxDrops; i++){
     this.drops.push (new Drops (random(0,400),random (0,400)))
    }
      
  }
   
   }
