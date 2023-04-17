/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
let navbar = document.querySelector('#navbar__list');
let sections = document.querySelectorAll('section');
/**
 * End Global Variables
 * Begin Main Functions
 * 
*/
// build the nav
navbar.style.cssText = `
display: flex;
flex-wrap: wrap;
justify-content: space-around;
box-shadow: 0 0 10px white;
`
for(let i = 0; i < sections.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = `section ${i + 1}`;
    active(li, i);
    li.style.cursor = 'pointer'
    li.classList.add('menu__link');
    navbar.appendChild(li);
}
// Add class 'active' to section when near top of viewport
function makeActive() {
    for(let i = 0; i < sections.length; i++) {
        const box = sections[i].getBoundingClientRect()
        if(box.top <= 150 && box.bottom >= 150) {
            sections[i].classList.add('your-active-class');
            navbar.children[i].style.cssText = `
            background-color: black;
            color: white;
            box-shadow: 4px 4px 5px grey;
            `
        } else {
            sections[i].classList.remove('your-active-class');
            navbar.children[i].style.cssText = `
            background-color: none;
            color: none;
            `
        }
    }
}
// I used classic for loop, not for .. of loop, because for .. of loop a little slower:)
/**
 * End Main Functions
 * Begin Events
 * 
*/
// Build menu 
// Scroll to section on link click using scrollIntoView
function active(element, i) {
    element.addEventListener('click', function () {
        sections[i].scrollIntoView({
            behavior: "smooth",
        })
    })
}
// Set sections as active
window.onscroll = function() {
    makeActive()
}