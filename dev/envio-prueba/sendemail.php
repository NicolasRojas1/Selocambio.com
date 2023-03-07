<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
  // Información del correo electrónico
  $to_email = "destinatario@example.com";
  $subject = $_POST['subject'];
  $message = $_POST['message'];
  $from_name = $_POST['name'];
  $from_email = $_POST['email'];

  // Adjunto de imagen
  if(isset($_FILES['attachment'])){
    $file_name = $_FILES['attachment']['name'];
    $temp_name = $_FILES['attachment']['tmp_name'];
    $file_type = $_FILES['attachment']['type'];
    $file_size = $_FILES['attachment']['size'];

    $file = fopen($temp_name, "r");
    $content = fread($file, $file_size);
    fclose($file);
    $content = chunk_split(base64_encode($content));

    $boundary = md5("random");
    $header = "From: $from_name <$from_email>\r\n"
            . "MIME-Version: 1.0\r\n"
            . "Content-Type: multipart/mixed; boundary = $boundary\r\n\r\n";

    $message = "--$boundary\r\n"
             . "Content-Type: text/plain; charset=ISO-8859-1\r\n"
             . "Content-Transfer-Encoding: base64\r\n\r\n"
             . base64_encode($message) . "\r\n\r\n"
             . "--$boundary\r\n"
             . "Content-Type: $file_type; name=\"$file_name\"\r\n"
             . "Content-Disposition: attachment; filename=\"$file_name\"\r\n"
             . "Content-Transfer-Encoding: base64\r\n\r\n"
             . $content . "\r\n\r\n"
             . "--$boundary--";

    if (mail($to_email, $subject, $message, $header)) {
      echo "El correo electrónico ha sido enviado con éxito.";
    } else {
      echo "No se pudo enviar el correo electrónico.";
    }
  } else {
    // Sin adjunto de imagen
    $header = "From: $from_name <$from_email>\r\n"
            . "MIME-Version: 1.0\r\n"
            . "Content-Type: text/plain; charset=ISO-8859-1\r\n";

    if (mail($to_email, $subject, $message, $header)) {
      echo "El correo electrónico ha sido enviado con éxito.";
    } else {
      echo "No se pudo enviar el correo electrónico.";
    }
  }
}
?>
