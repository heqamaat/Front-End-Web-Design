// Student Name: Drea Cologgi
// File Name: script.js
// Date: April 10, 2023



//Hamburger Menu Function
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "block";
    }
}
