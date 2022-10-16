date = new Date().getFullYear();
document.querySelector("#year").innerHTML = date
document.querySelector("#timestamp").innerHTML= document.lastModified;

// toggle hamburger button
function toggleMenu() {
    document.getElementById("main_nav").classList.toggle("open");
    document.getElementById("ham_btn").classList.toggle("open");
}
// add event to toggle 
document.getElementById("ham_btn").onclick = toggleMenu;


// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;