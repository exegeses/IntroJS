
    //creamos variable nombre
    var nombre = 'Marcos';

    //creamos un objeto de fecha
    // y lo guardamos en variable fecha
    var fecha = new Date();

    //obtenemos el número del día del mes
    var diaMes = fecha.getDate();

    //obtenemos el número del mes del año
    var mes = fecha.getMonth() + 1;

    //obtenemos en número del año
    var anio = fecha.getFullYear();

    document.getElementById('caja').innerText = diaMes +'/'+ mes + '/' + anio;
