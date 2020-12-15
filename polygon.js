class Poly{
    constructor(x,y,width,height){


        var options = {
            isStatic : false,
            restitution : 0
        }
        

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("polygon.png");
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }
    display(){
        

        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
    score(){
        if(this.Visiblity<0 && this.visibility>-105){
            score ++
        }
    
}
}