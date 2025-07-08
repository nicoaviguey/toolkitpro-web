// =============================
// Proyecto: ToolKitPRO - by nicoaviguey💖
// Autor: Nicole Avendaño
// Fecha: Julio 2025
// Descripción: Conjunto de herramientas básicas desarrolladas con HTML, CSS y JavaScript.
// =============================

const toggleBtn = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

// Abrir el sidebar
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

// Cerrar al hacer clic fuera del sidebar
document.addEventListener('click', (e) => {
  if (sidebar.classList.contains('active') &&
      !sidebar.contains(e.target) &&
      !toggleBtn.contains(e.target)) {
    cerrarSidebar();
  }
});

function cerrarSidebar() {
  sidebar.classList.remove('active');
  const herramientasDetails = document.querySelector('.sidebar details');
  if (herramientasDetails) {
    herramientasDetails.removeAttribute('open');
  }
}