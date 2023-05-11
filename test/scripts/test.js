function toggleMenu() {
    document.getElementById("navigation").classList.toggle("open");
    console.log('it works!');
}

const x = document.getElementById("hamButton")
x.onclick = toggleMenu;