const openBtn = document.getElementById("open-btn");
const sidebar = document.getElementById("sidebar");
const mainLayover = document.getElementById("main-layover");
const navbar = document.getElementById("navbar");
const textSectionOne = document.getElementById("text-section-one");
const cardBorderWrap = document.querySelectorAll('.card_border-wrap');
const cardHiddenText = document.querySelectorAll('.hidden-text');



// * Mobile Sidebar Show/Hide
openBtn.addEventListener("click", function () {
  sidebar.classList.remove("-translate-x-full");
  mainLayover.classList.remove("hidden");
});

mainLayover.addEventListener("click", function () {
  sidebar.classList.add("-translate-x-full");
  mainLayover.classList.add("hidden");
});

// * Hide Desktop Navigation Bar
function hideNav() {
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add("hide-nav");
    } else {
      navbar.classList.remove("hide-nav");
    }
  });
}
hideNav();

// * Text Scroll & Opacity Animation
function textOpacity() {
  document.addEventListener("scroll", function () {
    if (window.pageYOffset >= 100 && window.pageYOffset < 200) {
      textSectionOne.style.opacity = "0.75";
      textSectionOne.style.transform = "translateY(-20px)";
    } else if (window.pageYOffset >= 200 && window.pageYOffset < 300) {
      textSectionOne.style.opacity = "0.5";
      textSectionOne.style.transform = "translateY(-40px)";
    } else if (window.pageYOffset >= 300 && window.pageYOffset < 400) {
      textSectionOne.style.opacity = "0.25";
      textSectionOne.style.transform = "translateY(-60px)";
    } else if (window.pageYOffset >= 400) {
      textSectionOne.style.opacity = "0";
      textSectionOne.style.transform = "translateY(-80px)";
    } else {
      textSectionOne.style.opacity = "1";
      textSectionOne.style.transform = "translateY(0)";
    }
  });
}

textOpacity();

// * Card Hover Animation
// function cardEnter() {
//   for (let i = 0; i < cardBorderWrap.length; i++) {
//     cardBorderWrap[i].addEventListener("mouseenter", function () {
//       cardHiddenText[i].classList.remove('card_hide-text', 'opacity-0')
//       cardHiddenText[i].classList.add('card_show-text', 'opacity-1')
//     });
//   }


// }

// cardEnter();

// function cardExit() {
//   for (let i = 0; i < cardBorderWrap.length; i++) {
//     cardBorderWrap[i].addEventListener("mouseleave", function () {
//       cardHiddenText[i].classList.remove('card_show-text', 'opacity-1')
//       cardHiddenText[i].classList.add('card_hide-text', 'opacity-0')
//     });
//   }


// }

// cardExit();

// * Card Mobile Animation
function cardClickIn() {
  for (let i = 0; i < cardBorderWrap.length; i++) {
    cardBorderWrap[i].addEventListener('click', function () {

      if (cardHiddenText[i].classList.contains('card_hide-text')) {
        cardHiddenText[i].classList.remove('card_hide-text', 'opacity-0')
        cardHiddenText[i].classList.add('card_show-text', 'opacity-1')
      } else {
        cardHiddenText[i].classList.remove('card_show-text', 'opacity-1')
        cardHiddenText[i].classList.add('card_hide-text', 'opacity-0')
      }


    })
  }
}

cardClickIn()