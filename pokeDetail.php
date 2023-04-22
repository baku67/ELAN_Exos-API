<?php

    $pokeId = $_GET["id"];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="style.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>

    <?php
        echo "<span id='hiddenId'>" . $pokeId . "</span>";

        echo "<div id='mainDetail'>

            <div id='pokeDetailHeader'>
                <img src='' id='pokeImg'>
                <h2 id='pokeName'></h2>
            </div>

            <div id='pokeDetailContent'>
                
            </div>
        
        </div>";


        echo "<script src='pokeDetails.js'></script>";
        
    ?>
</body>
</html>



