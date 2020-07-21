
    var caja = document.getElementById('caja');
        caja.style.position = 'relative';
        caja.style.top = '100px';
    var grados = 0;

    function rotar()
    {
        var r = Math.random() * 255;
        var g = Math.random() * 255;
        var b = Math.random() * 255;
        caja.style.backgroundColor = 'rgb( '+r+', '+g+', '+b+' )';
        grados += 3;
        caja.style.transform = 'rotate('+grados+'deg)';
    }

    rotar();
    setInterval( rotar, 100);