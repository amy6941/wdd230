// highlight current menu item
const mainNav = document.getElementById("main_nav");
const mainNavChildren = mainNav.children;

for (let i = 0; i < mainNavChildren.length; i++) {
    if (mainNavChildren[i].children[0].href.split("/").slice(-1)[0] == URL) {
        mainNavChildren[i].children[0].classList.add('current-menu');
    }

}

// lazy loading images
const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    } else {
        img.src = src;
        img.removeAttribute("data-src");
    }
}

const loadImage = image => {
    image.classList.add('fade-in');
    image.src = image.dataset.src;
    image.srcset = image.dataset.srcset;
  }

const imgOptions = {
	root: document.querySelector('#scrollArea'),
	rootMargin: '10px',
	threshold: 1.0
};

const imgObserver = new IntersectionObserver((entries, 
    imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
})
// add cards and read json for directory page
const cards = document.querySelector(".cards");

const fetchJSON = async () => {
    const jsonURL = "json/data.json";
    const req = new Request(jsonURL);
    const res = await fetch(req);
    const jsonObject = await res.json();
    const members = jsonObject["members"];

    members.forEach(displayCards);
};

fetchJSON();

const displayCards = (cardObj) => {
  let card = document.createElement("section");
  let name = document.createElement("h2");
  let category = document.createElement("h3");
  let addr = document.createElement("p");
  let phone = document.createElement("p");
  let url = document.createElement("a");
  let member = document.createElement("p");
  let logo = document.createElement("img");

  logo.setAttribute("src", cardObj.logo);
  logo.setAttribute("alt", `Logo image for ${cardObj.name}.`);
  logo.setAttribute("width", 160)
  logo.setAttribute("loading", "lazy");

  name.textContent = `${cardObj.name}`;
  name.className = "dir-name";

  category.textContent = `${cardObj.category}`;
  category.className = "dir-category";

  url.textContent = `${cardObj.url}`;
  url.className = "dir-url";
  url.href = `${cardObj.url}`;
  url.target = "_blank";
  url.rel = "noopener noreferrer";

  addr.textContent = `${cardObj.address}`;
  addr.className = "dir-addr";

  phone.textContent = `Phone: ${cardObj.phone}`;
  phone.className = "dir-phone";

  member.textContent = `${cardObj.member} member`;
  member.className = `dir-member ${cardObj.member.toLowerCase()}`;

  card.appendChild(name);
  card.appendChild(logo);
  card.appendChild(category);
  card.appendChild(url);
  card.appendChild(addr);
  card.appendChild(phone);
  card.appendChild(member);

  document.querySelector(".cards").appendChild(card);
};
