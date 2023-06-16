

const url = 'https://amy6941.github.io/wdd230/chamber/json/data.json';

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayMembers(data.members);
}

getMemberData();

const displayMembers = (members) => {
    const cards = document.querySelector('div.cards');

    members.forEach((member) => {
        //Create elements to add to the div.cards element
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let membership = document.createElement('p');
        let address = document.createElement('p');
        let phone = document.createElement('tel');
        let website = document.createElement('url');
        let description = document.createElement('p');

        

        //build the card content out
        h2.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        website.textContent = `${member.website}`;
        description.textContent = `${member.description}`;
        

        //build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', member.imageurl);
        portrait.setAttribute('alt', `${member.name} logo`);
        portrait.setAttribute('loading', 'lazy');

        //append the section(card) with the createds elements
        card.appendChild(h2);
        card.appendChild(description);
        card.appendChild(portrait);
        card.appendChild(website);
        card.appendChild(address);
        card.appendChild(phone);
       

        cards.appendChild(card);

    }) //end of forEach loop
        
} // end of function