class Ship{
    constructor(x,y,shape){

        this.body = createSprite(x, y, 10, 10);
        //this.body.debug = true;
        this.health = 50;
        this.loc = [];

        this.time = 0;
        this.r;

        this.target = null;
        this.targetA = [];
        this.targets = [];

        this.player = false;
        
        this.shape = shape;
        this.rand = Math.round(random(0,100));

        if(this.shape === "circle" || this.shape === 1){
            this.body.setCollider("circle",0,0,10);
            this.properties = ({
                maxSpeed: 7,
                length: 10,
                defence: 20,
                damage: 50,
                range: 250,
                homing: true
            });
            this.percent = ({
                circle: 100,
                rectangle: 0,
                triangle: 0
            });
            
            this.shape = "circle";
        }
        else if(this.shape === "rectangle" || this.shape === 2){
            this.body.setCollider("rectangle",0,0,15,15);
            this.properties = ({
                maxSpeed: 5,
                length: 10,
                defence: 10,
                damage: 1000,
                range: 500,
                homing: false
            });
            this.percent = ({
                circle: 0,
                rectangle: 100,
                triangle: 0
            });

            this.shape = "rectangle";
        }
        else if(this.shape === "triangle" || this.shape === 3){
            this.body.setCollider("circle",0,0,10);
            this.properties = ({
                maxSpeed: 9,
                length: 10,
                defence: 50,
                damage: 20,
                range: 20,
                homing: false
            });
            this.percent = ({
                circle: 0,
                rectangle: 0,
                triangle: 100
            });
            
            this.shape = "triangle";
        }
    }

    display(){
        this.time += 1;
        //tail{
            //adds player location to tail
            this.loc.push([this.body.x,this.body.y]);

            //Keeps the length of tail
            if(this.loc.length > this.properties.length){
                this.loc.splice(0,1);
            }

            //draws the tail
            for(var i = 0; i < this.loc.length - 1; i++){
                strokeWeight(i*2);
                line(this.loc[i][0], this.loc[i][1], this.loc[i+1][0], this.loc[i+1][1]);
            }
        //}
        
        if(this.shape === "circle"){
            push();
            stroke("green");
            if(this.player === true){
                stroke("red");
            }
            strokeWeight(1);
            noFill();
            ellipse(this.body.x, this.body.y, 10);
            pop();
        }
        else if(this.shape === "rectangle"){
            push();
            stroke("blue");
            if(this.player === true){
                stroke("red");
            }
            strokeWeight(1);
            noFill();
            rectMode(CENTER);
            rect(this.body.x, this.body.y, 10, 10);
            pop();
        }
        else if(this.shape === "triangle"){
            push();
            stroke("yellow");
            if(this.player === true){
                stroke("red");
            }
            strokeWeight(1);
            noFill();
            triangle(this.body.x - 5, this.body.y + 5, this.body.x, this.body.y - 5, this.body.x + 5, this.body.y + 5);
            pop();
        }

        //keeps maxSpeed
        if(this.body.velocityX > this.properties.maxSpeed){
            this.body.velocityX = this.properties.maxSpeed;
        }
        else if(this.body.velocityX < -this.properties.maxSpeed){
            this.body.velocityX = -this.properties.maxSpeed;
        }

        if(this.body.velocityY > this.properties.maxSpeed){
            this.body.velocityY = this.properties.maxSpeed;
        }
        else if(this.body.velocityY < -this.properties.maxSpeed){
            this.body.velocityY = -this.properties.maxSpeed;
        }

        if(this.player != false){
            //slowly slows down player
            //x
            if(this.body.velocityX > 0){
                this.body.velocityX -= 0.5;
            }
            else if(this.body.velocityX < 0){
                this.body.velocityX += 0.5;
            }
            //y
            if(this.body.velocityY > 0){
                this.body.velocityY -= 0.5;
            }
            else if(this.body.velocityY < 0){
                this.body.velocityY += 0.5;
            }
        }
    }

    GetTarget(){
        for(var j = 0; j < enemy.length; j++){
            var xDiff = (this.body.x - enemy[j].body.x)*(this.body.x - enemy[j].body.x);
            var yDiff = (this.body.y - enemy[j].body.y)*(this.body.y - enemy[j].body.y);
            r = Math.sqrt(xDiff + yDiff);
            
            for(var k = 0; k < this.targetA.length; k++){
                if(this.targetA[k].body === enemy[j]){
                    this.targetA.splice(k,1);
                }
            }
                this.targetA.push({
                    dist: r,
                    body: enemy[j]
                });
        }
        this.targetA.sort();
        //console.log(this.targetA);

        if(frameCount === 100){
            
        }
    }
}