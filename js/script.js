/*JS de la pagina principal*/
/*Elementos del DOM*/
const leagues = document.querySelector("#leagues")
/*Se registra en el localStorage el id de la liga para usarlo en la consulta de la api en la siguiente pagina*/
leagues.addEventListener("mousedown", (event)=>{
    if (event.target.nodeName === "ARTICLE") {
        localStorage.setItem("id_league", event.target.children[2].textContent)
    } else if (event.target.nodeName === "IMG" || event.target.nodeName === "H2") {
        localStorage.setItem("id_league", event.target.parentElement.children[2].textContent)
    }
    location.assign("./pages/liga.html")
})