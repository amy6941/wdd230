

const url = 'https://amy6941.github.io/wdd230/chamber/json/data.json';


if (url == 'https://amy6941.github.io/wdd230/chamber/json/data.json') {
  const requestURL = 'https://amy6941.github.io/wdd230/chamber/json/data.json';

  fetch(requestURL)
    .then(function (response) {
      
      return response.json();
    })
    .then(function (jsonObject) {
      console.log(jsonObject);
      const members = jsonObject['members'];
      spotmember = members.filter(member => member.membership === 'gold');
    //   || (member => member.membership === 'silver');
      updateSpotlight(spotmember);
    })
}

function updateSpotlight(members) {
  const cards = document.querySelector('.spots');
  // console.log(cards);

  shuffleArray(members)
  console.log(members);
  memberIndex = 0

  for(i = 0; i < 3; i++) {
        //Create elements to add to the div.cards element
        let card = document.createElement('section');
        card.className += `spot${i}`;
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let membership = document.createElement('p');
        let address = document.createElement('p');
        let phone = document.createElement('tel');
        let website = document.createElement('a');
        let description = document.createElement('p');
 
        //build the card content out
        h2.textContent = `${members[i].name}`;
        address.textContent = `${members[i].address}`;
        phone.textContent = `${members[i].phone}`;
        website.textContent = `${members[i].website}`;
        description.textContent = `${members[i].description}`;
        membership.textContent = `${members[i].membership}`;
    
        //build the image portrait by setting all the relevant attributes
        portrait.setAttribute('href', members[i].website);
        portrait.setAttribute('src', members[i].imageurl);
        portrait.setAttribute('alt', `${members[i].name} logo`);
        portrait.setAttribute('loading', 'lazy');    
        website.setAttribute('href', members[i].website);
        
        //append the section(card) with the created elements
           
        card.appendChild(h2);
        card.appendChild(website);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(portrait);
        console.log(card);
        cards.appendChild(card);

        // memberIndex ++;
    }       
}
function shuffleArray(arr) {
    arr = arr.sort(() => Math.random() - 0.5);
    // arr = arr.sort();
    console.log(arr);
    // return arr;
}