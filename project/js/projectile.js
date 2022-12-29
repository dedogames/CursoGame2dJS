
class Projectile{
    constructor(game,x,y){
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 3;
        this.speed = 3;
        this.markedForDeletetion = false;
    }

    update(){
        this.x += this.speed;
        if(this.x > this.game.width * 0.8) this.markedForDeletetion=true;
    }

    draw(context){
        // context.save();
        context.fillStyle = 'white';
        context.fillRect(this.x, this.y, this.width,this.height);
        // context.restore();

    }
}