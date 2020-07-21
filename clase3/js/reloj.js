
    var verReloj = document.getElementById('verReloj');

    function reloj()
    {
        //creamos objeto de fecha
        var fecha = new Date();

        // obtenemos hora actual
        var hora = fecha.getHours();
        //obtenemos los minutos
        var minutos = fecha.getMinutes();
        //obtenemos segundos
        var segundos = fecha.getSeconds();

        //imprimimos info en el reloj
        verReloj.innerText = hora +':'+ minutos +':'+ segundos;
    }

    reloj();

    // actualizar el llamado a la función
    setInterval( reloj, 1000 )