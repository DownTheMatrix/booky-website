/* Initialize function */
function init() {} /* Navigation */
const TOGGLE = document.querySelector(".toggler");
const NAV_LIST = document.querySelector(".navigation-list");

// Toggle the hamburger icons on and off
TOGGLE.addEventListener("click", function() {
  NAV_LIST.classList.toggle("active");
});

/* Statistics / Dashboard */
const DASHBOARD_WRAPPER = document.querySelector(".dashboard-wrapper");
const DASHBOARD_IMG = document.querySelector(".dashboard-img");
const STATS_ICON = document.querySelectorAll(".statistics-icon");

// Iterate over the icons in the statistics section and add a click event to each of them
for (let i = 0; i < STATS_ICON.length; i++) {
  STATS_ICON[i].addEventListener("click", function(evt) {
    if (STATS_ICON[i].classList.contains("app-ui-img")) {
      DASHBOARD_IMG.src = "./img/movie-app-ui.png";
    } else if (STATS_ICON[i].classList.contains("landscape-img")) {
      DASHBOARD_IMG.src = "./img/valley-landscape.png";
    } else {
      DASHBOARD_IMG.src = "./img/watersports-icons.png";
    }
  });
}

// Wait until the DOM is ready
document.addEventListener("DOMContentLoaded", init);
