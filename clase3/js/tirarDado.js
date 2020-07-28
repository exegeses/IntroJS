
    var elDado = document.getElementById('elDado');

    function tirarDado()
    {
        var numeroAleatorio = Math.random();
            console.log( numeroAleatorio );
        var numeroMultiplicado = (numeroAleatorio * 5) + 1;
            console.log( numeroMultiplicado );
        var numero = Math.round( numeroMultiplicado );
            console.log( numero );

        //mostrar el dado
        //elDado.innerText = numero;
        elDado.innerHTML = '<img src="dados/dado'+numero+'.png">';
    }

    function obtenerNumeroAleatorio(inicio, factor)
    {
        var numeroAleatorio = Math.random();
        var numeroMultiplicado = (numeroAleatorio * (factor-1)) + inicio;
        console.log( numeroMultiplicado );
        var numero = Math.round( numeroMultiplicado );
        return numero;
    }

    tirarDado();

    console.log( 'numero: ' + obtenerNumeroAleatorio(1, 6) )