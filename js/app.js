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

/* Helper Functions */

/* Main Functions */

/* build the nav */
// creates navbar links
for (let i = 1; i < sections.length + 1; i++) {
  // creates li with class "nav-li"
  const createLi = document.createElement("li");
  createLi.textContent = `Section ${i}`;
  createLi.classList.add("nav__li");
  createLi.dataset.nav = `Section ${i}`;

  // adds links to li
  li.push(createLi);

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
      section.classList.add("active");
    } else {
      //Remove active state from other section and corresponding Nav link
      section.classList.remove("active");
    }
  }
}

/* Scroll to anchor ID using scrollTO event */
li.map((el, i) => {
  el.addEventListener("click", function (e) {
    console.log(i + 1);
    if (
      sections[i].dataset.nav === `Section ${i + 1}` &&
      el.dataset.nav === `Section ${i + 1}`
    ) {
      sections[i].scrollTo(150, 20);
    }
  });
});

/* Begin Events */
document.addEventListener("scroll", function () {
  makeActive();
  getPosition(sections[4]);
});
/* Build menu */

/* Scroll to section on link click */
const getPosition = function (pos) {
  const position = pos.getBoundingClientRect();
  console.log();
};
/* 
    Set sections as active
*/
