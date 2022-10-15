// NAV BAR //
const primaryNav = document.getElementById("primNav");
const navToggle = document.getElementById("hamburger");
const bodyToggle = document.getElementById("body");

navToggle.addEventListener("click", () => {
    const visibility = navToggle.getAttribute("data-active");


    if (visibility === "false") {
        navToggle.setAttribute("data-active", true)
        primaryNav.setAttribute("data-active", true)
        bodyToggle.setAttribute("data-active", true)

    } else if (visibility === "true") {
        navToggle.setAttribute("data-active", false)
        primaryNav.setAttribute("data-active", false)
        bodyToggle.setAttribute("data-active", false)
    }
}) 