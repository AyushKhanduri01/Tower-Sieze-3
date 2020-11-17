class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB =pointB;
        this.chain = Constraint.create(options);
        World.add(world,this.chain)
    }

    attach(body){
        this.chain.bodyA = body;
    }
    fly(){
        this.chain.bodyA = null;
    }
    
    display(){
        if(this.chain.bodyA){
            strokeWeight(4);
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
} 