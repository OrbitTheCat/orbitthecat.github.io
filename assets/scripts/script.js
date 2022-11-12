// HAMBURGER //
const navToggle = document.getElementById("hamburger-btn");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
    const visibility = navToggle.getAttribute("data-active");


    if (visibility === "false") {
        navToggle.setAttribute("data-active", true)
        nav.setAttribute("data-active", true)

    } else if (visibility === "true") {
        navToggle.setAttribute("data-active", false)
        nav.setAttribute("data-active", false)
    }
}) 

const hidden = document.querySelectorAll('.wrap');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

hidden.forEach((el) => observer.observe(el));