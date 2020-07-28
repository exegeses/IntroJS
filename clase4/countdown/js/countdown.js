    var cajaDias = document.getElementById('dias');
    var cajaHoras = document.getElementById('horas');
    var cajaMinutos = document.getElementById('minutos');
    var cajaSegundos = document.getElementById('segundos');

    function countdown()
    {
        var now = new Date();
        var end = new Date( 2020, 7, 2);
        var actual = now.getTime();
        var evento = end.getTime();

        var restante = evento - actual; //tiempo restante en milisegundos

        var segundos = Math.floor( restante/1000 );
        var minutos = Math.floor( segundos/60 );
        var horas = Math.floor( minutos/60 );
        var dias = Math.floor( horas/24 )

        // restantes
          horas %= 24;
          minutos %= 60;
          segundos %= 60;

        //ceros iniciales
          horas = ( horas < 10 ) ? '0'+horas : horas;
          minutos = ( minutos < 10 ) ? '0'+minutos : minutos;
          segundos = ( segundos < 10 ) ? '0'+segundos : segundos;

        console.log( dias + ' ' + horas + ':' + minutos + ':' + segundos );
        cajaDias.innerText = dias;
        cajaHoras.innerText = horas;
        cajaMinutos.innerText = minutos;
        cajaSegundos.innerText = segundos;
    }
    countdown();
    setInterval( countdown, 1000 )