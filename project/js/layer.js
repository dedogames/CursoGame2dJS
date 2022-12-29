class Layer{
    constructor(id,game,image,speedModifier){
        this.game = game;
        this.id = id;
        this.image = image;
        this.speedModifier = speedModifier;
        this.scale = 1; 
        this.width = image.width;
        this.height = image.height
        this.x = 0;
        this.y = 0;
    }

    update(deltaTime){
        if(this.x <= -this.width ) this.x = 0;
        this.x -= this.speedModifier;
    }

    draw(context){
        
        context.drawImage(this.image, this.x, this.y,this.width, this.height );
        context.drawImage(this.image, this.x+this.width , this.y,this.width, this.height ); 
    }
}