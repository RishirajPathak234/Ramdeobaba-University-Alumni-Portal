// Placeholder for any future functionality (if needed)
document.addEventListener('DOMContentLoaded', () => {
    console.log('Home page loaded.');
  });
  // script.js

window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const mainContent = document.getElementById('main-content');

  // Add a slight delay for better UX (optional)
  setTimeout(() => {
    preloader.style.display = 'none';
    mainContent.style.display = 'block';
  }, 6000); // 6 second delay
});
