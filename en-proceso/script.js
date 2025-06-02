// Funcionamiento
const toggleBtn = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

// Para abrir el sidebar
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

const closeBtn = document.getElementById('close-btn');

closeBtn.addEventListener('click', () => {
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
