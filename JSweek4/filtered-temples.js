const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Added Three More Temples
  {
    templeName: "Salt Lake City Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 104000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },
  {
    templeName: "Hong Kong China",
    location: "Hong Kong, China",
    dedicated: "1996, August, 22",
    area: 25000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28125-main.jpg"
  },
  {
    templeName: "Abu Dhabi United Arab Emirates",
    location: "Abu Dhabi, United Arab Emirates",
    dedicated: "2019, February, 16",
    area: 26300,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/abu-dhabi-united-arab-emirates/400x250/abu-dhabi-temple-2893951-wallpaper.jpg"
  }
];

// Function to generate temple cards
function generateTempleCards(filteredTemples) {
  const templesContainer = document.getElementById('temples-container');
  templesContainer.innerHTML = ""; // Clear previous cards
  
  filteredTemples.forEach(temple => {
    const templeCard = document.createElement('div');
    templeCard.classList.add('temple-card');
    
    templeCard.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;
    
    templesContainer.appendChild(templeCard);
  });
}

// Event Listeners for Navigation Menu
document.getElementById('home').addEventListener('click', () => {
  generateTempleCards(temples);
});

document.getElementById('old').addEventListener('click', () => {
  const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
  generateTempleCards(oldTemples);
});

document.getElementById('new').addEventListener('click', () => {
  const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
  generateTempleCards(newTemples);
});

document.getElementById('large').addEventListener('click', () => {
  const largeTemples = temples.filter(temple => temple.area > 90000);
  generateTempleCards(largeTemples);
});

document.getElementById('small').addEventListener('click', () => {
  const smallTemples = temples.filter(temple => temple.area < 10000);
  generateTempleCards(smallTemples);
});

// Initially display all temples
generateTempleCards(temples);
