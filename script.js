const menuToggle = document.querySelector("#menu-toggle");
const navbar = document.querySelector("#navbar");

const navLinks = document.querySelectorAll("#navbar a");


menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("active");

    menuToggle.classList.toggle("active");

});


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuToggle.classList.remove("active");

    });

});