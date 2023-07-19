const url = 'json/data.json';
// const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

async function getfruitData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.fruits);
  displayFruits(data.fruits);
}

getfruitData();


const displayFruits = (fruits) => {
  const cards = document.querySelector('div.cards');

  fruits.forEach((select) => {
      //Create elements to add to the div.cards element
    let card = document.querySelector('.fruit');
    let opt = document.createElement('option');
    

    //build the h2 content out to show the prophets full name - finish the template string
    opt.innerHTML = `${fruit.name}`; 


    //append the section(card) with the createds elements
    card.appendChild(h2);
    cards.appendChild(card);

  }) //end of forEach loop
      
} // end of function










// async function getFruitData() {
//   const response = await fetch(url);
//   const data = await response.json();
//   //console.table(data.fruits);
//   displayfruits(data.fruits);
// }

// getFruitData();

// const fruitLI = document.querySelector('option');

// for(let i = 0; i < data.result; i++) {     
//     fruitLI.innerHTML = data.result[i].name;
// }
// mainUL.appendChild(fruitLI);


// function loadfruit(fruitLi) {
//     let newfruit1 = document.createElement('option');
//     let newfruit2 = document.createElement('option');   
//     let newfruit3 = document.createElement('option');
    
//     newfruit1.innerText = fruit.name[i];
//     newfruit2.innerText = fruit.name[i];
//     newfruit3.innerText = fruit.name[i];

//     fruit1.appendChild(newfruit1);
//     fruit2.appendChild(newfruit2);
//     fruit3.appendChild(newfruit3);

// }
// loadfruit();

// function showOrder (fruit) {
//     let fruit1 = document.querySelector('.order-fruit1');
//     let fruit2 = document.querySelector('.order-fruit2');
//     let fruit3 = document.querySelector('.order-fruit3');

//     let now = document.querySelector('.order-date');

//     let carbs = document.querySelector('.order-carbohydrates');
//     let protein = document.querySelector('.order-protein');
//     let fats = document.querySelector('.order-fats');
//     let cals = document.querySelector('.order-calories');
//     let sugar = document.querySelector('.order-sugar');

//     let cust = document.querySelector('.order-name');
//     let tele = document.querySelector('.order-phone'); 
//     let email = document.querySelector('.order-email');

//   if (fruit1 != "") {
    
//   }

// }