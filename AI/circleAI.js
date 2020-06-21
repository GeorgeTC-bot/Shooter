function cAI(p){
    if(frameCount % 10 === 0){
        var rand = Math.round(random(0.5,7.5));
    }
        
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
        p.body.velocityX = 0;
        p.body.velocityY = 0;

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
}