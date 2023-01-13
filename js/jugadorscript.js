import { Player } from "./jugador.js";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'eb3bf246b4msh482984ea6d917b3p16488cjsn7e4ab5791fae',
        'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com'
    }
};

let id = 255755;
let url = `https://transfermarket.p.rapidapi.com/players/get-profile?id=${id}&domain=es`

const apiCall = () => {
    return fetch(url, options)
        .then(resp => resp.json())
        .then((resp) => resp)

}


const createPlayer = async () =>{
    const player_resp = await apiCall();
    const player = new Player(player_resp.playerProfile.playerFullName, player_resp.playerProfile.dateOfBirth, player_resp.playerProfile.countryImage, player_resp.playerProfile.age, player_resp.playerProfile.height, player_resp.playerProfile.foot, player_resp.playerProfile.league, player_resp.playerProfile.club, player_resp.playerProfile.clubImage, player_resp.playerProfile.playerMainPosition, player_resp.playerProfile.marketValue, player_resp.heroImages);
    console.log(player)
}

const showPlayer = () => {
    createPlayer();
}
