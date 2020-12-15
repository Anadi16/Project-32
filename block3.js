class Block3{
    constructor(x,y,width,height){


        var options = {
            isStatic : false,
            restitution : 0
        }
        

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;

   

       

       
      
            rectMode(CENTER);
            strokeWeight(2);
            fill(255,192,203);
            rect(pos.x,pos.y,this.width,this.height);
          
        }
    }