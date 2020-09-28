var teclado = 
{
    //Array va a coleccionar teclas.
    teclas: new Array(),

    iniciar: function()
    {

        //evento al presionar tecla guarda en el array
        document.onkeydown = teclado.guardarTecla;
        //evento al soltar tecla borra del array
        document.onkeyup = teclado.borrarTecla;

    },

    //Guarda tecla
    guardarTecla: function(e)
    {

        if (teclado.teclas.indexOf(e.key)==-1)
        {

            teclado.teclas.push(e.key);
            // console.log(e.key);

        }
        

    },

    borrarTecla: function(e)
    {

        //captura la posicion de la tecla de un array
        var posicion = teclado.teclas.indexOf(e.key);

        if(posicion !== -1)
        {

            teclado.teclas.splice(posicion, 1);

        }

    },

    //saber que tecla estoy oprimiendo
    teclaPulsada: function(codigoTecla)
    {

        return (teclado.teclas.indexOf(codigoTecla) !== -1) ? true : false;

    }
};