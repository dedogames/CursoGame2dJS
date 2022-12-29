
/**
 * Clase responsavel pelas entradas (Mouse, teclado...)
 */
class InputHandler{
    constructor(game){
        this.game = game;
 

        window.addEventListener('keydown',key_event => {
            if( ((key_event.key === 'ArrowUp') ||
             (key_event.key === 'ArrowDown') 
             ) 
            && this.game.keys.indexOf(key_event.key) === -1){
                this.game.keys.push(key_event.key);
            }else if (key_event.key === ' '){
             
                this.game.player.shootTop()
  
            }
        });

        window.addEventListener('keyup',key_event => {
            if(this.game.keys.indexOf(key_event.key) > -1){
                this.currentKey  = null;
                this.game.keys.splice(this.game.keys.indexOf(key_event.key),1);
            } 
        });
    }
}