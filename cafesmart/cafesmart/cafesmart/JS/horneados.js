async function cargarProductos() {
    try {
        const response = await fetch('https://api.jsonbin.io/v3/b/66fe0794e41b4d34e43c111d');
        
        if (!response.ok) {
            throw new Error('Error al cargar los productos: ' + response.statusText);
        }

        const data = await response.json(); 
        const catalogo = document.getElementById('catalogo');

        data.record.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('producto');

            const img = document.createElement('img');
            img.src = producto.imagen;
            productoDiv.appendChild(img);

            const titulo = document.createElement('h2');
            titulo.textContent = producto.titulo;
            productoDiv.appendChild(titulo);

           
            const precio = document.createElement('p');
            precio.textContent = producto.precio; 
            productoDiv.appendChild(precio); 

            catalogo.appendChild(productoDiv); 
        });
    } catch (error) {
        console.error('Error al cargar los productos:', error);
    }
}

document.addEventListener('DOMContentLoaded', cargarProductos);

