
let nombres = JSON.parse(localStorage.getItem("ingreso"));

    document.getElementById("resultado").innerHTML = "hola "+ nombres.nombre +" "+ nombres.apellido;

