// highlight current menu item
const mainNav = document.getElementById("main_nav");
const mainNavChildren = mainNav.children;

for (let i = 0; i < mainNavChildren.length; i++) {
    if (mainNavChildren[i].children[0].href.split("/").slice(-1)[0] == URL) {
        mainNavChildren[i].children[0].classList.add('current-menu');
    }

}

// lazy loading images
const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    } else {
        img.src = src;
        img.removeAttribute("data-src");
    }
}

const loadImage = image => {
    image.classList.add('fade-in');
    image.src = image.dataset.src;
    image.srcset = image.dataset.srcset;
  }

const imgOptions = {
	root: document.querySelector('#scrollArea'),
	rootMargin: '10px',
	threshold: 1.0
};

const imgObserver = new IntersectionObserver((entries, 
    imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
})
// add cards and read json for directory page
if (URL == 'directory.html') {

    const requestURL = 'scripts/data.json';
    const cards = window.document.querySelector('.cards');
    
    
    fetch(requestURL)

        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            const members = jsonObject['data'];
            members.forEach(displayMembers);
        });

        gridButton = document.getElementById("grid");
        listButton = document.getElementById("list");
        display = document.getElementById("member-data")

        gridButton.addEventListener("click", () => {
            display.classList.add("member-grid");
            display.classList.remove("member-list");
        });

        listButton.addEventListener("click", () => {
            display.classList.remove("member-grid");
            display.classList.add("member-list");
        });
}

function displayMembers(member) {
    let card = document.createElement('section');
    let memberName = document.createElement('h2');
    let memberLogo = document.createElement('img');
    let memberAddress = document.createElement('p');
    let memberPhone = document.createElement('a');
    let memberURL = document.createElement('a');
    let memberEmail = document.createElement('a');


    // Change the textContent property of the h2 element to contain the prophet's full name
    memberName.textContent = member.name;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    memberLogo.setAttribute('src', member.image_url);
    memberLogo.setAttribute('alt', `logo for ${memberName}`);
    memberLogo.width = 100;
    memberLogo.height = 100;
    if (member.index > 3) {
        memberLogo.setAttribute('loading', 'lazy');
    }

    memberAddress.innerHTML = member.address1;
    memberAddress.classList.add('member-address')

    memberPhone.innerHTML = `${member.phone}`;
    memberPhone.href = `tel:${member.phone}`

    memberURL.textContent = 'Visit website';
    memberURL.href = member.url;

    memberEmail.href = `mailto:${member.email}`;
    memberEmail.textContent = member.email;
    memberEmail.classList.add('member-email')

    // Add/append the section(card) with the h2 element
    card.appendChild(memberName);
    card.appendChild(memberLogo);
    card.appendChild(memberAddress);
    card.appendChild(memberPhone);
    card.appendChild(memberURL);
    card.appendChild(memberEmail);
    
    // Add/append the existing HTML div with the cards class with the section(card)
    card.classList.add('member-detail-grid')
    document.querySelector('div.cards').appendChild(card);

}