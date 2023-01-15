import { Player } from "./jugador.js";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '528e70b3b6msh58f061dbf4c761ep1738bcjsnc8f004609426',
        'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com'
    }
};

const player__name = document.querySelector("#player__name")
const player__foto = document.querySelector("#player__foto")
const playerc__foto = document.querySelector("#playerc__foto")
const player__country = document.querySelector("#player__country")
const player__age = document.querySelector("#player__age")
const player__height = document.querySelector("#player__height")
const player__foot = document.querySelector("#player__foot")
const player__club = document.querySelector("#player__club")
const player__league = document.querySelector("#player__league")
const player__club__foto = document.querySelector("#player__club__foto")
const player__position = document.querySelector("#player__position")
const player__value = document.querySelector("#player__value")
const player__gallery = document.querySelector("#player__gallery")




const apiCall = (url) => {
    return fetch(url, options)
        .then(resp => resp.json())
        .then((resp) => resp)

}


const createPlayer = async (url) =>{
    const player_resp = await apiCall(url);
    const player = new Player(player_resp.playerProfile.playerFullName, player_resp.playerProfile.playerImage, player_resp.playerProfile.dateOfBirth, player_resp.playerProfile.countryImage, player_resp.playerProfile.age, player_resp.playerProfile.height, player_resp.playerProfile.foot, player_resp.playerProfile.league, player_resp.playerProfile.club, player_resp.playerProfile.clubImage, player_resp.playerProfile.playerMainPosition, player_resp.playerProfile.marketValue, player_resp.heroImages);
    showPlayer(player)
    console.log(player)
}

const createGallery = (array) =>{
    const gal_frag = document.createDocumentFragment();
    array.forEach(image => {
        const img = document.createElement("img")
        img.setAttribute("src", image.url)
        img.classList.add("d-none")
        gal_frag.appendChild(img)
    });
    player__gallery.appendChild(gal_frag)
}

const showPlayer = async (player) => {
    player__foto.setAttribute("src", player.getPlayer_image)
    playerc__foto.setAttribute("src", player.getCountry_img)
    player__club__foto.setAttribute("src", player.getClub_img)
    player__name.textContent = player.getName
    player__country.textContent = "Fecha de nacimiento: " + player.getBirth_country
    player__age.textContent = "Edad: " + player.getAge
    player__height.textContent = "Altura: " + player.getHeight + " m."
    player__foot.textContent = "Pie bueno: " + player.getFoot
    player__club.textContent = player.getClub
    player__league.textContent = player.getLeague
    player__position.textContent = "Posicion: " + player.getPosition
    player__value.textContent = "Valor de mercado: " + player.getMarket_value + " Mill. €"
    
   await createGallery(player.getImages);
   player__gallery.firstElementChild.classList.remove("d-none")
}

if (localStorage.getItem("id_player") !== null) {
    let id = localStorage.getItem("id_player")
    let url = `https://transfermarket.p.rapidapi.com/players/get-profile?id=${id}&domain=es`
    createPlayer(url);
}

player__gallery.addEventListener("mousedown", (event)=>{
    if (event.target.nextSibling !== null) {
        event.target.nextSibling.classList.add("appear")
        event.target.nextSibling.classList.remove("d-none")
        event.target.classList.add("d-none")
        
    } else {
        event.target.classList.add("d-none")
        event.target.parentElement.children[0].classList.add("appear")
        event.target.parentElement.children[0].classList.remove("d-none")
    }
})