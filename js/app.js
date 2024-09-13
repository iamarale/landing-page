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

/* Define Global Variables */

// DOM el's
const navbarLists = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

// empty li to be filled later
let li = [];

/* End Global Variables */

/* Start Helper Functions */

/* 
    End Helper Functions
*/

/* 
    Begin Main Functions 
*/

/* build the nav */

// creates navbar links
for (let i = 1; i < sections.length + 1; i++) {
  // creates li with class "nav-li"
  const createLi = document.createElement("li");
  createLi.textContent = `Section ${i}`;
  createLi.classList.add("nav__li");

  // adds to navbar ul
  navbarLists.appendChild(createLi);
}

/* Add class 'active' to section when near top of viewport */
function makeActive() {
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    //Find a value that works best, but 150 seems to be a good start.
    if (box.top <= 0 && box.bottom >= 200) {
      //apply active state on current section and corresponding Nav link
      console.log(section);
      section.classList.add("active");
    } else {
      //Remove active state from other section and corresponding Nav link
      section.classList.remove("active");
    }
  }
}

document.addEventListener("scroll", function () {
  makeActive();
});

/* 
    Scroll to anchor ID using scrollTO event 
*/

/* 
    End Main Functions 
*/

/* 
    Begin Events 
*/

/* 
    Build menu 
*/

/* 
    Scroll to section on link click 
*/

/* 
    Set sections as active
*/
