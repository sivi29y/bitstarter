<?php
require("class.phpmailer.php");

    $mail = new PHPMailer();

    $mail->IsSMTP();  // telling the class to use SMTP
    $mail->SMTPAuth   = true; // SMTP authentication
    $mail->Host       = "smtp.gmail.com"; // SMTP server
    $mail->Port       = 465; // SMTP Port
    $mail->Username   = "moviply.tv@gmail.com"; // SMTP account username
    $mail->Password   = "abcd1234ABC";        // SMTP account password

    $mail->SetFrom('moviply.tv@gmail.com', 'John Doe'); // FROM
    $mail->AddReplyTo('moviply.tv@gmail.com', 'John Doe'); // Reply TO

    $mail->AddAddress('moviply.tv@gmail.com', 'Jane Doe'); // recipient email

    $mail->Subject    = "First SMTP Message"; // email subject
    $mail->Body       = "Hi! \n\n This is my first e-mail sent through Google SMTP using PHPMailer.";

    if(!$mail->Send()) {
      echo 'Message was not sent.';
      echo 'Mailer error: ' . $mail->ErrorInfo;
    } else {
      echo 'Message has been sent.';
    }
/*require('Mail.php'); */
/*
$myemail = 'moviply.tv@gmail.com';
if (isset($_POST['name'])) {
$name = strip_tags($_POST['name']);
$email = strip_tags($_POST['email']);
$message = strip_tags($_POST['message']);
echo "<span class=\"alert alert-success\" >Your message has been received. Thanks! Here is what you submitted:</span><br><br>";
echo "<stong>Name:</strong> ".$name."<br>";	
echo "<stong>Email:</strong> ".$email."<br>";	
echo "<stong>Message:</strong> ".$message."<br>";


$to = $myemail;
$email_subject = "Contact form submission: $name";
$email_body = "You have received a new message. ".
" Here are the details:\n Name: $name \n ".
"Email: $email\n Message \n $message";
$headers = "From: $myemail\n";
$headers .= "Reply-To: $email";
mail($to,$email_subject,$email_body,$headers);
*/
}?>