<?php

    $FirstName = $_POST['firstName'];
    $LastName = $_POST['lastName'];
    $Email = $_POST['email'];
    $messageText = $_POST['messageText'];

    if(!filter_var($Email, FILTER_VALIDATE_EMAIL)){  //check if the mail format is valid or not
      echo 'Email Format not valid';
   }else{
      $subject = $FirstName ."  ".$LastName; //we put the cokmplete name in the subject
      $to = "yelfallouhi@gmail.com";

      $headers = 'From:'.$Email . "\r\n";   //in the headers we put the email sender

      $message = "From: ".$Email." \n".$messageText;
      // $headers .= "Content-type: text/html\r\n";

      $emailSend = mail ($to, $subject, $message, $headers);  //send the email with all the parameters we need
         
      if( $emailSend == true ) {          //if the email send ot not we send a message 
         echo "Message sent successfully...";
      }else {
         echo "Message could not be sent..........";
      }
       
   }



