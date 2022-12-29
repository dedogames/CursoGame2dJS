/**
 * Classe principal, tudo relacionado ao jogo inicializa/restarta/finaliza a partir dela
 */
class Game{
    constructor(width,height,context){
        //variaveis da class
        this.width = width;
        this.height = height; 
        this.ammoTime = 0;
        this.ammoInterval = 300;
        this.maxAmmo = 10;
        this.amo = 20;
        //criando objects
        this.keys = [];
        this.player = new Player(this);
        this.inputHandler = new InputHandler(this);
     
       

        
    }

    update(deltaTime){
        
        this.player.update(deltaTime)
        if(this.ammoTime > this.ammoInterval){
            if(this.amo < this.maxAmmo) this.amo++;
            this.ammoTime = 0;
        }else{
            this.ammoTime += deltaTime
        }

        
    }

    draw(ctx){
        this.player.draw(ctx)
    }

    /** retorna context */
  
}