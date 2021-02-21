class Box{
constructor(x,y,width,height){
var options = {
     'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        polygon= Bodies.circle(500,200,20);
        World.add(world,polygon);

        slingShot = new Slingshot(this.polygon,{x:100,y:200});
}

}

