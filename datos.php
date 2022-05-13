<?php
// $fichero = '/tmp/posiciones.json';
$fichero = 'posiciones.json';
if ($json = file_get_contents('php://input')) {
    $fo = fopen($fichero, 'w');
    fwrite($fo, $json);
} elseif (isset($_GET['posicion_leer'])) {
    if (file_exists($fichero)) {
        $fo = fopen($fichero, 'r');
        $datos = fread($fo, filesize($fichero));
        echo $datos;
    }
}