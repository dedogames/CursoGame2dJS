class Image2D{
    constructor(url,speed,scale,offset){
        this.image = new Image();
        this.url = url;
        this.speedModifier = speed;
        this.scale =scale
        this.offset = offset;
        this.position = new Vec2D(0,0);
        this.width = this.image.width  ; 
        this.height = this.image.height  ;
        

    }

    show(val){
        // if(val){
        //  this.image.style = " ;transform: scale("+this.scale+"); "
        // }
        // else{
        //     this.image.style = "display: none;  ;transform: scale("+this.scale+"); "
        // }

        this.image.style = "display: none"; 
    }
}