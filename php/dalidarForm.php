<?php
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     <?php
if(isset($_POST['submit'])) {
    $error = false;

    // Validación de la variable "names"
    if(empty($_POST['names'])) {
        $error = true;
        $name_error = "Por favor, introduzca su nombre.";
    } else {
        $names = $_POST['names'];
        // Si el nombre contiene números o caracteres especiales, mostrar error
        if (!preg_match("/^[a-zA-Z ]*$/",$names)) {
            $error = true;
            $name_error = "El nombre debe contener solamente letras y espacios en blanco.";
        }
    }

    // Validación de la variable "email"
    if(empty($_POST['email'])) {
        $error = true;
        $email_error = "Por favor, introduzca su correo electrónico.";
    } else {
        $email = $_POST['email'];
        // Si el correo electrónico no tiene el formato correcto, mostrar error
        if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $error = true;
            $email_error = "Por favor, introduzca un correo electrónico válido.";
        }
    }

    // Validación de la variable "phone"
    if(empty($_POST['phone'])) {
        $error = true;
        $phone_error = "Por favor, introduzca su número de teléfono.";
    } else {
        $phone = $_POST['phone'];
        // Si el número de teléfono contiene letras o caracteres especiales, mostrar error
        if(!preg_match("/^[0-9]+$/",$phone)) {
            $error = true;
            $phone_error = "El número de teléfono debe contener solamente números.";
        }
    }

    // Validación de la variable "assunto"
    if(empty($_POST['assunto'])) {
        $error = true;
        $assunto_error = "Por favor, introduzca el asunto del mensaje.";
    } else {
        $assunto = $_POST['assunto'];
    }

    // Validación de la variable "mensaje"
    if(empty($_POST['mensaje'])) {
        $error = true;
        $mensaje_error = "Por favor, introduzca su mensaje.";
    } else {
        $mensaje = $_POST['mensaje'];
    }

    // Si no hay errores, enviar el correo electrónico
    if(!$error) {
        $to = "destinatario@example.com"; // Cambiar por el correo electrónico del destinatario
        $subject = "Mensaje de contacto";
        $message = "Nombre: " . $names . "\r\nCorreo electrónico: " . $email . "\r\nTeléfono: " . $phone . "\r\nAsunto: " . $assunto . "\r\nMensaje: " . $mensaje;
        $headers = "From: remitente@example.com"; // Cambiar por el correo electrónico del remitente

        if(mail($to, $subject, $message, $headers)) {
            $success_message = "El mensaje ha sido enviado correctamente.";
        } else {
            $error_message = "Ha habido un error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.";
        }
    }
}

?>
