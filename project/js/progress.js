var Progress = {
    bar : null,
    index : 0,
    imgList : [],
    init: function(){
        var box = document.getElementById("progressBox");
        var prog = document.createElement("progress");
        box.appendChild(prog);
 
        this.bar = prog;
    },

    loadImages: function(countImages,listImages,callback) {
        var self = this,
            i;
        this.bar.max = countImages;
        
        for (var k in listImages){
      
            var images = listImages[k];
        for (i=0;i<images.length;i++){
          //  var img = new Image();
       
        
            // img.setAttribute("display","none");
            images[i].show(false);
            //img.scale = 0.3;
            
            images[i].image.onload = function() {
                self.increase();
                if (self.index >= countImages){
                    self.done(callback);
                }
            };
            images[i].image.src = images[i].url;
            images[i].width = images[i].image.width * images[i].scale;
            images[i].height = images[i].image.height* images[i].scale;

              
            this.imgList.push( images[i]);
            document.body.appendChild(images[i].image); 
        } 
    }

    },

    increase: function(){
        this.index++;
        this.bar.value = this.index;

    },

    done : function(callback) {
        // console.log("I am done loading");


          this.bar.style.display = "none";
         if(this.bar.value >= this.bar.max)
            callback();
        var showBox = document.getElementById("show");
        // for (var i =0, l = this.index;i<l;i++) {
        //    // console.log(this.imgList[i].image)
           
            
        // }
      
    }

};