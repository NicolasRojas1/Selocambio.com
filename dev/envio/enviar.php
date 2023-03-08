<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre = $_POST['send_user_name'];
    $email = $_POST['send_user_email'];
    $telefono = $_POST['send_user_phone'];
    $titulo = $_POST['send_post_name'];
    $descrip = $_POST['send_post_descrip'];

    // Guardar imagen en el servidor
    $rutaImagen = 'imagenes/' . $_FILES['send_post_photo']['name'];
    move_uploaded_file($_FILES['imagen']['tmp_name'], $rutaImagen);

    // Enviar correo electrónico con los datos del formulario y la imagen adjunta
    $to = 'sanchezlopezadolfo@gmail.com';
    $subject = 'Nueva oferta';
    $message = "Nombre: $nombre\nEmail: $email\nTeléfono: $telefono";
    $headers = "From: Selocambio.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"boundary\"\r\n";

    $content = "--boundary\r\n";
    $content .= "Content-Type: text/plain; charset=\"utf-8\"\r\n";
    $content .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $content .= "$titulo\r\n\r\n";

    $content .= "--boundary\r\n";
    $content .= "Content-Type: application/octet-stream; name=\"" . basename($rutaImagen) . "\"\r\n";
    $content .= "Content-Transfer-Encoding: base64\r\n";
    $content .= "Content-Disposition: attachment\r\n\r\n";
    $content .= chunk_split(base64_encode(file_get_contents($rutaImagen))) . "\r\n\r\n";

    $content = "--boundary\r\n";
    $content .= "Content-Type: text/plain; charset=\"utf-8\"\r\n";
    $content .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $content .= "$descrip\r\n\r\n";

    $content .= "--boundary--";

    mail($to, $nombre, $titulo, $header);

    // Redireccionar a una página de confirmación
    header('Location: ../../html/procesando.html');
    exit;
}
