function CapaMapaTiles(datosCapa, indiceZ, anchoDeLosTiles, altoDeLosTiles, paletaSprites)
{

    this.anchoEntiles = parseInt(datosCapa.width);
    this.altoEntiles = parseInt(datosCapa.height);
    this.x = parseInt(datosCapa);
    this.y = parseInt(datosCapa);
    this.z = indiceZ;
    this.tiles = [];


    for( y = 0; y < this.altoEntiles; y++ )
    {

        for ( x = 0; x < this.anchoEntiles; x++ )
        {

            var idSpriteActualSobreUno = datosCapa.data[x + y * this.anchoEntiles];
            if( idSpriteActualSobreUno == 0 )
            {

                this.tiles.push(null);

            }else{

                var spriteActual = this.encontrarSpriteEnPaletaPorId(idSpriteActualSobreUno - 1, paletaSprites);

                this.tiles.push(new Tile(x, y, indiceZ, anchoDeLosTiles, altoDeLosTiles, spriteActual));

            }

        }

    }

}


CapaMapaTiles.prototype.encontrarSpriteEnPaletaPorId = function(idSpriteSobreZero, paletaSprites)
{

    //convertimos los sprites que es 1 y lo pasamos a ser 0
    //y comprovamos el tamaño de sprites
    for( s = 0; s < paletaSprites.length; s++ )
    {

        if( idSpriteSobreZero >= paletaSprites[s].primerSpriteSobreUno - 1 && 
            idSpriteSobreZero < paletaSprites[s].totalSprites + paletaSprites[s].primerSpriteSobreUno + 1 )
        {

            //obtener id actual
            return paletaSprites[s].sprites[Math.abs( paletaSprites[s].primerSpriteSobreUno - 1 - idSpriteSobreZero)];

        }
    } 

    throw "El id sobre zero" + idSpriteSobreZero + "del sprite no existe en ninguna paleta";

}