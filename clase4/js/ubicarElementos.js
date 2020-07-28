// getElementByID
    var link3 = document.getElementById('link3');
        link3.style.backgroundColor = '#84a99c';

// getElementsByTagName
    var articulos = document.getElementsByTagName('article');
        console.log(articulos)
        articulos[1].style.backgroundColor = '#b9d7c4';

// getElementsByClassName
    var productos = document.getElementsByClassName('producto');
        console.log(productos)
        productos[0].style.backgroundColor = '#b9d7c4';
        productos[2].style.backgroundColor = '#b9d7c4';

// querySelector
    var caja3 = document.querySelector('#caja3');
        caja3.style.borderTop = '2px solid #b9d7c4';
    var items = document.querySelectorAll('#caja3 article');
        console.log(items)
        items[1].style.backgroundColor = '#c6e7d2';
    var link2 = document.querySelectorAll('.producto a');
        console.log(link2);
        link2[1].style.backgroundColor = '#84a99c';

