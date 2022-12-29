window.addEventListener('load',function(){//Incializa apenas após carregar toda a pagina

    
    function main(){
        //Inicializando o canvas onde será renderizado(mostrado) o game
        const canvas = document.getElementById('main_canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 500;
        canvas.height = 500;

        ctx.fillStyle = 'white';
        ctx.fillRect(10, 10, 100, 100);
    }

    main();
});