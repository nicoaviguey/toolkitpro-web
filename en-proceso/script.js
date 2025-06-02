// Funcionamiento
const toggleBtn = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

const themeToggleBtn = document.getElementById('theme-toggle');
const iconMoon = document.getElementById('icon-moon');
const iconSun = document.getElementById('icon-sun');

// Para abrir el sidebar
toggleBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  sidebar.classList.toggle('active');
});

// Cerrar el sidebar
const closeBtn = document.getElementById('close-btn');

closeBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  sidebar.classList.remove('active');
});

document.addEventListener('click', (e) => {
  // Si el sidebar está abierto
  if (sidebar.classList.contains('active')) {
    // Y el clic NO fue dentro del sidebar ni en el botón del toggle
    if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
      sidebar.classList.remove('active');
    }
  }
});

// Modo claro o oscuro
themeToggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('light-theme');

  // Alternar iconos
  const lightModeOn = document.documentElement.classList.contains('light-theme');
  iconMoon.style.display = lightModeOn ? 'none' : 'inline';
  iconSun.style.display = lightModeOn ? 'inline' : 'none';

  // Opcional: guardar preferencia en localStorage
  localStorage.setItem('theme', lightModeOn ? 'light' : 'dark');
});

// Al cargar la página, restaurar preferencia guardada
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.documentElement.classList.add('light-theme');
    iconMoon.style.display = 'none';
    iconSun.style.display = 'inline';
  }
});