burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')

searchBar = document.querySelector('.search-bar')

burger.addEventListener('click' , ()=>{
    searchBar.classList.toggle('v-nav')
    navlist.classList.toggle('v-nav')
    navbar.classList.toggle('h-nav')


})
