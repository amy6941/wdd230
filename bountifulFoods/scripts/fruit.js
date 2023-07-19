const url = 'https://amy6941.github.io/wdd230/bountifulfoods/scripts/data.json'

// const url = 'data.json';

let fruit1 = document.getElementById('fruit1');
let fruit2 = document.getElementById('fruit2');
let fruit3 = document.getElementById('fruit3');



// let fruits = null;

function getData() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.table(data);
    })
}
getData();

function loadfruitdata(fruit) {
    let newfruit1 = document.createElement('option');
    let newfruit2 = document.createElement('option');   
    let newfruit3 = document.createElement('option');
    newfruit1.textContent = fruit.name;
    newfruit2.textContent = fruit.name;
    newfruit3.textContent = fruit.name;

}

// const fruit = 1;
// const carbs = 2;
// const protein = 3;
// const fat = 4;
// const calories = 5;
// const sugar = 6;