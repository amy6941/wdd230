localStorage.setItem('lastVisit', JSON.stringify(new Date()));

displayDaysSinceLastVisit();

function displayDaysSinceLastVisit() {
    const visitsDisplay = document.querySelector('.displayDaysSinceLastVisit');

    const lastVisit = localStorage.getItem('lastVisit');

    if (!lastVisit) {
        visitsDisplay.innerText = 'This is your first visit.';
        return;
    }

    const lastVisitDate = Date.parse('lastVisit');

    if (!lastVisitDate) {
        return;
    }

    const currentDate = new Date();

    const difference = currentDate - lastVisitDate;
    const differenceInDays = Math.floor(difference / (1000 * 60 * 60 * 24));

    visitsDisplay.innerText = differenceInDays;
}






// const visitsDisplay = document.querySelector('.timeBetween');

// let numVisits = Number(window.localStorage.getItem('timeBetween'));

// const visitDifference = "pastvisit" - Date.now();

// localStorage.setItem('timeBetween', visitDifference);

// if(localStorage.getItem('lastVisit')==null) {
//     localStorage.setItem(new Date())
// }
// else {
//     const lastVisit = localStorage.getItem('lastVisit')
//     localStorage.setItem(new Date())
// }

// let time = localStorage.getItem('lastVisit');
// let lastVisit = JSON.parse(time);
// let now = new Date();
// let diffDays = now.getDate() - lastVisit.getDate();
// const visitDisplay.innerText = diffDays + " days";