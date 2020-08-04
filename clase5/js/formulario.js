// ubicar elemento dentro del DOM
    var campoNombre = document.querySelector('input[name="nombre"]');
    var errorNombre = document.querySelector('#errorNombre');

    var campoEmail = document.querySelector('input[name="email"]');
    var errorEmail = document.querySelector('#errorEmail');

//generamos función de validación
    function validar() {
        //reseteamos mensajes de error
        errorNombre.innerHTML = '';
        errorEmail.innerHTML = '';

        if( campoNombre.value == ''  ){
            errorNombre.innerHTML = '<img src="imagenes/error2.png"> Complete el campo Nombre.'
            return false;
        }
        if( campoEmail.value == ''  ){
            errorEmail.innerHTML = '<img src="imagenes/error2.png"> Complete el campo Email.'
            return false;
        }
        return true;
    }
