import { Team } from "./equipo.js";
//Parametros necesarios para realizar las consultas a la api
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '528e70b3b6msh58f061dbf4c761ep1738bcjsnc8f004609426',
        'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com'
    }
};
// Elementos del dom
//Secciones
const team_data = document.querySelector("#team_data")
const team_squad = document.querySelector("#team_squad")

//Encabezado del equipo
const team_header = document.querySelector("#team_data__header")
//Elementos del encabezado
const team_title = document.querySelector("#team_data__title")
const team_logo = document.querySelector("#team_data__logo")
const team_city = document.querySelector("#team_data__city")
const team_founding = document.querySelector("#team_data__founding")
const team_members = document.querySelector("#team_data__members")

//Cuerpo del equipo
const team_body = document.querySelector("#team_data__body")
//Elementos del cuerpo
const team_titulos = document.querySelector("#team_data__titulos")
const stadium_name = document.querySelector("#stadium__name")
const stadium_year = document.querySelector("#stadium__year")
const stadium_cap = document.querySelector("#stadium__cap")
const stadium__img = document.querySelector("#stadium__img")

//Encabezado de la plantilla
const team_squad_header = document.querySelector("#team_squad_header")
//Elementos del encabezado
const team_squad_size = document.querySelector("#team_squad_size")
const team_squad_age = document.querySelector("#team_squad_age")

const team_squad_body = document.querySelector("#team_squad_body")

//Realiza una llamada a la api y devuelve un JSON
const apiCall = (url) => {
    return fetch(url, options)
        .then(resp => resp.json())
        .then(resp => resp)
}
//Almacena los datos de las consultas en constantes, crea un objeto Team y se lo pasa a la funcion createTable para mostrar el contenido
const showTeam = async (urlinfo, urlsquad) => {
    const team_info_resp = await apiCall(urlinfo);
    const team_info_squad = await apiCall(urlsquad);
    // console.log(team_info_resp)
    // console.log(team_info_squad)
    const team = new Team(team_info_resp.mainFacts.id, team_info_resp.mainFacts.fullName,
        localStorage.getItem("team_logo"), team_info_resp.mainFacts.countryImage,
        team_info_resp.mainFacts.city, team_info_resp.mainFacts.founding,
        team_info_resp.mainFacts.members, team_info_resp.mainFacts.squadSize,
        team_info_resp.mainFacts.avgAge, team_info_resp.stadium.name,
        team_info_resp.stadium.image, team_info_resp.stadium.constructionYear,
        team_info_resp.stadium.totalCapacity, team_info_resp.successes, team_info_squad.squad)

    // console.log(team)
    createTeam(team)
}
// Crea un li para cada titulo del equipo
const titulos =(array)=>{
    //Muestra en una lsta los titulos
    const lifrag = document.createDocumentFragment()
    array.getSuccesses.forEach(titulo => {
        if (titulo.name !== "") {
            const li = document.createElement("li")
            li.textContent = titulo.number + " x " + titulo.name
            lifrag.appendChild(li)
        }
    });
    team_titulos.appendChild(lifrag)
}
// Crea un tarjeta con un enlace a la siguiente pagina para cada jugador del equipo
const createSquad =(array)=>{
    //Hace tarjetas con cada uno de los jugadores de la plantilla
    const squad_frag = document.createDocumentFragment()
    array.getSquad.forEach(playerarr => {
        const link = document.createElement("a")
        link.setAttribute("href", "./player.html")
        const player = document.createElement("article")
        const id = document.createElement("p")
        const name = document.createElement("p")
        const img = document.createElement("img")

        id.textContent = playerarr.id
        id.classList.add("d-none")
        name.textContent = playerarr.name
        img.setAttribute("src", playerarr.image)

        player.append(img, name, id)
        link.appendChild(player)
        squad_frag.appendChild(link)
    })

    team_squad_body.appendChild(squad_frag)
}
//Muestra el contenido en la pagina
const createTeam = (teamtest) => {
    team_title.textContent = teamtest.getName;
    team_logo.setAttribute("src", teamtest.getClub_image);
    team_city.textContent = "Ciudad: " + teamtest.getCity;
    team_founding.textContent = "Fundado en: " + teamtest.getFounding_date;
    team_members.textContent = "Socios: " + teamtest.getMembers;

    stadium_name.textContent = "Estadio: " + teamtest.getStadium_name;
    stadium_year.textContent = "Fecha de construccion: " + teamtest.getStadium_year;
    stadium_cap.textContent = "Capacidad: " + teamtest.getStadium_capacity;
    stadium__img.setAttribute("src", teamtest.getStadium_img)

    team_squad_size.textContent = "Jugadores: "+teamtest.getSquad_size
    team_squad_age.textContent = "Edad media: "+teamtest.getAvg_age

    titulos(teamtest);
    createSquad(teamtest)
}
// Si en el localStorage esa almacenado el id del equipo se carga la pagina
if (localStorage.getItem("id_team") !== null) {
    let id = localStorage.getItem("id_team")
    let url_team_info = `https://transfermarket.p.rapidapi.com/clubs/get-profile?id=${id}&domain=es`;
    let url_team_squad = `https://transfermarket.p.rapidapi.com/clubs/get-squad?id=${id}&saison_id=2022&domain=es`;
    showTeam(url_team_info, url_team_squad);
}
//Listener que almacena el id del jugador en el localStorage y redirige al usuaro a la pagina siguiente
team_squad_body.addEventListener("mousedown", (event)=>{
    let id_player = ""
    if (event.target.parentElement.nodeName === "A") {
        id_player = event.target.children[2].textContent
    } else if (event.target.parentElement.parentElement.nodeName === "A") {
        id_player = event.target.parentElement.children[2].textContent
    }
    localStorage.setItem("id_player", id_player)
})


