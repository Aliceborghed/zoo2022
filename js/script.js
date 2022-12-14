const nav = document.querySelector('.navLinks')
const burger = document.querySelector('.burger')

function toggleMeny() {
    nav.classList.toggle('navActive') /* Togglar länkarna */
    burger.classList.toggle('toggle') /* Togglar hamburgaren */
}


burger.addEventListener('click', toggleMeny)
