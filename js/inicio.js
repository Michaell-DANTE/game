//---------------------------------------Inicio-------------------------------------------

//carga los eventos de sistema.

var inicio =
{
  
    iniciadores: 
    [

        dimenciones.iniciar(),
        maquinaEstados.iniciar(),
        teclado.iniciar(),
        buclePrincipal.iterar()

    ],

    iniciarJuego: function()
    {
        //shift = vaciar array, cadaves que pase por el array ira borrando su contenido 1 a 1.
        inicio.encadenarInicios(inicio.iniciadores.shift());

    },

    encadenarInicios: function(iniciador)
    {

        if( iniciador )
        {

            //Pasar una funcion como callback
            //() = Funcion anonima
            // -> = Return sobre la marcha
            iniciador(() => inicio.encadenarInicios(iniciadores.shift()));

        }

    }

};

document.addEventListener('DOMContentLoaded', function()
{

    inicio.iniciarJuego();  

}, false);


// NOTA:  DOM = DOCUMENT OBJECT MODEL.