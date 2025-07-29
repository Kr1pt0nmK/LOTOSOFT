// js/main.js

// Scroll suave para enlaces internos
const enlaces = document.querySelectorAll('a[href^="#"]');
enlaces.forEach(enlace => {
  enlace.addEventListener('click', function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// Detectar modo oscuro y aplicar clase extra (opcional)
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('modo-oscuro');
}

// Insertar dinámicamente las tarjetas de proyectos
const proyectos = [
  {
    nombre: 'Restaurante Delicioso',
    imagen: 'assets/img/restaurante.jpg',
    ruta: 'proyectos/restaurante/index.html'
  },
  {
    nombre: 'Agencia de Viajes Aventuras',
    imagen: 'assets/img/agencia.jpg',
    ruta: 'proyectos/agencia/index.html'
  },
  {
    nombre: 'Perfumería Huele a istmo',
    imagen: 'assets/img/perfumeria.jpg',
    ruta: 'proyectos/perfumería/index.html'
  },
  {
    nombre: 'Barbería Estilo Pro',
    imagen: 'assets/img/barberia.jpg',
    ruta: 'proyectos/barberia/index.html'
  },
  {
    nombre: 'Gimnasio Fuerza Total',
    imagen: 'assets/img/gym.jpeg',
    ruta: 'proyectos/gym/index.html'
  },
  {
    nombre: 'Consultorio Dental Sonríe',
    imagen: 'assets/img/odontologo.jpg',
    ruta: 'proyectos/odontologo/index.html'
  },
  {
    nombre: 'Taller Mecánico RápidoFix',
    imagen: 'assets/img/taller.jpg',
    ruta: 'proyectos/taller/index.html'
  }
];

const contenedor = document.querySelector("#proyectos .columns");
if (contenedor) {
  contenedor.innerHTML = "";
  proyectos.forEach(p => {
    const columna = document.createElement('div');
    columna.className = 'column is-12-mobile is-6-tablet is-4-desktop';
    columna.innerHTML = `
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="${p.imagen}" alt="${p.nombre}">
          </figure>
        </div>
        <div class="card-content">
          <p class="title is-5">${p.nombre}</p>
          <a href="${p.ruta}" class="button is-link is-small">Ver demo</a>
        </div>
      </div>
    `;
    contenedor.appendChild(columna);
  });
}

// Ajustar hero para que logo y texto estén centrados y simétricos en desktop
const heroColumns = document.querySelector('.hero .columns');
if (heroColumns) {
  heroColumns.classList.add('is-centered');
} const logoImg = document.querySelector('.hero img');
if (logoImg) {
  logoImg.style.marginLeft = 'auto';
  logoImg.style.marginRight = 'auto';
  logoImg.style.display = 'block';
}

const logoColumn = document.querySelector('.hero .column.is-narrow');
if (logoColumn) {
  logoColumn.classList.remove('is-narrow');
  logoColumn.classList.add('is-half');
}

const textColumn = document.querySelector('.hero .column.has-text-centered');
if (textColumn) {
  textColumn.classList.add('is-half');
}