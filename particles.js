class Divisions {
    constructor(x, y, w, h) {
        var options = {

            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        particles.push(new particle(random(width/2-30, width/2+30), 10,10));
        particles.push(new particle (k, height-particleHeight/2, 10, particleHeight));
        rect(pos.x, pos.y, this.w, this.h);
    }
};