<?php

    if (isset($_POST['submit'])){
        $name = $_POST['name'];
        $tel = $_POST['telephone'];
        $email = $_POST['email'];
        $org = $_POST['organizationn_name'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        $mail_to = "rsokhashvili@gtgroupe.ge";
        $headers = "ვისგან: " . $email . ".\n"
                 . "სახელი : " . $name . "\n" 
                 . ". ორგანიზაციის სახელი : " . $org . 
                 ".\n\n";
        $txt = "შეტყობინება : " .  $message;


        mail($mail_to, $subject, $txt, $headers);
        header("Location : index.php?mailsend");

    }
