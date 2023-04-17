// Student Name: Drea Cologgi
// File Name: script.js
// Current Date: April 10, 2023

//this verion controls variable scope and handles events within script file

window.onload = function() {

    //Calls function when button is clicked
    var btn=document.querySelector("button");
    btn.addEventListener("click", content);

    // Function to display content
    function content() {
        var text = document.getElementById("new");
        text.textContent = "Hi. I am a new paragraph that was created with a JavaScript function.";
        text.style.color = "#c0145f";
        text.style.fontSize = "2em";
    }

}