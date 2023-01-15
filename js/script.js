import { Team } from "./equipo.js";
import { TeamRow } from "./equipo.js";
import { Player } from "./jugador.js";
import { League } from "./liga.js";

const main = document.querySelector("#main");
const table_body = document.querySelector("#table_league_body")

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '528e70b3b6msh58f061dbf4c761ep1738bcjsnc8f004609426',
        'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com'
    }
};

table_body.addEventListener("mousedown", (event) => {
    if (event.target.nodeName === "TD") {
        console.log(event.target.parentElement.children[0])
        let id_equipo = event.target.parentElement.children[0].textContent;
        let logo = event.target.parentElement.children[3].children[0].src
        console.log(logo)
        localStorage.setItem("id_team", id_equipo)
        localStorage.setItem("team_logo", logo)
        location.assign("./team.html")
    }
})

//URLs    
let id = "GB1";
let ligas = [{
    id: "L1",
    title: "Bundesliga",
    image: "https://tmssl.akamaized.net/images/logo/normal/l1.png?lm=1525905518"
}, {
    id: "GB1",
    title: "Premier League",
    image: "https://tmssl.akamaized.net/images/logo/normal/gb1.png?lm=1521104656"
}, {
    id: "ES1",
    title: "LaLiga",
    image: "https://tmssl.akamaized.net/images/logo/normal/es1.png?lm=1557051003"
}, {
    id: "IT1",
    title: "Serie A",
    image: "https://tmssl.akamaized.net/images/logo/normal/it1.png?lm=1632134907"
}, {
    id: "FR1",
    title: "Ligue 1",
    image: "https://tmssl.akamaized.net/images/logo/normal/fr1.png?lm=1592648063"
}, {
    id: "NL1",
    title: "Eredivisie",
    image: "https://tmssl.akamaized.net/images/logo/normal/nl1.png?lm=1629726381"
}];



let url_all_leagues = `https://transfermarket.p.rapidapi.com/competitions/list-default?domain=es`;
let url_league_info = `https://transfermarket.p.rapidapi.com/competitions/get-table?id=${id}&seasonID=2022&domain=es`;
let url_team_info = `https://transfermarket.p.rapidapi.com/clubs/get-profile?id=${id}&domain=es`;
let url_team_squad = `https://transfermarket.p.rapidapi.com/clubs/get-squad?id=${id}&saison_id=2022&domain=es`;
let url_player_info = ``;



const loadTeamRows = () => {
    return fetch(url_league_info, options)
        .then(resp => resp.json())
        .then(resp => resp);
}

const showUsers = async () => {
    const equipos = await loadTeamRows();
    let teamstable = [];
    equipos.table.map(teamresp => {
        teamstable.push(new TeamRow(teamresp.id, teamresp.rank, teamresp.clubName, teamresp.clubImage,
            teamresp.points, teamresp.goals, teamresp.goalsConceded, teamresp.goalDifference, teamresp.matches,
            teamresp.wins, teamresp.losses, teamresp.draw, teamresp.markClass));
    });
    console.log(teamstable);
    table_body.appendChild(createTable(teamstable));
}

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
        const goalscon = document.createElement("td")
        const goalsdif = document.createElement("td")
        const matches = document.createElement("td")
        const win = document.createElement("td")
        const loss = document.createElement("td")
        const draw = document.createElement("td")

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

showUsers();

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