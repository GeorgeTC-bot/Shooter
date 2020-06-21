function rAI(p){
    //if(frameCount % 50 === 0){
        var rand = Math.round(random(0.5,7.5));
    //}
        
    if(p.target === null){    
        if(rand === 1){
            p.body.velocityX = p.properties.maxSpeed;
        }
        else if(rand === 2){
            p.body.velocityX = -p.properties.maxSpeed;
        }
        else if(rand === 3){
            p.body.velocityY = p.properties.maxSpeed;
        }
        else if(rand === 4){
            p.body.velocityY = -p.properties.maxSpeed;
        }
        else if(rand === 5){
            p.body.velocityX = p.properties.maxSpeed;
            p.body.velocityY = -p.properties.maxSpeed;
        }
        else if(rand === 6){
            p.body.velocityX = -p.properties.maxSpeed;
            p.body.velocityY = p.properties.maxSpeed;
        }
        else if(rand === 7){
            p.body.velocityX = p.properties.maxSpeed;
            p.body.velocityY = p.properties.maxSpeed;
        }
        else if(rand === 8){
            p.body.velocityX = p.properties.maxSpeed;
            p.body.velocityY = p.properties.maxSpeed;
        }
    }
    else if(p.target != null){        
        if(p.dist < p.properties.range && p.dist > p.properties.range - 200){
            //towards
            follow(p.target, p.body, p.properties.maxSpeed, "fight");

            if(frameCount % p.rand === 0){
                snipe.bullets.push( new Bullet(p 
                  ,p.body.x 
                  ,p.body.y 
                  ,p.target.x, 
                  p.target.y));
                
                p.rand = Math.round(random(1,100));
                console.log(p.rand);
            }
        }
        else if(p.dist < p.properties.range - 200){
            //run
            follow(p.target, p.body, p.properties.maxSpeed, "flight");
        }
    }
}