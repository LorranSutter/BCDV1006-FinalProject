var body = document.querySelector("body");
var burgerIcon = document.querySelector("#burger-icon");
var navBar = document.querySelector(".nav-bar");

function dropdownMenu() {
    if (navBar.classList.contains("nav-bar-dropdown")) {
        navBar.classList.remove("nav-bar-dropdown");
    } else {
        navBar.classList.add("nav-bar-dropdown");
    }
}

burgerIcon.addEventListener("click", dropdownMenu);