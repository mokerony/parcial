document.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem('loggedInUser'); 
    console.log('Nombre de usuario recuperado:', username); 
    const welcomeMessage = document.getElementById('username'); 
    welcomeMessage.textContent = username ? `Bienvenido, ${username}` : 'Bienvenido, Invitado'; 

    const formulario = document.getElementById('formulario');
    const res = document.getElementById('res');

    const cargarProveedores = () => {
        res.innerHTML = ''; 
        const proveedores = JSON.parse(localStorage.getItem('proveedores')) || [];

        proveedores.forEach(proveedor => {
            const row = `<tr>
                            <td>${proveedor.codigo}</td>
                            <td>${proveedor.direccion}</td>
                            <td>${proveedor.ciudad}</td>
                            <td>${proveedor.telefono}</td>
                         </tr>`;
            res.innerHTML += row; 
        });
    };

    cargarProveedores();
});


window.enviarProveedor = (e) => {
    e.preventDefault(); 

    const formulario = document.getElementById('formulario');
    const nuevoProveedor = {
        codigo: formulario.codigo.value,
        direccion: formulario.direccion.value,
        ciudad: formulario.ciudad.value,
        telefono: formulario.telefono.value
    };

    const proveedores = JSON.parse(localStorage.getItem('proveedores')) || [];
    proveedores.push(nuevoProveedor);
    localStorage.setItem('proveedores', JSON.stringify(proveedores));

    formulario.reset();
    cargarProveedores();

    alert("Proveedor agregado exitosamente!");
};
