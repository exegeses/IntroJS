    //ubicamos elemento dentor del DOM
    var caja = document.getElementById('caja');

    //creamos funcion/es para generar interactividad
    function cambiarCaja()
    {
        caja.style.width = '250px';
        caja.style.height = '60px';
        caja.style.backgroundColor = '#d60';
        caja.innerText = 'Caja modificada';
    }
