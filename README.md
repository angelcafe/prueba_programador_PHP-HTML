# prueba_programador_PHP-HTML
PRUEBA PROGRAMADOR PHP/HTLM

Realizar una página que:

- Contenga un div contenedor y varios div “externos”.
- Los externos podrán moverse (drag and drop) dentro del div contenedor y quedarse en una posición dentro del área del contenedor.
- En caso de superposición de dos divs externos (dentro del contenedor), el que ha sido movido retornará a la posición anterior.
- El color de los div externos cambiará en función de su posición dentro del div contenedor (naranja a la derecha del todo, azul a la izquierda del todo, colores intermedios en las posiciones intermedias)
- Sincronizará con una página PHP en la que guardará las posiciones (en /tmp/posiciones.json) para en caso de recarga poder ver las posiciones donde se dejaron.
