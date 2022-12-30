function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
class Layer{
    constructor(id,game,image,speed,scale,x,y, offsetX, offsetY,isFullBackground,effects){
        this.game = game;
        this.id = id;
        this.image = image;
        this.speedModifier = speed;
        this.scale = scale; 
        this.width = image.width*this.scale ;
        this.height = image.height*this.scale ;
        this.x = x;
        this.y = y; 
        this.offsetX =  offsetX;
        this.offsetY = offsetY;
        this.startPositionX = this.game.width+10;
        this.isFullBackground = isFullBackground;
        this.effects = effects;
     
       
        if(isFullBackground)
            this.startPositionX = 0;

    }

    update(deltaTime){
        if(this.x <= -this.width ) {
            this.x = this.startPositionX ;
            if(!this.isFullBackground)
              this.y = randomInteger(0,400)
        }
        this.x -= this.speedModifier*deltaTime;
    }

    draw(context){
        
        context.filter = 'blur('+this.effects.blur+'px) '+'opacity('+this.effects.opacity+')'; 
        context.drawImage(this.image, this.x, this.y,this.width, this.height );
        context.drawImage(this.image, this.x+this.width +this.offsetX, this.y,this.width, this.height ); 
    }
}