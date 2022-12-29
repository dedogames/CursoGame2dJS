class Background{
    constructor(game){
        this.game = game;
        this.layers = [];
        
        this.loadBackground(2,5)
    }

    update(deltaTime){
        this.layers.forEach(layer => layer.update(deltaTime));
    }

    draw(context){
        this.layers.forEach(layer => layer.draw(context));
    }

    loadBackground(folder,ammount){
        var defalt_speeds = [0.1, 0.2, 0.5, 9, 1, 0.6]
        for (let index = 0; index < ammount; index++) {
            var img = document.createElement('img');
            img.class = "background";
            var curr_index = index + 1; 
            img.src = Constants.URL_BACKGROUNDS + folder +"/Layer"+curr_index+".png";
            img.onload = function() {
                self.increase();
                if (self.index >= length){
                    self.done();
                }
            };
            this.layers.push( new Layer("layer"+curr_index,this.game, img,defalt_speeds[index]));
        }
    }
}