//---------------------------------------Dimenciones-------------------------------------------

var dimenciones =
{

    ancho: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,

    alto: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,

    ladoTiles : 100,
    escala: 1, 

    /**
     * iniciar
     * Permite saber el ancho y alto de una pantalla.
    */  
    iniciar: function()
    {
        
        window.addEventListener("resize", function(evento)
        {

            dimenciones.ancho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            dimenciones.alto = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

            console.log("ANCHO: " + dimenciones.ancho + " --- ALTO: " + dimenciones.alto);
            inicio.recargarTitles();

        });

    },

    obtenerTilesHorizontales: function()
    {

        //Escalar ancho
        var ladoFinal = dimenciones.ladoTiles * dimenciones.escala;
        
        return Math.ceil((dimenciones.ancho - ladoFinal) / ladoFinal);
    },

    obtenerTilesVerticales: function()
    {

        //Escalar alto
        var ladoFinal = dimenciones.ladoTiles * dimenciones.escala;
        
        return Math.ceil((dimenciones.alto - ladoFinal) / ladoFinal);        

    },

    //saber cuantos rectangulos caben en la pantalla
    obtenerTotalTiles: function()
    {

        return dimenciones.obtenerTilesHorizontales() * dimenciones.obtenerTilesVerticales();

    }

};