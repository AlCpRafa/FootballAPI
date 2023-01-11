export class Player {
    constructor(name, birth_country, country_img, age, height, foot, league, club, club_img, position, market_value, images){
        this._name = name;
        this._birth_country = birth_country;
        this._country_img = country_img;
        this._age = age;
        this._height = height;
        this._foot = foot;
        this._league = league;
        this._club = club;
        this._club_img = club_img;
        this._position = position;
        this._market_value = market_value;
        this._images = images;
    }

    get getName() {
        return this._name;
    }

    set setName(name) {
        this._name = name;
    }

    get getBirth_country() {
        return this._birth_country;
    }

    set setBirth_country(birth_country) {
        this._birth_country = birth_country;
    }

    get getCountry_img() {
        return this._country_img;
    }

    set setCountry_img(country_img) {
        this._country_img = country_img;
    }

    get getAge() {
        return this._age;
    }

    set setAge(age) {
        this._age = age;
    }

    get getHeight() {
        return this._height;
    }

    set setHeight(height) {
        this._height = height;
    }

    get getFoot() {
        return this._foot;
    }

    set setFoot(foot) {
        this._foot = foot;
    }

    get getLeague() {
        return this._league;
    }

    set setLeague(league) {
        this._league = league;
    }

    get getClub() {
        return this._club;
    }

    set setClub(club) {
        this._club = club;
    }

    get getClub_img() {
        return this._club_img;
    }

    set setClub_img(club_img) {
        this._club_img = club_img;
    }

    get getPosition() {
        return this._position;
    }

    set setPosition(position) {
        this._position = position;
    }

    get getMarket_value() {
        return this._market_value;
    }

    set setMarket_value(market_value) {
        this._market_value = market_value;
    }

    get getImages() {
        return this._images;
    }

    set setImages(images) {
        this._images = images;
    }

}