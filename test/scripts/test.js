function toggleMenu() {
    document.getElementById("navigation").classList.toggle("open");
    console.log('it works!');
}

const x = document.getElementById("hamButton")
x.onclick = toggleMenu;



const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getfruitstData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.fruits);
    displayFruits(data.fruits);
}

getFruitData();

const displayFruits = (fruits) => {
    const cards = document.querySelector('div.cards');

    fruits.forEach((fruit) => {
        //Create elements to add to the div.cards element
        let card = document.querySelector('section');
        let opt = document.querySelector('option');
       

        //build the h2 content out to show the prophets full name - finish the template string
        opt.innerHTML = `${fruit.name}`; 
    

        //append the section(card) with the createds elements
        card.appendChild(h2);
        cards.appendChild(card);

    }) //end of forEach loop
        
} // end of function