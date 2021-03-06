var maquinaEstados =
{

    estadoActual: null,

    iniciar: function()
    {

        maquinaEstados.cambiarEstado(listadoEstados.MAPAMUNDI);
    },

    cambiarEstado: function(nuevoEstado)
    {

        switch(nuevoEstado)
        {

            case listadoEstados.CARGANDO:
            break;

            case listadoEstados.MENU_INICIAL: 
            break;

            case listadoEstados.MAPAMUNDI:
                //identificador de estado
                maquinaEstados.estadoActual = new EstadoMapaMundi(listadoEstados.MAPAMUNDI);
            break;
 
            case listadoEstados.NIVEL:
            break;

        }

    },

    actualizar: function(registroTemporal)
    {

        maquinaEstados.estadoActual.actualizar(registroTemporal);
        console.log(teclado.teclas);

    },

    dibujar: function()
    {

        maquinaEstados.estadoActual.dibujar();

    }

}