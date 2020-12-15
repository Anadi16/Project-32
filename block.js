class Block{
    constructor(x,y,width,height){


        var options = {
            isStatic : false,
            restitution : 0
        }
        

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        

        World.add(world,this.body);
        
    
    }
    display(){
        var pos = this.body.position;

       

        if(this.body.speed < 3){
            rectMode(CENTER);
            strokeWeight(2);
            fill(135,206,234);
            rect(pos.x,pos.y,this.width,this.height);
        }

        else if(this.body.speed > 3){
            World.remove(world, this.body);
            
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            fill(135,206,234);
            
            rect(pos.x,pos.y,this.width,this.height);

            
        } 
       
    
        }

        score(){
            if(this.Visiblity<0 && this.visibility>-105){
                score ++
            }
    }
      
    
}