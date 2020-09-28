var ajax =
{

    cargarArchivo: function(ruta, manipularDatos)
    {

        var peticion = new XMLHttpRequest();

        peticion.onreadystatechange = function()
        {
            /* ESTADOS
                0/ USENT - no inicia
                1/ OPENED - conectado al sevidor
                2/ HEADERS_RECIVED - petición recivida  
                3/ LOADING - procesando la petición
                4/ DONE - petición finalizada, respuesta preparada
            */

            if ( peticion.readyState == XMLHttpRequest.DONE )
            {

                if (  peticion.status == 200 )
                {

                    manipularDatos(JSON.parse(peticion.responseText));

                }else if ( peticion.status == 400 )
                {

                    console.log("Error");

                }else{

                    console.log("Resultado inesperado");

                }

            }


        };

        peticion.open("GET", ruta, true);
        peticion.send();

    }

};