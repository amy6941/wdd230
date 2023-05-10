//const mainnav = document.querySelector('.navigation')
//const hambutton = document.querySelector('#menu');
//hambutton.addEventListener('click', () => {
//	mainnav.classList.toggle('show');
//	hambutton.classList.toggle('show');


function toggleMenu () {
    document.getElementById('primaryNav').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;