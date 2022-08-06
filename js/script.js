const navBar = document.querySelector('.navbar')
window.addEventListener("scroll", e => {
    if(window.scrollY <= 10){
        navBar.classList.remove('navbar-scroll')
    }else{
        navBar.classList.add('navbar-scroll')
    }
})