//const url = 'https://amy6941.github.io/wdd230/bountifulfoods/scripts/fruitdata.json'

const url = 'fruitdata.json'

const fruit1 = document.getElementById("#fruit1");
const fruit2 = document.getElementById('fruit2');
const fruit3 = document.getElementById('fruit3');

const fruit = 1;
const carbs = 2;
const protein = 3;
const fat = 4;
const calories = 5;
const sugar = 6;

let fruits = null;

fetch(url)
.then(function  (response) {
    return response.json();
})
.then(function(jsonObject) {
    fruits = jsonObject;
    fruits.forEach(loadfruitdata);
});

function loadfruitdata(fruit) {
    let newfruit1 = document.createElement('option');
    let newfruit2 = document.createElement('option');   
    let newfruit3 = document.createElement('option');
    newfruit1.textContent = fruit.name;
    newfruit2.textContent = fruit.name;
    newfruit3.textContent = fruit.name;

}

