
class LoadAssets{
    constructor(assets,finished_callback) {
     

      this.images = [];
      this.countImages = 0;
      this.loadedJson(assets);
      Progress.init();
      Progress.loadImages(this.countImages,this.images,finished_callback);
    }

    loadedJson(content){
        var jsonAssets = JSON.parse(content)
        var backgrounds = jsonAssets.backgrounds;
        var players =  jsonAssets.players;
        var enemies =  jsonAssets.enemies;
        this.loadImages(backgrounds,players,enemies) ; 
    }

    loadImages(backgrounds, players,enemies){
       
       //var img_by_folder = [];
        for(var background in backgrounds) {
            var folder = backgrounds[background].folder;
           // img_by_folder[folder] = [];
            var arr_imgs = [];
            var scale =  backgrounds[background].scale;
            
            for(var index in  backgrounds[background].images) {
               var url =  "assets/backgrounds/"+folder + "/"+ backgrounds[background].images[index];
               var offset_array = backgrounds[background].offsets[index]; 
               var speed = backgrounds[background].speeds[index];
          
               var offset = new Vec2D(offset_array[0],offset_array[1]);
               arr_imgs.push(new Image2D(url,speed,scale,offset))
               this.countImages++;
                
            }
            this.images[backgrounds[background].prefix] = arr_imgs;
        } 
    }
}