class Background{
    constructor(level,game){
        this.game = game;
        this.layers = [];
       
        var scale = parseFloat(document.getElementById("bg"+level).getAttribute("scale"));
        var elements = document.getElementById("bg"+level).getElementsByTagName('*');
        
        for (var i = 0; i < elements.length; ++i) {
     
            var position =  elements[i].getAttribute("pos").split(",");
            var offset =  elements[i].getAttribute("offset").split(",");
            var isFullBackground =  elements[i].getAttribute("fullbackground") == "true"? true : false;
            var effects=elements[i].getAttribute("effects");

            this.layers.push( new Layer("bg"+i, this.game,elements[i], parseFloat( elements[i].getAttribute("speed")), scale,    parseFloat(position[0]),parseFloat(position[1]),       parseFloat(offset[0]),parseFloat(offset[1]) ,isFullBackground,JSON.parse(effects))  )
        }
    }

    update(deltaTime){
        this.layers.forEach(layer => layer.update(deltaTime));
    }

    draw(context){
        this.layers.forEach(layer => layer.draw(context));
    }

    
}