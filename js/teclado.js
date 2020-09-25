var teclado = 
{
    //Array va a coleccionar teclas.
    teclas: new Array(),

    iniciar: function()
    {

        document.onkeydown = teclado.guardarTecla;

    },

    guardarTecla: function(e)
    {

        teclado.teclas.push(e.key);
        console.log(e.key);

    },

    //saber que tecla estoy oprimiendo
    teclaPulsada: function(codigoTecla)
    {

        return (teclado.teclas.indexOf(codigoTecla) !== -1) ? true : false;

    },

    reiniciar: function()
    {

        teclado.teclas = new Array();

    }

};