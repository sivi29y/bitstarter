<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['text'];

//send email
    mail("moviply.tv@gmail.com", "51 Deep comment from" .$email, $message);
}
?>