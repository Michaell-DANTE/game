<?php

    $fecha = new DateTime();

    $fuentesJavascript = array
    (
        "js/dimenciones.js",
        "js/jugadorMapaMundi.js",
        "js/Rectangulo.js",
        "js/Sprites.js",
        "js/Tile.js",
        "js/CapaMapaTiles.js",
        "js/PaletaSprites.js",
        "js/listadoEstados.js",
        "js/ajax.js",
        "js/EstadoMapaMundi.js",
        "js/maquinaEstados.js",
        "js/Punto.js",
        "js/Mapa.js",
        "js/controlesTeclado.js",
        "js/teclado.js",
        "js/buclePrincipal.js",
        "js/inicio.js"

    );

    foreach($fuentesJavascript as $fuente)
    {

        echo '<script src="'.$fuente.'?' .$fecha -> getTimestamp(). '"></script>';
        echo nl2br("\n");

    }

?>