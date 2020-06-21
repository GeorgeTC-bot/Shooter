class Bullet{
    constructor(entity ,x1,y1,x2,y2){
        this.entity = entity;

        this.x = x1;
        this.y = y1;
        this.body = createSprite(this.x,this.y,5,5);
        this.target = {
            x: x2,
            y: y2
        };

        //towards
        var deltaX = this.target.x - this.body.x;
        var deltaY = this.target.y - this.body.y;

        var angle = Math.atan(deltaY / deltaX);

        if (deltaX < 0) {
            angle += Math.PI;
        }
        this.body.velocityX = 10 * Math.cos(angle);  
        this.body.velocityY = 10 * Math.sin(angle);  

        this.time = 0;
    }

    display(){

        push();
        noStroke();
        rectMode(CENTER);
        rect(this.body.x,this.body.y,5,5);
        pop();

        this.time += 1;

                      
    }
}