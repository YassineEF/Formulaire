<?php

    $FirstName = $_POST['firstName'];
    $LastName = $_POST['lastName'];
    $Email = $_POST['email'];
    $messageText = $_POST['messageText'];

    $subject = $FirstName ."  ".$LastName; 
    $to = "yelfallouhi@gmail.com";

    $headers = 'From:'.$Email . "\r\n";

    $message = "From: ".$Email." \n".$messageText;
    // $headers .= "Content-type: text/html\r\n";

    $emailSend = mail ($to, $subject, $message, $headers);
         
    if( $emailSend == true ) {
       echo "Message sent successfully...";
    }else {
       echo "Message could not be sent..........";
    }