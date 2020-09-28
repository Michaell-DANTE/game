//---------------------------------------Bucle Principal-------------------------------------------

//namespace - esapcio de nombres(tipo clases)
//main loop - bucle principal
//aps - actualizaciónes por segundo
//fps - frames por segundo

//callback - metodo dentro de otro metodo

//1sg = 1000 msg

var buclePrincipal = 
{

    idEjecucion: null,
    ultimoRegistro: 0,
    aps: 0,
    fps: 0,

    /**
     * iterar
     * Permite iniciar un bucle constante.
     * @param  numeric registroTemporal
     * @return 0
    */  
    iterar: function(registroTemporal)
    {

        buclePrincipal.idEjecucion = window.requestAnimationFrame(buclePrincipal.iterar);

        buclePrincipal.actualizar(registroTemporal);

        buclePrincipal.dibujar();


        /*
         * Cada ves que pase 1sg se cumplira esta condicion.
         * Permite saber el conteo de FPS Y APS del sistema.
        */
        if( registroTemporal - buclePrincipal.ultimoRegistro > 999 )
        {

            buclePrincipal.ultimoRegistro = registroTemporal;

            console.log("APS: " + buclePrincipal.aps + " --- FPS: " + buclePrincipal.fps);

            buclePrincipal.aps = 0;
            buclePrincipal.fps = 0;

        }

    },

    /**
     * detener
     * 
     * 
     * 
    */
    detener: function()
    {

         

    },

    /**
     * actualizar
     * Cada vez que le bucle pase esta funcion aumentara su valor.
     * @param  numeric registroTemporal
    */
    actualizar: function(registroTemporal)
    {


        maquinaEstados.actualizar(registroTemporal);
        buclePrincipal.aps++;

    },

    /**
     * dibujar
     * Cada vez que le bucle pase esta funcion aumentara su valor.
     * @param  numeric registroTemporal
    */
    dibujar: function(registroTemporal)
    {
        maquinaEstados.dibujar();
        buclePrincipal.fps++;

    }

};