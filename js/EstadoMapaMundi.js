function EstadoMapaMundi(idEstado)
{

    var that = this;
    this.mapaListo = false;
    this.mapa = null;
    this.jugadorMapaMundi = null;

    ajax.cargarArchivo("mapas/desierto48.json", function(objetoJSON)
    {

        that.mapa = new Mapa(objetoJSON);

        that.mapaListo = true;

        console.log("Mapa cargado");

        //Jugador iniciado (Existe) y da una posicion determinada
        that.jugadorMapaMundi = new JugadorMapaMundi(new Punto(160, 284));

    });


}

//actualiza jugador con el registro temporal
EstadoMapaMundi.prototype.actualizar = function(registroTemporal)
{

    if(!this.mapaListo)
    {

        return;

    }

    this.jugadorMapaMundi.actualizar(registroTemporal);

    this.mapa.actualizar(registroTemporal, this.jugadorMapaMundi.posicionEnMapaEnPixeles);

}


EstadoMapaMundi.prototype.dibujar = function()
{

    if(!this.mapaListo)
    {

        return;

    }

    this.mapa.dibujar();
    
}