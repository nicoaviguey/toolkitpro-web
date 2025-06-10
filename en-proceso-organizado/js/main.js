// ------------------- CARGA DINÁMICA DE CONTENIDO -------------------
function loadContent(page) {
  fetch(`${page}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById('main-content').innerHTML = html;
      sidebar.classList.remove('active');

      // --- Página de símbolos ---
      if (page === 'herramientas/simbolos') {
        const simbolos = document.querySelectorAll('.simbolo');
        simbolos.forEach(simbolo => {
          simbolo.addEventListener('click', () => {
            const texto = simbolo.textContent;
            navigator.clipboard.writeText(texto).then(() => {
              simbolo.classList.add('copiado');
              if (navigator.vibrate) navigator.vibrate(100);
              setTimeout(() => {
                simbolo.classList.remove('copiado');
              }, 1200);
            });
          });
        });
      }

      // --- Página del conversor ---
      if (page === 'herramientas/conversor') {
        const inputText = document.getElementById('input-text');

        function mostrarVersiones(texto) {
          fuentesDecorativas.forEach(fuente => {
            const decorado = convertirTexto(texto, fuente);
            const em = document.querySelector(`#fuente-${fuente.nombre.replace(/\s+/g, '-')}`); // ID como fuente-Gótico, fuente-Burbuja
            if (em) {
              em.textContent = decorado;
            }
          });
        }

        inputText.addEventListener('input', () => {
          mostrarVersiones(inputText.value);
        });

        mostrarVersiones('');
      }


      // --- Página del contador ---
      if (page === 'herramientas/contador') {
        const textarea = document.getElementById('texto-contador');
        const palabrasEl = document.getElementById('palabras-contador');
        const caracteresEl = document.getElementById('caracteres-contador');
        const espaciosEl = document.getElementById('espacios-contador');

        textarea.addEventListener('input', () => {
          const texto = textarea.value;

          const palabras = texto.trim().split(/\s+/).filter(p => p.length > 0);
          const numPalabras = palabras.length;
          const numCaracteres = texto.length;
          const numEspacios = (texto.match(/ /g) || []).length;

          palabrasEl.textContent = numPalabras;
          caracteresEl.textContent = numCaracteres;
          espaciosEl.textContent = numEspacios;
        });
      }

      // --- Página del Generador de Lorem Ipsum ---
      if (page === 'herramientas/lorem') {
        // Generador de Lorem Ipsum con párrafos largos
        const loremBtn = document.getElementById('generar-lorem');
        const loremCantidad = document.getElementById('lorem-cantidad');
        const loremResultados = document.getElementById('lorem-resultados');

        const loremFrases = [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "Phasellus eu sem vitae est facilisis semper.",
          "Curabitur vitae lorem eget sapien volutpat pulvinar.",
          "Fusce in urna vitae nulla lacinia imperdiet.",
          "Praesent gravida lorem nec urna vehicula, ut dictum sem blandit.",
          "Integer sit amet neque eget sapien commodo tincidunt.",
          "Nam at eros a velit pharetra ultricies.",
          "Etiam ut nisi eu nisi tempor tincidunt.",
          "Aenean quis erat non quam elementum viverra nec eu sapien.",
          "Morbi ac risus a libero vestibulum imperdiet.",
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        ];

        function generarLorem(parrafos = 1) {
          let resultado = '';

          for (let i = 0; i < parrafos; i++) {
            // Generar entre 5 y 8 frases por párrafo
            const numFrases = Math.floor(Math.random() * 4) + 5;
            const frases = [];

            for (let j = 0; j < numFrases; j++) {
              const frase = loremFrases[Math.floor(Math.random() * loremFrases.length)];
              frases.push(frase);
            }

            const parrafo = frases.join(' ');
            resultado += `<p>${parrafo}</p>`;
          }

          return resultado;
        }

        if (loremBtn) {
          loremBtn.addEventListener('click', () => {
            const cantidad = parseInt(loremCantidad.value) || 1;
            const parrafos = generarLorem(cantidad);
            loremResultados.innerHTML = parrafos;
          });
        }
      }



    })
    .catch(err => {
      document.getElementById('main-content').innerHTML = '<p>Error al cargar el contenido.</p>';
      console.error(err);
    });
}
