function Mapa(objetoJSON)
{

    this.posicion = new Punto(0, 0);
    this.posicionActualizada = new Punto(0, 0);

    this.anchoMedidoEnTiles = parseInt(objetoJSON.width);
    this.altoMedidoEnTiles = parseInt(objetoJSON.height);
    this.anchoDeLosTiles = parseInt(objetoJSON.tilewidth);
    this.altoDeLosTiles = parseInt(objetoJSON.tileheight);

    this.paletasSprites = [];
    this.iniciarPaletasSprites(objetoJSON.tilesets);

    this.capasTiles = [];
    this.iniciarCapas(objetoJSON.layers);

    this.iniciarRejilla();

}

Mapa.prototype.iniciarPaletasSprites = function(datosCapas)
{

    for( i = 0; i < datosCapas.length; i++ )
    {

        this.paletasSprites.push(new PaletaSprites(datosCapas[i]));

    }

}

Mapa.prototype.iniciarCapas = function(datosCapas)
{

    for( i = 0; i < datosCapas.length; i++ )
    {

        switch(datosCapas[i].type)
        {

            case "tilelayer":
                this.capasTiles.push(new CapaMapaTiles(datosCapas[i], i, this.anchoDeLosTiles, this.altoDeLosTiles, this.paletasSprites));
            break;

            case "objectgroup":
            break;

        }        

    }

}

Mapa.prototype.iniciarRejilla = function()
{

    var anchoMapaEnPixeles = this.anchoMedidoEnTiles * this.anchoDeLosTiles;
    var altoMapaEnPixeles = this.altoMedidoEnTiles * this.altoDeLosTiles;

    var html = "";
    //Texto js
    for (ct = 0; ct < this.capasTiles.length; ct++)
    {

        for(t = 0; t < this.capasTiles[ct].tiles.length; t++)
        {

            if( this.capasTiles[ct].tiles[t] == null )
            {

                continue;

            }

            var tileActual = this.capasTiles[ct].tiles[t];

            html += tileActual.html;

        }

    }

    document.getElementById("mapa").innerHTML = html;
    //Aplicar estilos al html
    for (ct = 0; ct < this.capasTiles.length; ct++)
    {

        for(t = 0; t < this.capasTiles[ct].tiles.length; t++)
        {

            if( this.capasTiles[ct].tiles[t] == null )
            {

                continue;

            }

            var tileActual = this.capasTiles[ct].tiles[t];
            tileActual.aplicarEstilos();

        }

    }

    document.getElementsByTagName("body")[0].style.overflow = "hidden";

}

//Actualiza dentro del mapa las acciones
Mapa.prototype.actualizar = function(registroTemporal, posicionJugadorEnPixeles)
{

    this.posicion.x = posicionJugadorEnPixeles.x;
    this.posicion.y = posicionJugadorEnPixeles.y;

    console.log(this.posicion.x + "---" + this.posicion.y);

}


//Dibuja dentro del mapa lo que este sucesiendo o las acciones que le digamos
Mapa.prototype.dibujar = function()
{

    for( c = 0; c < this.capasTiles.length; c++ )
    {

        for( i = 0; i < this.capasTiles[c].tiles.length; i++ )
        {

            this.capasTiles[c].tiles[i].mover(this.posicion.x, this.posicion.y);

        }

    }

    var r1 = new Rectangulo(this.posicion.x, this.posicion.y, this.anchoMedidoEnTiles * this.anchoDeLosTiles,
         this.altoMedidoEnTiles * this.altoDeLosTiles);

    var r2 = new Rectangulo(381.5, 304.5, 48, 48);

    if (r1.cruza(r2))
    {

        console.log("contacto");

    }else{

        console.log("sin contacto");

    }

}