function Punto(x, y)
{

    this.x = x;

    this.y = y;

}


//Saber si ambos puntos son iguales.
Punto.prototype.coincide = function(punto)
{

    return (this.x == punto.x && this.y == punto.y) ? true : false;

}