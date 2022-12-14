const nav = document.querySelector('.navLinks')
const burger = document.querySelector('.burger')

function toggleMeny() {
    nav.classList.toggle('navActive')
    burger.classList.toggle('toggle')

}


burger.addEventListener('click', toggleMeny)
