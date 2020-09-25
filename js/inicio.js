//---------------------------------------Inicio-------------------------------------------

//carga los eventos de sistema.
document.addEventListener('DOMContentLoaded', function()
{

inicio.iniciarJuego();  

}, false);

var inicio =
{
    /**
     * iniciarJuego
     * Ejecuta todos los procesos del sistema.
    */ 
    iniciarJuego: function()
    {

        ajax.cargarArchivo("img/mapas/mundo1.json")
        teclado.iniciar();
        dimenciones.iniciar();
        inicio.recargarTitles();
        buclePrincipal.iterar();

    },

    recargarTitles: function()
    {

        document.getElementById("juego").innerHTML  = "";

        for( var y = 0; y < dimenciones.obtenerTilesVerticales(); y++)
        { 

            for( var x = 0; x < dimenciones.obtenerTilesHorizontales(); x++)
            { 

                var r = new Rectangulo(x * dimenciones.ladoTiles, y * dimenciones.ladoTiles,
                dimenciones.ladoTiles, dimenciones.ladoTiles);

            }

        }

    }

};

// NOTA:  DOM = DOCUMENT OBJECT MODEL.