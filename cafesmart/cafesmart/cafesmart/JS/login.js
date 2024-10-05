document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    let users = []; 

  
    const fetchUsers = async () => {
        try {
            const response = await fetch('https://api.jsonbin.io/v3/b/670075cbe41b4d34e43d1bd5'); 
            const data = await response.json();
            users = data.record; 
            console.log('Usuarios cargados:', users); 
        } catch (error) {
            console.error('Error al cargar los usuarios:', error);
        }
    };

   
    const limpiarDatos = () => {
        document.getElementById('username').value = "";  
        document.getElementById('password').value = "";  
    };

 
    fetchUsers();


    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();  
        localStorage.removeItem('loggedInUser'); 

        const usernameInput = document.getElementById('username').value.trim();  
        const passwordInput = document.getElementById('password').value.trim();  
        
        console.log('Usuario ingresado:', usernameInput); 
        console.log('Contraseña ingresada:', passwordInput);  

        const userFound = users.find(user => user.usuario === usernameInput && user.password === passwordInput);  

        if (userFound) {
            console.log('Rol del usuario:', userFound.role);  // Verifica el rol
            switch (userFound.role) {
                case 'admin':
                    window.location.href = 'HTML/bienvenidaEmp.html';
                    break;
                case 'user':
                    window.location.href = 'HTML/principalc.html';
                    break;
                default:
                    alert('Rol no reconocido');
            }
        } else {
            alert('Usuario o contraseña incorrectos');
        }
        

        limpiarDatos(); 
    });
});
