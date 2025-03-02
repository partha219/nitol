document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const slideMenu = document.getElementById('slideMenu');
    const closeMenuButton = document.getElementById('closeMenu');
    const sendButton = document.getElementById('sendButton');
    const formResponse = document.getElementById('formResponse');

    
    menuButton.addEventListener('click', () => {
        slideMenu.classList.toggle('open');
    });

   
    closeMenuButton.addEventListener('click', () => {
        slideMenu.classList.remove('open');
    });

    
    sendButton.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            formResponse.textContent = "Thank you, " + name + "! Your message has been sent.";
            formResponse.style.color = "green";
        } else {
            formResponse.textContent = "Please fill out all fields.";
            formResponse.style.color = "red";
        }
    });
});