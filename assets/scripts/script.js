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

document.addEventListener("mousemove", parallax);
function parallax(e) {
    document.querySelectorAll(".o-top, .o-bot, .r-i, .r-o, .r-r").forEach(function(move) {
        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 500;
        var y = (e.clientY * moving_value) / 500;

        move.style.transform = "translateX(" + x +"px) translateY(" + y +"px)"
    })
}
