// ubicar elemento dentro del DOM
    var caja = document.getElementById('caja');

// generar función/es
    function  modificarCaja( codigo, texto )
    {
        caja.style.backgroundColor = codigo;
        caja.innerText = texto;
    }

