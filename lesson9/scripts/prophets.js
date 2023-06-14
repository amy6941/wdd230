const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards');

    prophets.forEach((prophet) => {
        //Create elements to add to the div.cards element
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        //build the h2 content out to show the prophets full name - finish the template string
        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        h3.textContent = `Birthdate: ${prophet.birthdate}`;
        p.textContent = `Birth place: ${prophet.birthplace}`;

        //build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        //append the section(card) with the createds elements
        card.appendChild(h2);
        card.appendChild(h3);
        card.appendChild(p);
        card.appendChild(portrait);
        cards.appendChild(card);
        
    }) //end of forEach loop
        
} // end of function