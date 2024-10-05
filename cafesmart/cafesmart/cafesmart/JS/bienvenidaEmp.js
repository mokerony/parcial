
document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('loggedInUser'); 
    console.log('Nombre de usuario recuperado:', username); 
    const welcomeMessage = document.getElementById('username'); 
    welcomeMessage.textContent = username ? `Bienvenido, ${username}` : 'Bienvenido, Invitado'; 
});

