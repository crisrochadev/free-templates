
//Open Menu
const burger_menu = document.getElementById('burger_menu')
const menu = document.getElementById('menu')
const items = document.querySelectorAll('.header nav .menu li')
items.forEach(item => {
    item.addEventListener('click',() => {
        menu.classList.remove('show_menu');
    })
})
burger_menu.addEventListener('click',() => {
    menu.classList.toggle('show_menu');
})

//Open Signout
const signout = document.getElementById('signout')
const user_buttom = document.getElementById('user_buttom')
const link_user_button = document.querySelector('#user_buttom a')
if(window.screen.width <= 780) link_user_button.href = '#';
user_buttom.addEventListener('click',() => {
    console.log('oi')
    signout.classList.toggle('show_signout');
})