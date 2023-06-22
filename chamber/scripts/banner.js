const today = new Date().getDay();
const banner = document.getElementById("meeting");

if (today === 0 || today === 1) {
    banner.style.display = "block";
} else {
    banner.style.display = "none";
}