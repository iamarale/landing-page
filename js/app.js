// DOM el's
const navbarLists = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

// empty li to be filled later
let li = [];

// helper
const getPosition = function (el) {
  return el.getBoundingClientRect();
};

// creates navbar links
for (let i = 1; i < sections.length + 1; i++) {
  // creates li with class and dataset
  const createLi = document.createElement("li");
  createLi.innerHTML = `Section ${i}`;
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
    if (box.top <= 150 && box.bottom >= 150) {
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
  // adds click event to all list items
  el.addEventListener("click", function () {});
});

// toggles active class between navs
function navToggleActive(el) {
  // adds active class to clicked li
  if (!el.classList.contains("active")) {
    // removes class on all li's
    li.map((i) => i.classList.remove("active"));
    // adds class to el item
    el.classList.add("active");
  }
}

li.map((el, i) => {
  // adds click event to all list items
  el.addEventListener("click", function () {
    // gets section index and scrolls it into view

    if (sections[i].dataset.nav === el.dataset.nav) {
      //  Scroll to section on link click
      sections[i].scrollIntoView({
        top: sections[i].getBoundingClientRect().top,
        behavior: "smooth",
      });
    }
  });
});

// runs makeActive when page is scrolled
document.addEventListener("scroll", function () {
  makeActive();
  for (const section of sections) {
    // checks if top value is between 0-150
    if (getPosition(section).top < 150 && getPosition(section).top > 0) {
      li.forEach((el) => {
        // checks if li and section have the same data-nav value
        if (el.dataset.nav === section.dataset.nav) {
          navToggleActive(el);
        }
      });
      // console.log(`: ${getPosition(section).top} ${window.innerHeight}`);
    }
  }
});
