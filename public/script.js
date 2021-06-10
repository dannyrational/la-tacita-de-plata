
const openBtn = document.getElementById('open-btn')
const sidebar = document.getElementById('sidebar')
const mainLayover = document.getElementById('main-layover')
const navbar = document.getElementById('navbar')

// Mobile Sidebar Show/Hide
openBtn.addEventListener('click', function() {
    sidebar.classList.remove('-translate-x-full')
    mainLayover.classList.remove('hidden')
})

mainLayover.addEventListener('click', function() {
    sidebar.classList.add('-translate-x-full')
    mainLayover.classList.add('hidden')
})

window.onscroll = function() {
    if (window.pageYOffset > 65 || document.pageYOffset > 65) {
        navbar.classList.add('opacity-0', 'transition', 'duration-300')
    } else {
        navbar.classList.remove('opacity-0')
    }    
}



