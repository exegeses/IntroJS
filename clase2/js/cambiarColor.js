
var caja = document.getElementById('caja');

  function CambiarColorFucsia()
  {  
      caja.style.backgroundColor = '#DF269F' ;
    }

  function CambiarColorRosa()
  {  
      caja.style.backgroundColor = '#EF73C4'; 
  }
  function CambiarColorTurquesa()
  {  
      caja.style.backgroundColor = '#31C6D3'; 
  }

/* parámetros */
// un parámetro ingresa a una función
// y es procesado internamente
function cambiarColor( codigo )
    {
        caja.style.backgroundColor = codigo;
    }