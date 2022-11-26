const requestURL = 
  "https://https://raw.githubusercontent.com/amy6941/wdd230/main/chamber/scripts/data.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const members = jsonObject["members"];
    for (let i = 0; i < member.length; i++) {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let address = document.createElement("p");
      let phone = document.createElement("p");
      let image = document.createElement("img");
      let website = document.createElement("a");
      h2.textContent = `${member[i].name}`;
      phone.textContent = `${member[i].phone}`;
      address.textContent = `${member[i].address}`;
      website.innerHTML = `${member[i].website}`;
      image.setAttribute("src", `${member[i].imageurl}`);
      image.setAttribute("alt", `Icon for ${member[i].name}`);
      image.setAttribute("loading", "lazy");
      website.setAttribute("href", `${member[i].website}`);
      card.appendChild(image);
      card.appendChild(h2);
      card.appendChild(phone);
      card.appendChild(address);
      card.appendChild(website);
      document.querySelector("div.cards").appendChild(card);
    }
  });

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const cards = document.querySelector(".cards");
gridbutton.addEventListener("click", () => {
  cards.classList.add(".cards");
  cards.classList.remove("list");
});
listbutton.addEventListener("click", () => {
  cards.classList.add("list");
  cards.classList.remove(".cards");
});