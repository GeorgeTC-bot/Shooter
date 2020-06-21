function follow(target, follower, speed, fightorflight){
    var deltaX, deltaY;

    if(fightorflight === "fight"){
        deltaX = target.x - follower.x;
        deltaY = target.y - follower.y;
    }
    else if(fightorflight === "flight"){
        deltaX = follower.x - target.x;
        deltaY = follower.y - target.y;
    }

    var shipAngle = Math.atan(deltaY / deltaX);

    if (deltaX < 0) {
        shipAngle += Math.PI;
    }
    follower.velocityX = speed * Math.cos(shipAngle);  
    follower.velocityY = speed * Math.sin(shipAngle);
}