const burgerMenu = document.getElementById("burger-menu");
const navbarLinks = document.querySelector(".navbar-links");

burgerMenu.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});
