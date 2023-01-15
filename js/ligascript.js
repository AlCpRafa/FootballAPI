// Se importa la clase necesaria
import { TeamRow } from "./liga.js";
// Elementos del dom
const table_body = document.querySelector("#table_league_body")
// constante con los parametros de opciones que hay que pasarle a la api para realizar la consulta
const options = {
    method: 'GET',
    //Entre ellos esta la clave necesario puesto que la api es privada
    headers: {
        'X-RapidAPI-Key': '528e70b3b6msh58f061dbf4c761ep1738bcjsnc8f004609426',
        'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com'
    }
};
//Funcion que realiza la consulta a la api y devuelve un JSON
const loadTeamRows = (url) => {
    return fetch(url, options)
        .then(resp => resp.json())
        .then(resp => resp);
}
// Funcion que crea para cada elemento de un array un tr, agnade las clases correspondientes
// y rellena el texto con los datos de cada elemento del array
const createTable = (array) => {
    const fragment = document.createDocumentFragment();
    array.forEach(team => {
        const row = document.createElement("tr");
        row.classList.add("rowTeam");

        const id = document.createElement("td")
        const rank = document.createElement("td")
        id.classList.add("d-none")
        const name = document.createElement("td")
        const imagecont = document.createElement("td")
        const image = document.createElement("img")
        const points = document.createElement("td")
        const goals = document.createElement("td")
        goals.classList.add("responsivetd-800")
        const goalscon = document.createElement("td")
        goalscon.classList.add("responsivetd-800")
        const goalsdif = document.createElement("td")
        goalsdif.classList.add("responsivetd-800")
        const matches = document.createElement("td")
        matches.classList.add("responsivetd-400")
        const win = document.createElement("td")
        win.classList.add("responsivetd-400")
        const loss = document.createElement("td")
        loss.classList.add("responsivetd-400")
        const draw = document.createElement("td")
        draw.classList.add("responsivetd-400")

        checkPos(team, row)

        id.textContent = team.getId
        rank.textContent = team.getRank
        name.textContent = team.getName
        image.setAttribute("src", team.getImage)
        points.textContent = team.getPoints
        goals.textContent = team.getGoals
        goalscon.textContent = team.getGoalscon
        goalsdif.textContent = team.getGoalsdif
        matches.textContent = team.getMatches
        win.textContent = team.getWins
        loss.textContent = team.getLosses
        draw.textContent = team.getDraw

        imagecont.appendChild(image)

        row.append(id, rank, name, imagecont, points, goals, goalscon, goalsdif, matches, win, loss, draw)

        fragment.appendChild(row)
    })

    return fragment;
}
// Funcion que almacena en una constante la consulta a la api, crea un objeto para cada elemento de la consulta y usa
// la funcion createTable para mostrar los resultados
const showUsers = async (url) => {
    const equipos = await loadTeamRows(url);
    let teamstable = [];
    equipos.table.map(teamresp => {
        teamstable.push(new TeamRow(teamresp.id, teamresp.rank, teamresp.clubName, teamresp.clubImage,
            teamresp.points, teamresp.goals, teamresp.goalsConceded, teamresp.goalDifference, teamresp.matches,
            teamresp.wins, teamresp.losses, teamresp.draw, teamresp.markClass));
    });
    // console.log(teamstable);
    table_body.appendChild(createTable(teamstable));
}
//Funcion que pinta el borde izquierdo de cada equipo de un color u otro dependiendo de su estado de clasificacion
const checkPos = (team, row) => {
    if (team.getColor === null || team.getColor === "gelbpos") {
        row.classList.add("bg--blue")
    } else if (team.getColor === "meister") {
        row.classList.add("bg--champion") 
    } else if (team.getColor === "gruen" || team.getColor === "cleague" || team.getColor === "clquali") {
        row.classList.add("bg--green")
    } else if (team.getColor === "uefa" || team.getColor === "UEFA Europa Conference League" ||  team.getColor === "UEFA Europa Conference League Qualifikation") {
        row.classList.add("bg--uefa")
    } else {
        row.classList.add("bg--red")
    }
}
//Si encuentra el id de la liga realiza la consulta a la api y carga los resultados
if (localStorage.getItem("id_league") !== null) {
    let id = localStorage.getItem("id_league")
    let url_league_info = `https://transfermarket.p.rapidapi.com/competitions/get-table?id=${id}&seasonID=2022&domain=es`
    showUsers(url_league_info);
}
//Listener para almacenar el id del equipo seleccionado y redirigir al ususario a la siguiente pagina
table_body.addEventListener("mousedown", (event) => {
    if (event.target.nodeName === "TD") {
        let id_equipo = event.target.parentElement.children[0].textContent;
        let logo = event.target.parentElement.children[3].children[0].src
        localStorage.setItem("id_team", id_equipo)
        localStorage.setItem("team_logo", logo)
        location.assign("./team.html")
    }
})
