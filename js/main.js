/* Navigation */
const TOGGLE = document.querySelector(".toggler");
const NAV_LIST = document.querySelector(".navigation-list");

TOGGLE.addEventListener("click", function() {
    NAV_LIST.classList.toggle("active");
})

/* Statistics / Dashboard */
const DASHBOARD_WRAPPER = document.querySelector(".dashboard-wrapper");
const DASHBOARD_IMG = document.querySelector(".dashboard-img");

const STATS_ICON = document.querySelectorAll(".statistics-icon");

for (let i = 0; i < STATS_ICON.length; i++) {
    STATS_ICON[i].addEventListener("click", function(evt) {
       if(STATS_ICON[i].classList.contains("custom-dashboard")) {
           DASHBOARD_IMG.src = "./img/dashboard-light.jpg";
       } else if (STATS_ICON[i].classList.contains("smart-analytics")) {
            DASHBOARD_IMG.src = "./img/smart-analytics.jpg";
       } else {
            DASHBOARD_IMG.src = "./img/dashboard-dark.jpg";
       }
    });
}
