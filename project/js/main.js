window.addEventListener('load',function(){//Incializa apenas após carregar toda a pagina

    

    let lasttime = 0;
    var game = null;
    const canvas = document.getElementById('main_canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;
    var allAssets = null;
    var id_background = "bg_1";
 
    function drawImages(context){
        allAssets.images[id_background]
        for (let index = 0; index < allAssets.images[id_background].length; index++) {
            var currImage = allAssets.images[id_background][index];
            context.drawImage( currImage.image,currImage.position.x,currImage.position.y2,currImage.width, currImage.height );
        }
        // 
        // console.log(allAssets)
    }

    function loopGame(timeStamp){
        const deltaTime = timeStamp - lasttime;
        lasttime = timeStamp;  

         ctx.clearRect(0,0,canvas.width,canvas.height);
         drawImages(ctx);
        requestAnimationFrame(loopGame);
    } 
 
    function run(){
        console.log()
        // loopGame(0); 
    //    ctx.clearRect(0,0,canvas.width,canvas.height);
        allAssets.images[id_background]
        for (let index = 0; index < allAssets.images[id_background].length; index++) {
            var currImage = allAssets.images[id_background][index];
             
            console.log(currImage)
            ctx.drawImage( currImage.image,currImage.position.x,currImage.position.y2,currImage.width, currImage.height );
        }
    }

    function init(assets){  
        allAssets = new LoadAssets(assets,run); 

    } 

    //
    new LoadJson(init)

});