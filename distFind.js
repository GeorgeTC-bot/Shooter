function distFind(obj1, obj2, val){
    var xDiff = (obj1.x - obj2.x)*(obj1.x - obj2.x);
    var yDiff = (obj1.y - obj2.y)*(obj1.y - obj2.y);
    val = Math.sqrt(xDiff + yDiff);
}