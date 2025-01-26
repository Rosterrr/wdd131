// Update footer with dynamic data
document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.getElementById('year');
    const lastModifiedElement = document.getElementById('lastModified');
  
    yearElement.textContent = new Date().getFullYear();
    lastModifiedElement.textContent = document.lastModified;
  });
  
  // Hamburger Menu Functionality
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');
  
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('visible');
    hamburger.textContent = navMenu.classList.contains('visible') ? 'X' : '☰'; // Toggle symbol
  });
  