<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  exit();
}

$fields = ['name', 'email', 'subject', 'message'];
foreach ($fields as $field) {
  if (!isset($_POST[$field]) || !is_string($_POST[$field]) || trim($_POST[$field]) === '') {
    http_response_code(400);
    exit();
  }
}

$email = trim($_POST['email']);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  exit();
}

// Les retours à la ligne sont retirés des champs utilisés dans les en-têtes de l'e-mail.
$name = trim(str_replace(["\r", "\n"], ' ', strip_tags($_POST['name'])));
$m_subject = trim(str_replace(["\r", "\n"], ' ', strip_tags($_POST['subject'])));
$message = strip_tags($_POST['message']);

$to = "Ghalifedi@gmail.com";
$subject = "=?UTF-8?B?" . base64_encode("Site web - $m_subject : $name") . "?=";
$body = "Nouveau message reçu depuis le formulaire de contact du site.\n\n"
  . "Nom : $name\n"
  . "E-mail : $email\n"
  . "Objet : $m_subject\n\n"
  . "Message :\n$message\n";

$host = preg_replace('/[^a-z0-9.-]/i', '', $_SERVER['SERVER_NAME'] ?? 'localhost');
$headers = "From: no-reply@$host\r\n"
  . "Reply-To: $email\r\n"
  . "MIME-Version: 1.0\r\n"
  . "Content-Type: text/plain; charset=UTF-8\r\n";

if (!mail($to, $subject, $body, $headers)) {
  http_response_code(500);
}
