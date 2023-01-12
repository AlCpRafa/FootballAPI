import { Team } from "./equipo.js";
import { TeamRow } from "./equipo.js";
import { Player } from "./jugador.js";
import { League } from "./liga.js";

const main = document.querySelector("#main");
const table_body = document.querySelector("#table_league_body")
table_body.addEventListener("mousedown", (event)=>{
    if (event.target.nodeName === "TD") {
        teamstable.then(equipos => {
            let id_equipo = equipos.find(team => team.getName === event.target.parentElement.children[1].textContent).getId;
            localStorage.setItem("id_team", id_equipo)
        })
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

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'eb3bf246b4msh482984ea6d917b3p16488cjsn7e4ab5791fae',
        'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com'
    }
};

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
    return teamstable;
}

const createTable = (array) => {
    const fragment = document.createDocumentFragment();
    array.forEach(team => {
        const row = document.createElement("tr");
        row.classList.add("rowTeam");
        

        const rank = document.createElement("td")
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

        row.appendChild(rank)
        row.appendChild(name)
        row.appendChild(imagecont)
        row.appendChild(points)
        row.appendChild(goals)
        row.appendChild(goalscon)
        row.appendChild(goalsdif)
        row.appendChild(matches)
        row.appendChild(win)
        row.appendChild(loss)
        row.appendChild(draw)

        fragment.appendChild(row)
    })

    return fragment;
}

const teamstable = showUsers();
// const showLeague = async () =>{
//     await showUsers();
//     const 
// }

const checkPos = (team, row) =>  {
    if (team.getColor === null) {
        row.classList.add("bg--blue")
    } else if (team.getColor === "absteiger"){
        row.classList.add("bg--red")
    } else {
        row.classList.add("bg--green")
    }
}