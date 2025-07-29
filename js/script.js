// Mobile menu toggle
const toggleBtn = document.querySelector('.menu-toggle');
const navList   = document.querySelector('.nav-list');
toggleBtn.addEventListener('click', () => {
  navList.classList.toggle('open');
});
