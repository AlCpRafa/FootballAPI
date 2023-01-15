// Clase de un equipo completo
export class Team {
    constructor(id, name, club_image, country_img, city, founding_date, members, squad_size, avg_age, stadium_name, stadium_img, stadium_year, stadium_capacity, successes, squad){
        this._id = id;
        this._name = name;
        this._club_image = club_image;
        this._country_img = country_img;
        this._city = city;
        this._founding_date = founding_date;
        this._members = members;
        this._squad_size = squad_size;
        this._avg_age = avg_age;
        this._stadium_name = stadium_name;
        this._stadium_img = stadium_img;
        this._stadium_year = stadium_year;
        this._stadium_capacity = stadium_capacity;
        this._successes = successes;
        this._squad = squad;
    }

    get getId() {
        return this._id;
    }

    set setId(id) {
        this.id = id;
    }

    get getName() {
        return this._name;
    }

    set setName(name) {
        this._name = name;
    }

    get getClub_image() {
        return this._club_image;
    }

    set setClub_image(club_image) {
        this._club_image = club_image;
    }

    get getCountry_img() {
        return this._country_img;
    }

    set setCountry_img(country_img) {
        this._country_img = country_img;
    }

    get getCity() {
        return this._city;
    }

    set setCity(city) {
        this._city = city;
    }

    get getFounding_date() {
        return this._founding_date;
    }

    set setFounding_date(founding_date) {
        this._founding_date = founding_date;
    }

    get getMembers() {
        return this._members;
    }

    set setMembers(members) {
        this._members = members;
    }

    get getSquad_size() {
        return this._squad_size;
    }

    set setSquad_size(squad_size) {
        this._squad_size = squad_size;
    }

    get getAvg_age() {
        return this._avg_age;
    }

    set setAvg_age(avg_age) {
        this._avg_age = avg_age;
    }

    get getStadium_name() {
        return this._stadium_name;
    }

    set setStadium_name(stadium_name) {
        this._stadium_name = stadium_name;
    }

    get getStadium_img() {
        return this._stadium_img;
    }

    set setStadium_img(stadium_img) {
        this._stadium_img = stadium_img;
    }

    get getStadium_year() {
        return this._stadium_year;
    }

    set setStadium_year(stadium_year) {
        this._stadium_year = stadium_year;
    }

    get getStadium_capacity() {
        return this._stadium_capacity;
    }

    set setStadium_capacity(stadium_capacity) {
        this._stadium_capacity = stadium_capacity;
    }

    get getSuccesses() {
        return this._successes;
    }

    set setSuccesses(successes) {
        this._successes = successes;
    }

    get getSquad() {
        return this._squad;
    }

    set setSquad(squad) {
        this._squad = squad;
    }

}