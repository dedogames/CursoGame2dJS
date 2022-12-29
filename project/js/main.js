window.addEventListener('load',function(){//Incializa apenas após carregar toda a pagina

    

    let lasttime = 0;
    var game = null;
    const canvas = document.getElementById('main_canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    var posX = 10;
    var posY = 10;
    function update(deltaTime){
        posX += 1;
        posY += 1;
    }

    function draw(context){
        ctx.fillStyle = 'white';
        ctx.fillRect(posX, posY, 100, 100);
    }

    function loopGame(timeStamp){
        const deltaTime = timeStamp - lasttime;
        lasttime = timeStamp;  

        ctx.clearRect(0,0,canvas.width,canvas.height);
        update(deltaTime);
        draw(ctx);
 
        requestAnimationFrame(loopGame);
    }
 

    function main(){ 
        loopGame(0);
    }

    main();
});