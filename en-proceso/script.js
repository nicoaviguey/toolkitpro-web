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
    const gotico = {
      nombre: "Gótico",
      caracteres: {
        A: "𝔄", B: "𝔅", C: "ℭ", D: "𝔇", E: "𝔈", F: "𝔉", G: "𝔊", H: "ℌ", I: "ℑ", J: "𝔍",
        K: "𝔎", L: "𝔏", M: "𝔐", N: "𝔑", O: "𝔒", P: "𝔓", Q: "𝔔", R: "ℜ", S: "𝔖", T: "𝔗",
        U: "𝔘", V: "𝔙", W: "𝔚", X: "𝔛", Y: "𝔜", Z: "ℨ",
        a: "𝔞", b: "𝔟", c: "𝔠", d: "𝔡", e: "𝔢", f: "𝔣", g: "𝔤", h: "𝔥", i: "𝔦", j: "𝔧",
        k: "𝔨", l: "𝔩", m: "𝔪", n: "𝔫", o: "𝔬", p: "𝔭", q: "𝔮", r: "𝔯", s: "𝔰", t: "𝔱",
        u: "𝔲", v: "𝔳", w: "𝔴", x: "𝔵", y: "𝔶", z: "𝔷"
      }
    };

    const goticoNegrita = {
      nombre: "Gótico Negrita",
      caracteres: {
        A: "𝕬", B: "𝕭", C: "𝕮", D: "𝕯", E: "𝕰", F: "𝕱", G: "𝕲", H: "𝕳", I: "𝕴", J: "𝕵",
        K: "𝕶", L: "𝕷", M: "𝕸", N: "𝕹", O: "𝕺", P: "𝕻", Q: "𝕼", R: "𝕽", S: "𝕾", T: "𝕿",
        U: "𝖀", V: "𝖁", W: "𝖂", X: "𝖃", Y: "𝖄", Z: "𝖅",
        a: "𝖆", b: "𝖇", c: "𝖈", d: "𝖉", e: "𝖊", f: "𝖋", g: "𝖌", h: "𝖍", i: "𝖎", j: "𝖏",
        k: "𝖐", l: "𝖑", m: "𝖒", n: "𝖓", o: "𝖔", p: "𝖕", q: "𝖖", r: "𝖗", s: "𝖘", t: "𝖙",
        u: "𝖚", v: "𝖛", w: "𝖜", x: "𝖝", y: "𝖞", z: "𝖟"
      }
    };

    const invertido = {
      nombre: "Invertido",
      caracteres: {
        A: "∀", B: "𐐒", C: "Ɔ", D: "◖", E: "Ǝ", F: "Ⅎ", G: "פ", H: "H", I: "I", J: "ſ",
        K: "⋊", L: "⅃", M: "W", N: "N", O: "O", P: "Ԁ", Q: "Ό", R: "ᴚ", S: "S", T: "⊥",
        U: "∩", V: "Λ", W: "M", X: "X", Y: "⅄", Z: "Z",
        a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ƃ", h: "ɥ", i: "ᴉ", j: "ɾ",
        k: "ʞ", l: "ʃ", m: "ɯ", n: "u", o: "o", p: "d", q: "b", r: "ɹ", s: "s", t: "ʇ",
        u: "n", v: "ʌ", w: "ʍ", x: "x", y: "ʎ", z: "z"
      }
    };

    const negrita = {
      nombre: "Negrita",
      caracteres: {
        A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
        K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
        U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭",
        a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳", g: "𝗴", h: "𝗵", i: "𝗶", j: "𝗷",
        k: "𝗸", l: "𝗹", m: "𝗺", n: "𝗻", o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿", s: "𝘀", t: "𝘁",
        u: "𝘂", v: "𝘃", w: "𝘄", x: "𝘅", y: "𝘆", z: "𝘇"
      }
    };

    const cursiva = {
      nombre: "Cursiva",
      caracteres: {
        A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
        K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
        U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
        a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "ℎ", i: "𝑖", j: "𝑗",
        k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
        u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
      }
    };

    const cursivaNegrita = {
      nombre: "Cursiva Negrita",
      caracteres: {
        A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱",
        K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻",
        U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁",
        a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋",
        k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕",
        u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛"
      }
    };

    const sans = {
      nombre: "Sans Serif",
      caracteres: {
        A: "𝖠", B: "𝖡", C: "𝖢", D: "𝖣", E: "𝖤", F: "𝖥", G: "𝖦", H: "𝖧", I: "𝖨", J: "𝖩",
        K: "𝖪", L: "𝖫", M: "𝖬", N: "𝖭", O: "𝖮", P: "𝖯", Q: "𝖰", R: "𝖱", S: "𝖲", T: "𝖳",
        U: "𝖴", V: "𝖵", W: "𝖶", X: "𝖷", Y: "𝖸", Z: "𝖹",
        a: "𝖺", b: "𝖻", c: "𝖼", d: "𝖽", e: "𝖾", f: "𝖿", g: "𝗀", h: "𝗁", i: "𝗂", j: "𝗃",
        k: "𝗄", l: "𝗅", m: "𝗆", n: "𝗇", o: "𝗈", p: "𝗉", q: "𝗊", r: "𝗋", s: "𝗌", t: "𝗍",
        u: "𝗎", v: "𝗏", w: "𝗐", x: "𝗑", y: "𝗒", z: "𝗓"
      }
    };

    const sansNegrita = {
      nombre: "Sans Serif Negrita",
      caracteres: {
        A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
        K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
        U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭",
        a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳", g: "𝗴", h: "𝗵", i: "𝗶", j: "𝗷",
        k: "𝗸", l: "𝗹", m: "𝗺", n: "𝗻", o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿", s: "𝘀", t: "𝘁",
        u: "𝘂", v: "𝘃", w: "𝘄", x: "𝘅", y: "𝘆", z: "𝘇"
      }
    };

    const sansCursiva = {
      nombre: "Sans Serif Cursiva",
      caracteres: {
        A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
        K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
        U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
        a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
        k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
        u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
      }
    };

    const sansCursivaNegrita = {
      nombre: "Sans Serif Cursiva Negrita",
      caracteres: {
        A: "𝘼", B: "𝘽", C: "𝘾", D: "𝘿", E: "𝙀", F: "𝙁", G: "𝙂", H: "𝙃", I: "𝙄", J: "𝙅",
        K: "𝙆", L: "𝙇", M: "𝙈", N: "𝙉", O: "𝙊", P: "𝙋", Q: "𝙌", R: "𝙍", S: "𝙎", T: "𝙏",
        U: "𝙐", V: "𝙑", W: "𝙒", X: "𝙓", Y: "𝙔", Z: "𝙕",
        a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟",
        k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
        u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯"
      }
    };

    const dobleBurbuja = {
      nombre: "Doble Burbuja",
      caracteres: {
        A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
        K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
        U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ",
        a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
        k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
        u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫"
      }
    };

    const burbuja = {
      nombre: "Burbuja",
      caracteres: {
        A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ", I: "Ⓘ", J: "Ⓙ",
        K: "Ⓚ", L: "Ⓛ", M: "Ⓜ", N: "Ⓝ", O: "Ⓞ", P: "Ⓟ", Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ",
        U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ", Y: "Ⓨ", Z: "Ⓩ",
        a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ",
        k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ",
        u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ",
        0: "⓪", 1: "①", 2: "②", 3: "③", 4: "④", 5: "⑤", 6: "⑥", 7: "⑦", 8: "⑧", 9: "⑨"
      }
    };

    const burbujaRellena = {
      nombre: "Burbuja Rellena",
      caracteres: {
        A: "🅐", B: "🅑", C: "🅒", D: "🅓", E: "🅔", F: "🅕", G: "🅖", H: "🅗", I: "🅘", J: "🅙",
        K: "🅚", L: "🅛", M: "🅜", N: "🅝", O: "🅞", P: "🅟", Q: "🅠", R: "🅡", S: "🅢", T: "🅣",
        U: "🅤", V: "🅥", W: "🅦", X: "🅧", Y: "🅨", Z: "🅩",
        a: "🅐", b: "🅑", c: "🅒", d: "🅓", e: "🅔", f: "🅕", g: "🅖", h: "🅗", i: "🅘", j: "🅙",
        k: "🅚", l: "🅛", m: "🅜", n: "🅝", o: "🅞", p: "🅟", q: "🅠", r: "🅡", s: "🅢", t: "🅣",
        u: "🅤", v: "🅥", w: "🅦", x: "🅧", y: "🅨", z: "🅩",
        0: "⓿", 1: "➊", 2: "➋", 3: "➌", 4: "➍", 5: "➎", 6: "➏", 7: "➐", 8: "➑", 9: "➒"
      }
    };

    const cuadradoRelleno = {
      nombre: "Cuadrado Relleno",
      caracteres: {
        A: "🅐", B: "🅑", C: "🅒", D: "🅓", E: "🅔", F: "🅕", G: "🅖", H: "🅗", I: "🅘", J: "🅙",
        K: "🅚", L: "🅛", M: "🅜", N: "🅝", O: "🅞", P: "🅟", Q: "🅠", R: "🅡", S: "🅢", T: "🅣",
        U: "🅤", V: "🅥", W: "🅦", X: "🅧", Y: "🅨", Z: "🅩"
        // No incluye minúsculas ni números en Unicode
      }
    };

    const pequenasMayusculas = {
      nombre: "Pequenas Mayusculas",
      caracteres: {
        A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
        K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "s", T: "ᴛ",
        U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ"
      }
    };

// Mapeo de clave simple a nombre real para usar en fuentesUnicode y clases CSS
    const fuentesDecorativas = [
      gotico,
      goticoNegrita,
      invertido,
      negrita,
      cursiva,
      cursivaNegrita,
      sans,
      sansCursiva,
      sansNegrita,
      sansCursivaNegrita,
      dobleBurbuja,
      burbuja,
      burbujaRellena,
      cuadradoRelleno,
      pequenasMayusculas
    ];


// Función para convertir texto normal a texto decorado Unicode usando clave simple
    function convertirTexto(texto, fuente) {
      let resultado = "";
      for (const char of texto) {
        resultado += fuente.caracteres[char] || char;
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
