class VideoGame {
    constructor(marca, nControles, tipoMidia){
        this._marca = marca;
        this._nControles = nControles;
        this._tipoMidia = tipoMidia;
    }

}

var playstation = new VideoGame('sony', '2', 'dvd');
console.log(playstation);