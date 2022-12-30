/**
 * Classe principal, tudo relacionado ao jogo inicializa/restarta/finaliza a partir dela
 */
class Game{
    constructor(level,width,height){
        //variaveis da class
        this.width = width;
        this.height = height;  
        this.background = new Background(level,this);
        this.isLoaded = false;
    }

    update(deltaTime){
        this.background.update(deltaTime);
    }

    draw(ctx){
         this.background.draw(ctx);  
    } 
  
}