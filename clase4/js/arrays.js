
   //#### array
   var nombres = [
                    'Marcos', 'Juan',
                    'Pedro', 'Mateo',
                    'Santiago', 'Benjamin'
                 ];
    console.log(nombres);
    //document.write(nombres[3]);


   var verFecha = document.getElementById('verFecha');

   var fecha = new Date();
   var diaSemana = fecha.getDay();

   var semana = [
                'Domingo', 'Lunes', 'Martes', 'Miércoles',
                'Jueves', 'Viernes', 'Sábado'
                ];
    var diaMes = fecha.getDate();
   var meses = [
                'enero', 'febrero', 'marzo', 'abril',
                'mayo', 'junio', 'julio', 'agosto',
                'septiembre', 'octubre', 'noviembre', 'diciembre'
                ];
    var mes = fecha.getMonth();

   verFecha.innerText = semana[ diaSemana ] +' '+ diaMes +' de '+ meses[mes];
