const btn = document.querySelector('.navbar_btn');
const menu = document.querySelector('.navbar_menu');
const member = document.querySelector('.navbar_member');

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
    member.classList.toggle('active');
});