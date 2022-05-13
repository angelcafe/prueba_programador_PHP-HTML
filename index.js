$(function () {
    var posiciones = [
        {left: 0, top: 0},
        {left: $('#cuadro2').position().left, top: 0},
        {left: $('#cuadro3').position().left, top: $('#cuadro3').position().top}
    ];
    $.getJSON('datos.php?posicion_leer')
        .done(function (datos) {
            if (typeof datos === 'object') {
                posiciones = datos;
                colocarCuadros();
            }
        });
    $("#cuadro1, #cuadro2, #cuadro3")
        .draggable({
            start: function (event, ui) {
                $(this)
                    .draggable("option", "revert", false);
            },
            stop: function (event, ui) {
                let cuadro = $(this).attr("id").substr(-1) - 1;
                posiciones[cuadro].left = parseInt($(this).position().left);
                posiciones[cuadro].top = parseInt($(this).position().top);
                guardarPosiciones();
            }
        })
        .droppable({
            disabled: true,
            drop: function (event, ui) {
                $(ui.draggable[0])
                    .draggable("option", "revert", true);
            },
            tolerance: "touch"
        });
    $("#contenedor")
        .droppable({
            drop: function (event, ui) {
                $(ui.draggable[0])
                    .droppable("enable");
                cambiarColor(ui.draggable[0]);
            },
            out: function (event, ui) {
                $(ui.draggable[0])
                    .css("background-color", "rgb(255,255,255)")
                    .droppable("disable");
            }
        });
    function cambiarColor(elemento) {
        let margenenes = 10;
        let unidad = (255 / $('#contenedor').width());
        let posicion_horizontal = $(elemento).position().left - $(elemento).width();
        let color = parseInt(posicion_horizontal * unidad - margenenes);
        let rojo = Math.abs(color);
        let verde = Math.abs(color / 2);
        let azul = Math.abs(color * -1 + 255);
        $(elemento)
            .css("background-color", `rgb(${rojo}, ${verde}, ${azul})`);
    }
    function colocarCuadros() {
        posiciones.forEach( function(valor, posicion) {
            let elemento = $('#cuadro' + (posicion + 1));
            elemento.css({ left: valor.left, top: valor.top });
            cambiarColor(elemento);
        });
    }
    function guardarPosiciones() {
        $.ajax({
            type: "POST",
            url: 'datos.php',
            data: JSON.stringify(posiciones),
            contentType: 'application/json'
          });
    }
});