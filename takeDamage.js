function takeDamage(p1, array, i){
    for(var j = 0; j < snipe.bullets.length; j++){
      snipe.bullets[j].display();
      if(snipe.bullets[j].entity === p1 && p1.shape === "circle"){
        follow({x: camera.mouseX, y: camera.mouseY}, snipe.bullets[j].body, 10, "fight");
      }

      if(array[i].shape != undefined || p1.shape != undefined){
        if(snipe.bullets[j].time > 10000){
            snipe.bullets.splice(j, 1);
            j -= 1;
        }
        else if(array[i].body.isTouching(snipe.bullets[j].body)){
            if(snipe.bullets[j].entity != array[i] && array[i].time >= 40){
                if(settings.friendlyFire === true || settings.friendlyFire === false && array[i].shape != p1.shape){
                    array[i].health -= p1.properties.damage;
                }
                snipe.bullets.splice(j, 1);
                j -= 1;
            }
        }
        else if(p1.body.isTouching(snipe.bullets[j].body)){
            if(snipe.bullets[j].entity != p1){
                if(settings.friendlyFire === true || settings.friendlyFire === false && p1.shape != snipe.bullets[j].entity.shape){
                    p1.health -= snipe.bullets[j].entity.properties.damage;
                }
                snipe.bullets.splice(j, 1);
                j -= 1;
            }
        }
      }
    }
    if(p1.shape === "triangle"){
        if(settings.friendlyFire === true || settings.friendlyFire === false && p1.shape != array[i].shape){
            if(p1.body.isTouching(array[i].body) && array[i].time >= 40){
                array[i].health -= p1.properties.damage;
                i -= 1;
            }
        }
    }
  }