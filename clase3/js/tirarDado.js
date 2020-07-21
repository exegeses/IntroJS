
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
        elDado.innerText = numero;
    }

    tirarDado();