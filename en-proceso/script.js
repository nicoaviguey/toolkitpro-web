// ------------------- FUNCIONALIDAD PRINCIPAL -------------------
const toggleBtn = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

const themeToggleBtn = document.getElementById('theme-toggle');
const iconMoon = document.getElementById('icon-moon');
const iconSun = document.getElementById('icon-sun');

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

// ------------------- FUENTES UNICODE DECORATIVAS -------------------
const fuentesUnicode = {
  "Gótico": {
    normal: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    decorado: "𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷"
  },
  "Negrita": {
    normal: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    decorado: "𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇"
  },
  "Cursiva": {
    normal: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    decorado: "𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧"
  },
  "Doble Burbuja": {
    normal: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    decorado: "𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙ𝕼ℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫"
  },
  "Burbuja": {
    normal: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    decorado: "ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ"
  }
};

// Mapeo de clave simple a nombre real para usar en fuentesUnicode y clases CSS
const claveFuenteMap = {
  'gotico': 'Gótico',
  'negrita': 'Negrita',
  'cursiva': 'Cursiva',
  'doble-burbuja': 'Doble Burbuja',
  'burbuja': 'Burbuja'
};

// Función para convertir texto normal a texto decorado Unicode usando clave simple
function convertirTexto(texto, claveSimple) {
  const fuenteNombre = claveFuenteMap[claveSimple];
  if (!fuenteNombre) return texto;

  const map = fuentesUnicode[fuenteNombre];
  if (!map) return texto;

  const normal = map.normal;
  const decorado = map.decorado;

  let resultado = "";
  for (const char of texto) {
    const index = normal.indexOf(char);
    resultado += index !== -1 ? decorado[index] : char;
  }
  return resultado;
}

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
          Object.keys(claveFuenteMap).forEach(claveSimple => {
            const decorado = convertirTexto(texto, claveSimple);
            const em = document.querySelector(`#fuente-${claveSimple} em`);
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
