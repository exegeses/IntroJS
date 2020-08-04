var locacion = [
                    "chinatown",
                    "floating-market",
                    "hat-laem",
                    "wat-arun",
                    "khao-san-road",
                    "ko-khai-beach",
                    "kwai-river",
                    "limestone",
                    "longtail-boat",
                    "maya-bay",
                    "pra-nang",
                    "rai-leh-beach",
                    "rawai",
                    "sirocco",
                    "tuk-tuk",
                    "wat-saket"
                ];

    var cantidad = locacion.length;
    var contenido = '';
    for( var n = 0; n < cantidad; n++ ){
        contenido += '<article class="contenedor">\n' +
            '        <img src="tailandia/'+locacion[n]+'.jpg">\n' +
            '        <br>\n' +
            '        <h2>'+locacion[n]+'</h2>\n' +
            '    </article>\n';
    }
    document.write( contenido );