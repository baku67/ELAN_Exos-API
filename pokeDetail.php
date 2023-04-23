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
    <style>
        #pokeDetailContent {
            width: 75%;
            margin: 0 auto;
            opacity: 0;

            animation: fadeIn 0.8s 1s ease forwards;
        }
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        ul {
            list-style-type: none;
        }
        ul li {
            margin: 7px 0;
        } 
        #backButton {
            font-size: 1.5em;
            float: right;
            border: 1px solid;
            padding: 4px 8px;
            border-radius: 5px;
            background-color: aquamarine;
        }
        #movesDiv {
            height: 300px;
            overflow-y: scroll;
        }
    </style>
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

                <a href='PokemonAPI.html' id='backButton'>Retour</a>
                <a href='' id='previousPokeUrl'>Précédent</a>
                <a href='' id='nextPokeUrl'>Suivant</a>

                <h3>Type(s)</h3>
                <ul id='typesDiv'></ul>

                <br>

                <h3>Stats</h3>
                <ul id='statsDiv'></ul>

                <br>

                <h3>Compétences</h3>
                <ul id='abilitiesDiv'></ul>

                <br>

                <h3>Infos</h3>
                <ul id='infosDiv'></ul>

                <br>

                <h3>Objets tenus</h3>
                <ul id='itemsHeldDiv'></ul>

                <br>

                <h3>Mouvements possibles</h3>
                <ul id='movesDiv'></ul>

            </div>
        
        </div>";


        echo "<script src='pokeDetails.js'></script>";
        
    ?>
</body>
</html>


