function PaletaSprites(datosSprites)
{

    //Carga tilesets
    this.rutaImagen = datosSprites.image;
    
    this.anchoImagen = parseInt( datosSprites.imagewidth);
    this.altoImagen = parseInt( datosSprites.imageheight);

    this.anchoSprites = parseInt( datosSprites.tilewidth);
    this.altoSprites = parseInt( datosSprites.tileheight);

    this.primerSpriteSobreUno = parseInt(datosSprites.firstgid);

    this.anchoImagenMedioEnSprites = this.anchoImagen / this.anchoSprites;
    this.altoImagenMedioEnSprites = this.altoImagen / this.altoSprites;
    this.totalSprites = this.anchoImagenMedioEnSprites * this.altoImagenMedioEnSprites;

    this.sprites = [];

    //Guarda todos los esprites
    for( s = 0; s < this.totalSprites; s++ )
    {

        var idActualSobreZero = this.primerSpriteSobreUno - 1 + s;

        this.sprites.push(new Sprite(this.rutaImagen, idActualSobreZero, this.obtenerPosicionDesdeIdSprite(idActualSobreZero)));

    }
}

PaletaSprites.prototype.obtenerPosicionDesdeIdSprite = function(idSpriteSobreZero)
{

    var y = Math.floor(idSpriteSobreZero / this.anchoImagenMedioEnSprites);

    var x = idSpriteSobreZero % this.anchoImagenMedioEnSprites;

    return new Punto(x * this.anchoSprites, y * this.altoSprites);

}