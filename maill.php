<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>GT Groupe</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="maill   .css" />

   
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="fonts/fonts.css">
    <link rel="stylesheet" href="maill.css">
    <link rel="stylesheet" href="style.css">    
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/bootstrap-dropdownhover.min.css" rel="stylesheet">
 

    <script src="js/jquary.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="js.1/bootstrap.min.js" ></script>
    <script src="src/dropdown.js"></script>
    
    
    

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

</head>
<body>
    


<?php
    include("includes/header_nav.php");
?>
    






<div class="contact_form animated" onclick="form_anim(this)" >

    <form action="php_files/contact_form.php" method="post">

        <div class="input">
            <label for="text">Full Name <span style = "color:red;">*</span> </label> 
            <input type="text" name = "name" require>
            <span class="underline-animation"></span>
        </div>  

        <div class="input">
            <label for="tel">Telephone <span style = "color:red;">*</span> </label> 
            <input type="tel" name="telephone" id="">
            <span class="underline-animation"></span>
        </div> 
        
        <div class="input">
            <label for="email">Email <span style = "color:red;">*</span></label> 
            <input type="email" name="email" id="">
            <span class="underline-animation"></span>
        </div> 

        <div class="input">
            <label for="text">Organization Name (optional)</label> 
            <input type="text" name = "organization_name">
            <span class="underline-animation"></span>
        </div> <br>

        <div class="input">
            <label for="text">Subject <span style = "color:red;">*</span></label> 
            <input type="text" name = "subject">
            <span class="underline-animation"></span>
        </div> <br>

        <div class="input">     
            <label for="Message">Message:</label> 
            <textarea name="message" rows="7" cols="20" id="message"></textarea>
        </div>
        
        
        <input type="submit" name="submit" value="Submit" />
    </form>

</div>

<?php 
 
    echo $msg;
?>


<?php
    include("includes/footer.php");
?>



</body>
</html>