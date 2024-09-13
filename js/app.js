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

// Define Global Variables
const navbarLists = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

// End Global Variables

// Start Helper Functions
function makeActive() {
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    //Find a value that works best, but 150 seems to be a good start.
    if (box.top <= VALUE && box.bottom >= VALUE) {
      //apply active state on current section and corresponding Nav link
    } else {
      //Remove active state from other section and corresponding Nav link
    }
  }
}

// End Helper Functions

// Begin Main Functions

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

// End Main Functions

// Begin Events
// Build menu

// Scroll to section on link click

// Set sections as active
