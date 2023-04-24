<?php 

    $moveName = $_GET["moveName"];

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Détails: <?= $moveName ?></title>
    <link href="style.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet"> 
    <script src='moveDetail.js'></script>
    <script src="https://kit.fontawesome.com/698848973e.js" crossorigin="anonymous"></script>

    <style>
        .data {
            font-size: 1.0em;
            font-weight: bold;
        }
    </style>

</head>


<body>


    <?php

        echo "<span id='hiddenId'>" . $moveName . "</span>";
    ?>


    <div id='moveDiv'>
        <div style='display:inline-flex;'>
            <h2 id='moveName' style='margin:0;'></h2><span style='margin-left:15px;'>Action</span>
        </div>

        <h3>Infos</h3>
        <div>
            <p id='moveAccuracy'></p>
            <p id='moveType'></p>
            <p id='moveDmgClass'></p>
            <p id='movePowerPoints'></p>
            <P id='movePriority'></p>
            <p id='movePower'></p>
            <p id='moveTarget'></p>
            <p id='moveEffect'></p>
        </div>
    </div>


</body>