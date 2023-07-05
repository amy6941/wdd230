// card.classList.add('spots')
// document.querySelector('div.cards').appendChild(card);

// if (url == 'index.html') {
//   const requestURL = 'https://amy6941.github.io/wdd230/chamber/json/data.json';

//   fetch(requestURL)
//     .then(funstion (response) {
//       return response.json();
//     })
//     .then(funstion (jsonObject) {
//       const members = jsonObject['data'];
//       spotmember = members.filter(member => member.membership === 'gold'|| member => member.membership === 'silver');
//       updateSpotlight(spotmember);
//     })
// }

// function updateSpotlight(members) {
//   const cards = documnets.querySelectorAll(spots);

//   shuffleArray(members)
//   memberIndex = 0

//   for(i = 0; i < cards.length; i++) {
    
//   }
// }

const url = 'https://amy6941.github.io/wdd230/chamber/json/data.json';

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayMembers(data.members);
}

getMemberData();

card.classList.add('.cards');
document.querySelector('div#cards ').appendChild(card);

if (url == 'index.html') {
  const requestURL = 'https://amy6941.github.io/wdd230/chamber/json/data.json';

  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      const members = jsonObject['data'];
      spotmember = members.filter(member => member.membership === 'gold');
    //   || (member => member.membership === 'silver');
      updateSpotlight(spotmember);
    })
}

function updateSpotlight(members) {
  const cards = document.querySelectorAll(spots);

  shuffleArray(members)
  memberIndex = 0

  for(i = 0; i < cards.length; i++) {
        //Create elements to add to the div.cards element
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let membership = document.createElement('p');
        let address = document.createElement('p');
        let phone = document.createElement('tel');
        let website = document.createElement('a');
        let description = document.createElement('p');
 
        //build the card content out
        h2.textContent = `${members[memberIndex].name}`;
        address.textContent = `${members[memberIndex].address}`;
        phone.textContent = `${members[memberIndex].phone}`;
        website.textContent = `${members[memberIndex].website}`;
        description.textContent = `${members[memberIndex].description}`;
        membership.textContent = `${members[memberIndex].membership}`;
    
        //build the image portrait by setting all the relevant attributes
        portrait.setAttribute('href', member.website);
        portrait.setAttribute('src', member.imageurl);
        portrait.setAttribute('alt', `${member.name} logo`);
        portrait.setAttribute('loading', 'lazy');    
        website.setAttribute('href', member.website);
        
        //append the section(card) with the created elements
           
        card.appendChild(h2);
        card.appendChild(website);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(portrait);
        
        cards.appendChild(card);

        memberIndex ++;
    }       
}
function shuffleArray(arr) {
    arr.sort(() => Math.floor(Math.random));
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("div#cards");


gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
	display.classList.add("list");
	display.classList.remove("grid");
});
