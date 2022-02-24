let hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

if(hamburger){
    hamburger.addEventListener('click', () => {
        navUL.classList.toggle('show');
    });
}