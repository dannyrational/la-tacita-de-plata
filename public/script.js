const openBtn = document.getElementById('open-btn')
const sidebar = document.getElementById('sidebar')
const mainLayover = document.getElementById('main-layover')
const navbar = document.getElementById('navbar')
const textSectionOne = document.getElementById('text-section-one')

// * Mobile Sidebar Show/Hide
openBtn.addEventListener('click', function () {
    sidebar.classList.remove('-translate-x-full')
    mainLayover.classList.remove('hidden')
})

mainLayover.addEventListener('click', function () {
    sidebar.classList.add('-translate-x-full')
    mainLayover.classList.add('hidden')
})

window.onscroll = function () {
    if (window.pageYOffset > 65 || document.pageYOffset > 65) {
        navbar.classList.remove('show-nav')
        navbar.classList.add('hide-nav')
    } else {
        navbar.classList.remove('hide-nav')
        navbar.classList.add('show-nav')
    }
}


// * Text Scroll & Opacity Animation
function textOpacity() {
    document.addEventListener('scroll', function () {

        if (window.pageYOffset >= 100 && window.pageYOffset < 200) {
            textSectionOne.style.opacity = "0.75"
            textSectionOne.style.transform = "translateY(-20px)"
        } else if (window.pageYOffset >= 200 && window.pageYOffset < 300) {
            textSectionOne.style.opacity = "0.5"
            textSectionOne.style.transform = "translateY(-40px)"
        } else if (window.pageYOffset >= 300 && window.pageYOffset < 400) {
            textSectionOne.style.opacity = "0.25"
            textSectionOne.style.transform = "translateY(-60px)"
        } else if (window.pageYOffset >= 400) {
            textSectionOne.style.opacity = "0"
            textSectionOne.style.transform = "translateY(-80px)"
        } else {
            textSectionOne.style.opacity = "1"
            textSectionOne.style.transform = "translateY(0)"
        }
    })
}

textOpacity()