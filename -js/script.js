
const btnMenu = document.getElementById("btn-menu");
const btnCloseMenu = document.getElementById("btn-close-menu");
const menuContainer = document.getElementById("menu-container");
const menu = document.getElementById("menu");


btnMenu.addEventListener("click", function () {
    menuContainer.style.width = "100%";
    menu.classList.add("menu-content-opened");
    document.body.style.overflow = "hidden";
});


btnCloseMenu.addEventListener("click", function () {
    menuContainer.style.width = "0";
    menu.classList.remove("menu-content-opened");
    document.body.style.overflow = "auto";
});
