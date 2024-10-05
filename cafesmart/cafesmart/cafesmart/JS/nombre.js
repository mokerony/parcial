const recuperaDatos = () => {
    const nombreInput = document.getElementById('nombreInput').value;
    const apellidoInput = document.getElementById('apellidoInput').value;
    if (!nombreInput || !apellidoInput) {
        alert("Por favor, ingresa tanto el nombre como el apellido.");
        return; 
    }
    const soloLetras = /^[A-Za-z\s]+$/;
    
    if (!soloLetras.test(nombreInput) || !soloLetras.test(apellidoInput)) {
        alert("El nombre y el apellido solo deben contener letras sin acentos.");
        return; 
    }

    let nombres = {
        nombre: nombreInput,
        apellido: apellidoInput
    };
    
    localStorage.setItem("ingreso", JSON.stringify(nombres));
    window.location.href = 'bienvenidac.html';
    


 
};

document.getElementById('ingresarBtn').addEventListener('click', recuperaDatos);
