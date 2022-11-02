// toggle hamburger button
function toggleMenu() {
    document.getElementById("main_nav").classList.toggle("open");
    document.getElementById("ham_btn").classList.toggle("open");
}

// add event to toggle 
document.getElementById("ham_btn").onclick = toggleMenu;
