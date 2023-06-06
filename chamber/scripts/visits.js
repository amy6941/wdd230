var visits = localStorage.getItem("visits-Hlfma");

if(visits == null) {
    visits = 0;
} else {
    visits = parseInt(visits, 10);
}

visits++;

localStorage.setItem("visits-Hlfma", (visits).toString(10))
document.getElementById("visitNum").textContent = visits.toString(10);