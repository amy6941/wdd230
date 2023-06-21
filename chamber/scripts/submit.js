
date = new Date().getFullYear();
document.querySelector("#subdate").innerHTML = date

let date3 = document.querySelector(".date3");

try {
	const options = {
		weekday: "short",
		day: "numeric",
		month: "short",
		year: "numeric"
	};
	date3.innerHTML = `<span class="highlight">${new Date().toLocaleDateString("en-UK", options)}</span>`;
} catch (e) {
	console.log("Error");
}
console.log(date3);