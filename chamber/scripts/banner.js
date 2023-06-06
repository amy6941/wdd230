const today = new Date().getDay();
const banner = document.getElementById("meeting");

if (today === 1 || today === 2) {
    banner.style.display = "block";
}