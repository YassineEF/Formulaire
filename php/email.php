<?php

    $FirstName = $_POST['firstName'];
    $LastName = $_POST['lastName'];
    $Email = $_POST['email'];
    $MessageText = $_POST['message'];

    $completeName = $FirstName ."  ".$LastName; 
    $to = "yelfallouhi@gmail.com";

    $headers = "From:jujo@lolo.it \r\n";

    // $headers .= "Content-type: text/html\r\n";

    $emailSend = mail ($to,$completeName,$MessageText,$headers);
         
    if( $emailSend == true ) {
       echo "Message sent successfully...";
    }else {
       echo "Message could not be sent..........";
    }