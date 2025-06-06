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
  cerrarSidebar();
});

document.addEventListener('click', (e) => {
  // Si el sidebar está abierto
  if (sidebar.classList.contains('active')) {
    // Y el clic NO fue dentro del sidebar ni en el botón del toggle
    if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
      cerrarSidebar();
    }
  }
});

// Cerrar también el submenú al cerrar el sidebar
const herramientasDetails = document.querySelector('.sidebar details');

function cerrarSidebar() {
  sidebar.classList.remove('active');
  const herramientasDetails = document.querySelector('.sidebar details');
  if (herramientasDetails) {
    herramientasDetails.removeAttribute('open');
  }
}



// Modo claro u oscuro
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

  if (savedTheme === 'dark') {
    document.documentElement.classList.remove('light-theme');
    iconMoon.style.display = 'inline';
    iconSun.style.display = 'none';
  } else{
    // Dejar Tema claro por defecto
    document.documentElement.classList.add('light-theme');
    iconMoon.style.display = 'none';
    iconSun.style.display = 'inline';
  }
});

// Para cambiar el contenido del main
function loadContent(page) {
  fetch(`${page}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById('main-content').innerHTML = html;
      sidebar.classList.remove('active');

      // Verificar si se ha cargado la página de símbolos
      if (page === 'herramientas/simbolos') {
        const simbolos = document.querySelectorAll('.simbolo');
        simbolos.forEach(simbolo => {
          simbolo.addEventListener('click', () => {
            const texto = simbolo.textContent;
            navigator.clipboard.writeText(texto).then(() => {
              simbolo.classList.add('copiado');
              if (navigator.vibrate) {
                navigator.vibrate(100);
              }
              setTimeout(() => {
                simbolo.classList.remove('copiado');
              }, 1200);
            });
          });
        });
      }
    })
    .catch(err => {
      document.getElementById('main-content').innerHTML = '<p>Error al cargar el contenido.</p>';
      console.error(err);
    });
}
