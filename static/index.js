import { html, render, nothing } from "https://unpkg.com/lit-html?module";
import json from "./json.js";

const API_KEY = "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";

console.log(json);

const fetchOptions = {
  method: "GET",
  headers: {
    Authorization: `Token ${API_KEY}`,
    "Content-Type": "application/json",
  },
};

const myStudies = [
  {
    title: "Técnico Superior en A.S.I.R",
    pla: "UNED - 2019/2021",
    data: [
      "Muy buenas calificaciones. MH(Planificación Administración de Redes y Administración y Gestión BBDD)",
      "Virtualización, Active Directory, HTML/CSS, PHP, MySQL, MongoDB...",
    ],
  },
  {
    title: "Grado en Psicología y Estudios de Posgrado",
    pla: "Univ. de Valencia - 2013/2018",
    data: [
      "Técnicas de trabajo en grupo, liderazgo y desarrollo de habilidades interpersonales",
      "Máster en Psicol. Clínica",
      "Máster en Criminología",
    ],
  },
];

const myJobs = [
  {
    title: "Técnico Informático",
    pla: "Ayun. de Altura - 2020",
    data: [
      "Implantación y Desarrollo de una App para el Control Vacacional",
      "Desarrollo de Aplicación de Turismo FullStack",
      "Active Directory(A.D)",
      "Windows Server 2019, Windows 10, Linux(Debian, Arch)...",
      "HelpDesk AnyDesk",
      "Mantenimiento y Reparación de Equipos/Servidores",
    ],
  },
  {
    title: "Profesor IT",
    pla: "Ayun. de Altura - 2019/20",
    data: [
      "Primeros Pasos en Programación (Scratch)",
      "Construyendo tu primer sitio Web (HTML/CSS/JS)",
      "Ofimática para todos (Word/Excel)",
      "Empezando con el Hellow World(Python)",
    ],
  },
  {
    title: "Empleado de Almacén",
    pla: "Altura Impulsa - 2020",
    data: [
      "Desarrollo de CRUD para Stock (PHP/SQL))",
      "Implantación de Aplicación",
      "Trabajo de Almacén",
      "Ofimática y Logística",
    ],
  },
];

const mySkills = [
  {
    title: "FrontEnd",
    skills: [
      "JavaScript EM6",
      "ReactJS",
      "Angular",
      "Vue",
      "HTML5/CSS3",
      "SASS/LESS",
      "JQuery",
      "Ajax",
      "lit-html",
      "Bootstrap4/5",
      "TailWindCSS",
      "MaterializeCSS",
      "Material-UI",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Flask",
      "PHP",
      "Django",
      "Node(Express)",
      "API RESTful",
      "SQL",
      "Webpack",
      "mongoDB",
      "Bash",
      "Apache/Nginx",
      "AWS",
      "Heroku",
    ],
  },
  {
    title: "Other",
    skills: [
      "Git",
      "MERN",
      "LAMP",
      "RF",
      "GitHub",
      "VSCode",
      "WordPress",
      "Slack",
      "GitLab",
      "AdobeXD",
      "Office365",
    ],
  },
];

const dataUs = (data) => html`
  <h4>${data.title}</h4>
  <h5 style="color:gray; margin-top:.2rem">${data.pla}</h5>
  <!-- list the data inside data -->
  <ul style="margin: 1rem">
    ${data.data.map(
      (item) => html`
        <li
          style="margin:.1rem;font-size:${data.data.length > 3
            ? ".9rem"
            : nothing}"
        >
          ${item}
        </li>
      `
    )}
  </ul>
`;

const dataSkills = (data) => html`
  <h4 style="padding:.5rem">${data.title}</h4>
  <p style="text-align: justify">
    ${data.skills.map((item, index) => {
      return html`
        <span
          style=" font-weight:bold; color:${index % 2 === 1
            ? "black"
            : "#a4b4c4"}"
          class="skill"
          >${item}
        </span>
      `;
    })}
  </p>
`;

let indexInfo = 0;
const randomInfo = () => {
  const randomNote = document.getElementById("randomNote");
  const randomInfo = [
    "Me encanta desarrollar en los dos lados de la ecuación, tanto FrontEnd 🖥️  como BackEnd 🧰 . La cuestión es construir cosas.",
    "Este portfolio está hecho desde 0️⃣ por mí 😁",
    "Busco un lugar donde desarrollar mis habilidades, construir una carrera y convertirme en un mejor profesional 🧰.",
    "Me encanta compartir lo que sé, siempre he tenido un poco de alma de profesor ✏️.",
    "Siempre estoy aprendiendo, ampliando mis conocimientos y habilidades.🧑🏻‍🎓",
    html`Mi lenguaje favorito es Python 🐍 <br />
      Aunque mi otro amor es JavaScript 🤓`,
    html`Me gusta cualquier tipo de música 🎶 y la lectura 📚`,
    "Pasé un año en el extranjero 🇷🇴 donde me comunicaba en inglés 🇬🇧 con gente de todo el mundo.",
  ];

  render(
    html`
      <h3 style="margin-top:1rem; text-align:center">
        ${randomInfo[indexInfo]}
      </h3>
    `,
    randomNote
  );
  indexInfo++;
  if (indexInfo === randomInfo.length) {
    indexInfo = 0;
  }
};

const objDataLeft = [
  {
    title: "Sobre mi",
    text: "Desarrollador bilingüe con experiencia en Desarrollo Web, en busca de un empleo como junior o prácticas profesionales. El trabajo en equipo, mi capacidad de aprendizaje y la pasión por resolver problemas, son mis principales fortalezas. Soy una persona responsable, con actitud hacia el trabajo y una gran capacidad de adaptación. Me encantaría trabajar en una empresa que me permita aprender y desarollarme personal y profesionalmente. ",
  },
  {
    title: "Mis Estudios",
    text: myStudies.map((study) => dataUs(study)),
  },
  {
    title: html`<button @click=${randomInfo} class="button-random">
      Descubre más sobre mí
    </button>`,
    text: html`<div id="randomNote">
      <h3 style="margin-top:1rem; text-align:center">
        Pasé un año en el extranjero 🇷🇴 donde me comunicaba en inglés 🇬🇧 con
        gente de todo el mundo.
      </h3>
    </div>`,
  },
];

const objDataRight = [
  {
    title: "Carrera Profesional",
    text: myJobs.map((study) => dataUs(study)),
  },
  {
    title: "Mis Conocimientos",
    text: mySkills.map((skill) => dataSkills(skill)),
  },
];

const card = (data) => html`
  <div class="card">
    <!-- make a div for the content and the title -->
    <div class="card__content">
      <h3 class="card__title">${data.title}</h3>
      <p class="card__text">${data.text}</p>
    </div>
  </div>
`;

const home = () => html`
  <div class="home">
    <div class="home__left">
      <div class="home__user">
        <img class="home__img" src="static/assets/me.jpeg" alt="me" />
        <div class="home__user-info">
          <h1 class="home__user-name">Miguel López</h1>
          <br />
          <!-- make a container for my job -->
          <h2 class="home__user-job">Web Developer</h2>
          <h2 class="home__user-job">IT Technician</h2>
        </div>
      </div>
      <div class="home__hidden">
        <h3>Hola 👋🏻</h3>
      </div>
      <ul class="home__contact">
        <h4 style="color:#ff914d">Contact Me:</h4>
        <li class="home__contact-item">
          <i style="color: #000" class="fas fa-book"></i>
          <span>
            <a href="https://emelportfolio.herokuapp.com/"> @emelportfolio </a>
          </span>
        </li>
        <li class="home__contact-item">
          <i style="color: #000" class="fas fa-envelope"></i>
          <span>
            <a href="mailto:mick.altura@gmail.com">mick.altura@gmail.com </a>
          </span>
        </li>
        <!-- make one for web page -->

        <!-- add the github -->
        <li class="home__contact-item">
          <i style="color: #000" class="fab fa-github"></i>
          <span>
            <a href="https://github.com/emelcd">@emelcd</a>
          </span>
        </li>
        <!-- make a link for linkedin -->
        <li class="home__contact-item">
          <i style="color: #000" class="fab fa-linkedin"></i>
          <span>
            <a href="https://www.linkedin.com/in/miguel-l%C3%B3pez-7821131b9/">
              Miguel López
            </a>
          </span>
        </li>
        <li class="home__contact-item">
          <i style="color: #000" class="fas fa-map-marker-alt"></i>
          <span>
            <a
              href="https://www.google.com/maps/place/Valencia/@39.4743283,-0.3552049,16.75z/data=!4m5!3m4!1s0xd604f4cf0efb06f:0xb4a351011f7f1d39!8m2!3d39.4699075!4d-0.3762881"
            >
              46201, Valencia, España
            </a>
          </span>
        </li>
      </ul>
    </div>
    <div class="home__right">
      <div>${objDataLeft.map((data) => card(data))}</div>
      <div>${objDataRight.map((data) => card(data))}</div>
    </div>
  </div>
`;

const repos = (data) => html`
  <div class="repo">
    <div class="card">
      <div class="card__user">
        <img class="card__user-img" src="${data.owner.avatar_url}" alt="user" />
      </div>
      <div class="card__content">
        <div class="card__banner">
          <h4 class="card__title2">
            <a
              class="card__title2"
              href="${data.private
                ? "https://github.com/emelcd"
                : data.html_url}"
              target="_blank"
              >${data.name}</a
            >
            ${data.private
              ? html`<i style="color:#000" class="fas fa-lock"></i>`
              : nothing}
          </h4>
        </div>
        <p class="card__text">${data.description}</p>
      </div>
      <div class="repo__contents">
        ${data.contents.map((d) => {
          return d.type === "dir"
            ? html`
                <a href="${d.html_url}" class="repo__content-item">
                  <i class="fas fa-folder"></i>
                  <span>${d.name}</span>
                </a>
                <br />
              `
            : html`
                <a href="${d.html_url}" class="repo__content-item">
                  <i class="fas fa-file"></i>
                  <span>${d.name}</span>
                </a>
                <br />
              `;
        })}
      </div>

      <!-- card footer -->
      <div class="card__footer">
        <div class="card__footer-item">
          <i style="color: #EADDC6" class="fas fa-star"></i>
          <span>${data.stargazers_count}</span>
        </div>
        <div class="card__footer-item">
          <i class="fas fa-code-branch"></i>
          <span>${data.commits}</span>
        </div>
      </div>
      <div class="card__langs">
        ${Object.keys(data.languages).map((key) => {
          return html`
            <span class="card__lang">
              <span>${key}</span>
            </span>
          `;
        })}
      </div>
      <div class="card__updated">
        <i style="padding: 1rem" class="fas fa-calendar-alt"></i>
        <span>${new Date(data.updated_at).toLocaleDateString()}</span>
      </div>
    </div>
  </div>
`;

const short_data = (a, b) => {
  return new Date(b.updated_at) - new Date(a.updated_at);
};

const about = () => {
  // shot by data the json

  let template = html`
    <div class="repo-container">
      <div>
        <h1 class="title__repo">
          GitHub Repos <i style="color: #000" class="fab fa-github"></i>
        </h1>
      </div>

      ${json.sort(short_data).map((repo) => repos(repo))}
    </div>
  `;
  return template;
};

const contact = () => html`
  <div class="container">  
    <div class="card">
      <!-- make a form inside the card with title and subtitle 
    -->
      <div class="card__content">
        <h1 class="card__title">Déjame un recado 🖊️</h1>
        <h2 class="card__subtitle">
          ¿Tienes alguna duda? ❔<br />
           ¿Quieres contratarme? 🤝 <br />
           Te contesto en menos de 24hrs 🕒 <br />
           Gracias por tu interés 🙏 <br />
        </h2>
        <form class="card__form" method="POST" action="/msg">
          <input
            class="card__input"
            type="text"
            placeholder="Nombre/Email"
            name="name"
          />
          <textarea 
            
            class="card__textarea"
            placeholder="Mensaje"
            name="message"
          ></textarea>
          <input
            class="card__submit"
            type="submit"
            value="Enviar ✉️"
          />
          </form>


      </div>
    </div>
</div>
</div>
`;

const handleTabs = (e) => {
  console.log(e.target.textContent.trim());
  let tab = e.target.textContent.trim();
  render(
    html` ${tab === "CV" ? home() : tab === "PROYECTOS" ? about() : contact()}`,
    document.getElementById("content")
  );
};

const header = () => html`
  <header class="header">
    <!-- make a logo -->
    <div class="header__logo">
      <img class="header__img" src="static/assets/logo.png" alt="logo" />
    </div>
    <nav class="header__nav">
      <ul @click=${handleTabs} class="header__nav-list">
        <li class="header__nav-item">
          <a href="#" class="header__nav-link">CV</a>
        </li>
        <li class="header__nav-item">
          <a href="#" class="header__nav-link">PROYECTOS</a>
        </li>
        <li class="header__nav-item">
          <a href="#" class="header__nav-link">CONTACTA</a>
        </li>
      </ul>
    </nav>
    <!-- <div class="header__menu">
      <i
        @mouseover=${(e) => {
      render(
        html`
          <ul class="dropdown__list">
            <li class="dropdown__item">My profile</li>
            <li class="dropdown__item">My account</li>
            <li class="dropdown__item">Logout</li>
          </ul>
        `,
        document.getElementById("dropdown")
      );
    }}
        @click=${(e) => {
      render(
        html`
          <ul class="dropdown__list">
            <li class="dropdown__item">My profile</li>
            <li class="dropdown__item">My account</li>
            <li class="dropdown__item">Logout</li>
          </ul>
        `,
        document.getElementById("dropdown")
      );
    }}
        class="fas fa-bars header__menu-icon "
      ></i>
    </div> -->
    <div id="dropdown" class="dropdown"></div>
  </header>
`;

const app = () => html`
  ${header()}
  <main id="content">${home()}</main>
`;

render(app(), document.body);
