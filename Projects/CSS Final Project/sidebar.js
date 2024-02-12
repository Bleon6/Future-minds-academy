const menuToggle = document.getElementById("menu-toggle");
const leftSideMenu = document.querySelector(".left-side-menu");

menuToggle.addEventListener("click", () => {
    leftSideMenu.classList.toggle("retract");
});