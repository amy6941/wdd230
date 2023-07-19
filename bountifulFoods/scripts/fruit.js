const url = 'json/data.json';
// const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';


const fruit1 = document.getElementById('fruit1');
const fruit2 = document.getElementById('fruit2');
const fruit3 = document.getElementById('fruit3');
const opt = document.querySelector('option');

let name = '';



async function getData() {
    const response = await fetch(url);
    const data = await response.json();
        console.log(data);
    }; 

getData();

const dbParam = JSON.stringify({table:"customers",limit:20});
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText)
  let text = "<select>"
  for (let x in myObj) {
    text += "<option>" + myObj[x].name + "</option>";
  }
  text += "</select>"
  document.getElementById("fruit").innerHTML = text;
}
xmlhttp.open("POST", "json/data.json");
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send("x=" + dbParam);





// const mainUL = document.createElement('ul');

// for(let i = 0; i < data.result.length; i++) {
//     const fruitLI = document.createElement('li');
//     fruitLI.innerHTML = data.result[i].name;
// }
// mainUL.appendChild(fruitLI);
// let tr = '';
// for(let i = 0; i < data.result.length; i++) {
//     tr += '<tr>';
//     tr += `<td>${data.result[i].name}</td>`;
//     tr += '</tr>';

// }



// function loadfruit(fruit) {
//     let newfruit1 = document.createElement('option');
//     let newfruit2 = document.createElement('option');   
//     let newfruit3 = document.createElement('option');
    
//     newfruit1.innerText = fruit.name;
//     newfruit2.innerText = fruit.name;
//     newfruit3.innerText = fruit.name;

//     fruit1.appendChild(newfruit1);
//     fruit2.appendChild(newfruit2);
//     fruit3.appendChild(newfruit3);

// }
// loadfruit();

function showOrder (fruit) {
    let fruit1 = document.querySelector('.order-fruit1');
    let fruit2 = document.querySelector('.order-fruit2');
    let fruit3 = document.querySelector('.order-fruit3');

    let now = document.querySelector('.order-date');

    let carbs = document.querySelector('.order-carbohydrates');
    let protein = document.querySelector('.order-protein');
    let fats = document.querySelector('.order-fats');
    let cals = document.querySelector('.order-calories');
    let sugar = document.querySelector('.order-sugar');

    let cust = document.querySelector('.order-name');
    let tele = document.querySelector('.order-phone'); 
    let email = document.querySelector('.order-email');

  if (fruit1 != "") {
    
  }

}