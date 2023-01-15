// Clase de cada equipo de la tabla de la liga
export class TeamRow {
    constructor(id, rank, name, image, points, goals, goalscon, goalsdif, matches, wins, losses, draw, color){
        this._id = id;
        this._name = name;
        this._rank = rank;
        this._image = image;
        this._points = points;
        this._goals = goals;
        this._goalscon = goalscon;
        this._goalsdif = goalsdif;
        this._matches = matches;
        this._wins = wins;
        this._losses = losses;
        this._draw = draw;
        this._color = color;
    }

    get getId() {
        return this._id;
    }

    set setId(id) {
        this._id = id;
    }

    get getRank() {
        return this._rank;
    }

    set setRank(rank) {
        this._rank = rank;
    }

    get getName() {
        return this._name;
    }

    set setName(name) {
        this._name = name;
    }

    get getImage() {
        return this._image;
    }

    set setImage(image) {
        this._image = image;
    }

    get getPoints() {
        return this._points;
    }

    set setPoints(points) {
        this._points = points;
    }

    get getGoals() {
        return this._goals;
    }

    set setGoals(goals) {
        this._goals = goals;
    }

    get getGoalscon() {
        return this._goalscon;
    }

    set setGoalscon(goalscon) {
        this._goalscon = goalscon;
    }

    get getGoalsdif() {
        return this._goalsdif;
    }

    set setGoalsdif(goalsdif) {
        this._goalsdif = goalsdif;
    }

    get getMatches() {
        return this._matches;
    }

    set setMatches(matches) {
        this._matches = matches;
    }

    get getWins() {
        return this._wins;
    }

    set setWins(wins) {
        this._wins = wins;
    }

    get getLosses() {
        return this._losses;
    }

    set setLosses(losses) {
        this._losses = losses;
    }

    get getDraw() {
        return this._draw;
    }

    set setDraw(draw) {
        this._draw = draw;
    }

    get getColor() {
        return this._color;
    }

    set setColor(color) {
        this._color = color;
    }

}