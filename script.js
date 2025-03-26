document.getElementById("hamburger").addEventListener("click", function() {
    let navLinks = document.getElementById("nav-links");
    let menuIcon = document.querySelector(".menu-icon");
    let closeIcon = document.querySelector(".close-icon");
    
    navLinks.classList.toggle("active");
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
});