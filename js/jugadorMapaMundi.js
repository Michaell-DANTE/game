function JugadorMapaMundi(posicionInicialEnPixeles)
{

    this.ancho = 48;

    this.alto = 48;


    //Permite modificar la velocidad del personaje
    this.VelocidadMovimiento = 3;

    //Posicionamiento del mapa
    //eliminar decimales Math.trunc() y centrar al jugador
    var centroX = Math.trunc(dimenciones.ancho / 2 - this.ancho / 2);
    var centroY = Math.trunc(dimenciones.alto / 2 - this.alto / 2);


    this.posicionCentrada = new Punto(centroX, centroY);


    //Convertir postivos a negativos y viceversa
    //como todo esta funcionando con valores negativo lo multiplicamos con -1 para aplicar valores positivos
    //para luego no hacer perder a otros desarrolladores :v
    posicionInicialEnPixeles.x *= -1;
    posicionInicialEnPixeles.y *= -1;

    this.posicionEnMapaEnPixeles = new Punto(this.posicionCentrada.x + posicionInicialEnPixeles.x,
                                            this.posicionCentrada.y + posicionInicialEnPixeles.y
                                            );

    this.aplicarEstilos();

}

JugadorMapaMundi.prototype.aplicarEstilos = function()
{

    var idHTML = "jugador";

    document.getElementById(idHTML).style.backgroundColor = "black";
    document.getElementById(idHTML).style.position = "absolute";
    document.getElementById(idHTML).style.left = this.posicionCentrada.x + "px";
    document.getElementById(idHTML).style.top = this.posicionCentrada.y + "px";
    document.getElementById(idHTML).style.width = this.ancho + "px";
    document.getElementById(idHTML).style.height = this.alto + "px";
    document.getElementById(idHTML).style.zIndex = "10";


}

//movimiento del jugador en teclado
JugadorMapaMundi.prototype.actualizar = function(registroTemporal)
{


    if(teclado.teclaPulsada(controlesTeclado.arriba) || teclado.teclaPulsada(controlesTeclado.arriba1))
    {

        this.posicionEnMapaEnPixeles.y += this.VelocidadMovimiento;


    }
    if(teclado.teclaPulsada(controlesTeclado.abajo))
    {

        this.posicionEnMapaEnPixeles.y -= this.VelocidadMovimiento; 

    }
    if(teclado.teclaPulsada(controlesTeclado.izquierda))
    {

        this.posicionEnMapaEnPixeles.x += this.VelocidadMovimiento; 

    }
    if(teclado.teclaPulsada(controlesTeclado.derecha))
    {

        this.posicionEnMapaEnPixeles.x -= this.VelocidadMovimiento; 

    }

}