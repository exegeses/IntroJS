
    var verReloj = document.getElementById('verReloj');

    function reloj()
    {
        //creamos objeto de fecha
        var fecha = new Date();

        // obtenemos hora actual
        var hora = fecha.getHours();
        //obtenemos los minutos
        var minutos = fecha.getMinutes();

        //imprimimos info en el reloj
        verReloj.innerText = hora +':'+ minutos;
    }

    reloj();