export class League {
    constructor (id, title, image){
        this._id = id;
        this._title = title;
        this._image = image;
    }
   
    get getNombre() {
        return this._id;
    }

    set setNombre(nombre) {
        this._id = id;
    }

    get getTitle() {
        return this._title;
    }

    set setTitle(title) {
        this._title = title;
    }

    get getImage() {
        return this._image;
    }

    set setImage(image) {
        this._image = image;
    }

}