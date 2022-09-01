const menu = document.getElementById('menu')
const navList = document.querySelector('.nav-links')

menu.addEventListener('click', () =>{
    if(navList.style.height === '0px'){
        navList.style.height = '100%';
        menu.src = "./assets/menu-icon-close.png"
    }else{
        navList.style.height = '0px';
        menu.src = "./assets/menu-icon.png"
    }
})