<?php

    $pokeId = $_GET["id"];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fiche pokémon n°<?= $pokeId ?></title>
    <link href="style.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet"> 
    <script src='pokeDetails.js'></script>
    <script src="https://kit.fontawesome.com/698848973e.js" crossorigin="anonymous"></script>

    <style>

        ul {
            list-style-type: none;
        }
        ul li {
            margin: 7px 0;
        } 
        #backButton {
            font-size: 1em;
            /* border: 1px solid; */
            padding: 4px 8px;
            border-radius: 5px;
            /* background-color: #e7fff7; */
            transition: all 0.3s;
        }
        #movesDiv {
            height: 300px;
            overflow-y: scroll;
        }
        .navButton {
            font-size: 1em;
            /* border: 1px solid; */
            padding: 4px 8px;
            border-radius: 5px;
            /* background-color: #e7fff7; */
            transition: all 0.3s;
        }
        #navButtonsDiv {
            display: inline-flex;
            padding: 5px 0;
            background-color: #003a70;
            color: white;
            /* margin-top: 15px; */
            width: 100%;
            justify-content: space-between;
        }
        #pokeName {
            text-decoration: underline;
            text-decoration-color: rgba(255,255,255,0);
            text-underline-offset: 50px;
        }

        @media only screen and (max-width: 600px) {
            #pokeName {
                font-size: 2em;
            }
            #pokeImg {
                width: 30%;
            }
        }
    </style>
</head>


<body>

    <?php
        echo "<span id='hiddenId'>" . $pokeId . "</span>";
    ?>

    <div id='mainDetail'>

        <div id='pokeDetailHeader'>
            <img src='' id='pokeImg'>
            <h2 id='pokeName'></h2>
        </div>

        <div id='navButtonsDiv'>
            <a href='' class='navButton' id='previousPokeUrl'><i class="fa-solid fa-angles-left"></i></a>
            <a href='index.html' id='backButton'><i class="fa-solid fa-house"></i></a>
            <a href='' class='navButton' id='nextPokeUrl'><i class="fa-solid fa-angles-right"></i></a>
        </div>

        <div id='pokeDetailContent'>

            <!-- <div id='navButtonsDiv'>
                <a href='' class='navButton' id='previousPokeUrl'>Précédent</a>
                <a href='index.html' id='backButton'>Retour</a>
                <a href='' class='navButton' id='nextPokeUrl'>Suivant</a>
            </div> -->

            <h3 id='typesTitle'>Type(s)</h3>
            <ul id='typesDiv'></ul>

            <br>

            <h3>Stats</h3>
            <ul id='statsDiv'></ul>

            <br>

            <h3 id='abilitiesTitle'>Compétences innées</h3>
            <ul id='abilitiesDiv'></ul>

            <br>

            <h3>Infos</h3>
            <ul id='infosDiv'></ul>

            <br>

            <h3 id='itemsHeldTitle'>Objets tenus</h3>
            <ul id='itemsHeldDiv'></ul>

            <br>

            <h3>Mouvements possibles</h3>
            <ul id='movesDiv'></ul>

        </div>

    </div>


</body>
</html>



