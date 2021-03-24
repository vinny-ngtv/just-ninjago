
const btnMenu = document.getElementById("btn-menu");
const btnCloseMenu = document.getElementById("btn-close-menu");
const menuContainer = document.getElementById("menu-container");
const menu = document.getElementById("menu");


btnMenu.addEventListener("click", function () {
    menuContainer.style.width = "100%";
    menu.style.width = "360px";
});


btnCloseMenu.addEventListener("click", function () {
    menuContainer.style.width = "0";
    menu.style.width = "0";
});
