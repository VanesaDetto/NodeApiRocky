//1. ALMACENAMIENTO DE LA CAJA CONTENEDORA
const filmsContainer = document.querySelector("#films_container");

//2. ALMACENAMIENTO DE LA URL

const rockysURL = "http://localhost:8080/api/film/getAll";

let previousfilms = "";

//3.ETAPA DE SINCRONISIDAD

const initFilms = async () => {
  const films = await getFilms();
  mapFilms(films);
};

const getFilms = async () => {
  const rawData = await fetch(rockysURL);
  const jsonData = await rawData.json();
  return jsonData;
};

//3. ETAPA DE MAPEO

const mapFilms = (list) => {
  list.data.films.map((item) =>
    generateHTML({
      name: item.name,
      year: item.year,
      img: item.img,
    })
  );
};

//4. ARMO HTML

const generateHTML = (item) => {
  const myFigure = ` 
  <figure class="figure_container">
    <img src="${item.img}" alt="${item.name}" referrerpolicy="no-referrer"/>
    <div class:"text-films">
    <h3>${item.name}</h3>
    <h4>Year:${item.year}</h4>
    </div>
    </figure>
    `;

  print(myFigure);
};

const print = (figure) => {
  filmsContainer.innerHTML += figure;
};

initFilms();

//------------------------------------------------//

//1. ALMACENAMIENTO DE LA CAJA CONTENEDORA
const actorsContainer = document.querySelector("#actors-container");

//2. ALMACENAMIENTO DE LA URL

const rockyURL = "http://localhost:8080/api/actor/getAll";

let previousActors = "";

//3.ETAPA DE SINCRONISIDAD

const initActors = async () => {
  const Actors = await getActors();
  mapActors(Actors);
};

const getActors = async () => {
  const rawData = await fetch(rockyURL);
  const jsonData = await rawData.json();
  return jsonData;
};

//4. ETAPA DE MAPEO

const mapActors = (list) => {
  list.data.actors.map((item) =>
    createHTML({
      name: item.name,
      role: item.role,
    })
  );
};

//5. ARMO HTML

const createHTML = (item) => {
  const myFigure = `
    <figure class="figurecontainer-actor">
      <h3>${item.name}</h3>
      <h4>Role:${item.role}</h4>
    </figure>

    `;

  printActors(myFigure);
};

const printActors = (figure) => {
  actorsContainer.innerHTML += figure;
};

initActors();
