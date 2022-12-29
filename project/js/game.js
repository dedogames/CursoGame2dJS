/**
 * Classe principal, tudo relacionado ao jogo inicializa/restarta/finaliza a partir dela
 */
class Game{
    constructor(width,height){
        //variaveis da class
        this.width = width;
        this.height = height;  
        this.background = new Background(this);
        this.isLoaded = false;
    }

    update(deltaTime){
        this.background.update(deltaTime);
    }

    draw(ctx){
       this.background.draw(ctx);
    }

    /** retorna context */
  
}