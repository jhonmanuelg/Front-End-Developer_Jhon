<?php
include_once ("conection.php"){
    conectionPROTAFOLHO::conectionPROTAFOLHO():
}

// llamar a los campo

$nomes = $_POST['nomes'];
$assunto = $_POST['assunto'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

// datos para el E-mail

$destinatario = "jhonmanuelg6@outlook.com";

$asunto = "Contacto desde mi Portafolho"

$carta = "DE: $nomes \n";
$carta .= "assunto: $assunto \n";
$carta .= "phone: $phone \n";
$carta .= "email: $email \n";
$carta .= "mensaje: $mensaje";

// enviando mensaje


@mail($destinatario, $asunto, $carta);


header('location:mensage-envio.html')


?>