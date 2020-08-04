var cuerpo = document.getElementById('cuerpo');
var filas = document.getElementsByTagName('td');

// var empleados = ['Diego', 'Karmen', 'Mariangel'];
		var empleados = [
			'Diego', 'Rangel', 23,
			'Karmen', 'Blanco', 25,
			'Mariangel', 'Rangel', 5
		]
		var num = 1;
		var step = 3;
		var code = '<tr>';
		for (var i = 0; i < empleados.length; i++) {
				code += '<td>'+empleados[i]+'</td>';
				if( num == step ){
					code += '</tr><tr>';
					num = 0;
				}
			num++;
				cuerpo.innerHTML = code;
				console.log(empleados[i])
		}
		code += '</tr>';
			
		// document.write(empleados[1]);