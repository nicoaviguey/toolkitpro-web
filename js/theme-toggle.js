const themeToggleBtn = document.getElementById('theme-toggle');
const iconMoon = document.getElementById('icon-moon');
const iconSun = document.getElementById('icon-sun');

// ------------------- TEMA CLARO / OSCURO -------------------
themeToggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('light-theme');
  const lightModeOn = document.documentElement.classList.contains('light-theme');
  iconMoon.style.display = lightModeOn ? 'none' : 'inline';
  iconSun.style.display = lightModeOn ? 'inline' : 'none';
  localStorage.setItem('theme', lightModeOn ? 'light' : 'dark');
});

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.remove('light-theme');
    iconMoon.style.display = 'inline';
    iconSun.style.display = 'none';
  } else {
    document.documentElement.classList.add('light-theme');
    iconMoon.style.display = 'none';
    iconSun.style.display = 'inline';
  }
});