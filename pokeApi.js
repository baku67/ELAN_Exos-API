window.onload = function() {

    

    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }




    const inputNbr = document.querySelector("#inputNbrPoke");

    if(inputNbr.value == null) {
        document.querySelector("#content").innerHTML = "";
    }
    const inputNbrValue = document.querySelector("#inputNbrPoke").value;
    getInfosAPI(inputNbrValue); // nbr inputé


    inputNbr.addEventListener("input", (event) => {

        if(inputNbr.value == null) {
            document.querySelector("#content").innerHTML = "";
        }

        event.preventDefault();
        const inputNbrValue = document.querySelector("#inputNbrPoke").value;
        getInfosAPI(inputNbrValue); // nbr inputé
    })

    function getInfosAPI(nbrPoke) {
        const contentDiv = document.querySelector("#content");


        contentDiv.innerHTML = "";
        for (let i = 1; i < nbrPoke; i++) {
            
            fetch("https://pokeapi.co/api/v2/pokemon/"+ i)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)

                let capitalizedName = capitalize(data.forms[0].name);

                // Gestion du/des types du Pokémon:

                var color = "";
                var color1 = "";
                var color2 = "";
                var bgColor = "";

                if (data.types.length == 1) {
                    // var typeClass = data.types[0].type.name;
                    // var typeClass2 = "";

                    switch (data.types[0].type.name) {

                        case "fire":
                            color = "#ff7600";
                            break;
                        case "water":
                            color = "#0072ff";
                            break;
                        case "poison":
                            color = "#224e06";
                            break;
                        case "grass":
                            color = "#00ff66";
                            break;
                        case "normal":
                            color = "#808080";
                            break;
                        case "electric":
                            color = "#EABB00";
                            break;
                        case "ice":
                            color = "#BDFFF8";
                            break;
                        case "fighting":
                            color = "#FF8C2E";
                            break;
                        case "ground":
                            color = "#863D18";
                            break;
                        case "flying":
                            color = "#56CFED";
                            break;
                        case "psychic":
                            color = "#AA2DDC";
                            break;
                        case "bug":
                            color = "#9FE320";
                            break;
                        case "rock":
                            color = "#6F6057";
                            break;
                        case "ghost":
                            color = "#E7DBED";
                            break;
                        case "dragon":
                            color = "darkBlue";
                            break;
                        case "steel":
                            color = "gray";
                            break;
                        case "dark":
                            color = "black";
                            break;
                        case "fairy":
                            color = "pink";
                            break;
                    }
                    bgColor =  "background-color:"+ color;
                    typesHtml = "<span class='types primaryType'>" + capitalize(data.types[0].type.name) + "</span>";


                }
                else if (data.types.length == 2) {
                    // var typeClass = "";
                    // var typeClass2 = data.types[0].type.name + " " + data.types[1].type.name;
                    
                    switch (data.types[0].type.name) {

                        case "fire":
                            color1 = "#ff7600";
                            break;
                        case "water":
                            color1 = "#0072ff";
                            break;
                        case "poison":
                            color1 = "#224e06";
                            break;
                        case "grass":
                            color1 = "#00ff66";
                            break;
                        case "normal":
                            color1 = "#808080";
                            break;
                        case "electric":
                            color1 = "#EABB00";
                            break;
                        case "ice":
                            color1 = "#BDFFF8";
                            break;
                        case "fighting":
                            color1 = "#FF8C2E";
                            break;
                        case "ground":
                            color1 = "#863D18";
                            break;
                        case "flying":
                            color1 = "#56CFED";
                            break;
                        case "psychic":
                            color1 = "#AA2DDC";
                            break;
                        case "bug":
                            color1 = "#9FE320";
                            break;
                        case "rock":
                            color1 = "#6F6057";
                            break;
                        case "ghost":
                            color1 = "#E7DBED";
                            break;
                        case "dragon":
                            color1 = "darkBlue";
                            break;
                        case "steel":
                            color1 = "gray";
                            break;
                        case "dark":
                            color1 = "black";
                            break;
                        case "fairy":
                            color1 = "pink";
                            break;
                    }

                    switch (data.types[1].type.name) {

                        case "fire":
                            color2 = "#ff7600";
                            break;
                        case "water":
                            color2 = "#0072ff";
                            break;
                        case "poison":
                            color2 = "#224e06";
                            break;
                        case "grass":
                            color2 = "#00ff66";
                            break;
                        case "normal":
                            color2 = "#808080";
                            break;
                        case "electric":
                            color2 = "#EABB00";
                            break;
                        case "ice":
                            color2 = "#BDFFF8";
                            break;
                        case "fighting":
                            color2 = "#FF8C2E";
                            break;
                        case "ground":
                            color2 = "#863D18";
                            break;
                        case "flying":
                            color2 = "#56CFED";
                            break;
                        case "psychic":
                            color2 = "#AA2DDC";
                            break;
                        case "bug":
                            color2 = "#9FE320";
                            break;
                        case "rock":
                            color2 = "#6F6057";
                            break;
                        case "ghost":
                            color2 = "#E7DBED";
                            break;
                        case "dragon":
                            color2 = "darkBlue";
                            break;
                        case "steel":
                            color2 = "gray";
                            break;
                        case "dark":
                            color2 = "black";
                            break;
                        case "fairy":
                            color2 = "pink";
                            break;
                    }
                    bgColor =  "background: linear-gradient(132deg, "+ color1 +" 0%, "+ color2 +" 100%);" ;
                    typesHtml = "<span class='twoTypesCont types'><span class='primaryType'>" + capitalize(data.types[0].type.name) + "</span><span class='secondaryType'>" + capitalize(data.types[1].type.name) + "</span></span>";
                }

                // console.log(typeClass);



                contentDiv.innerHTML += 
                "<a href='pokeDetail.php?id=" + data.id + "'><div style='"+bgColor+"' class='pokeCard'>" +
                    "<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + data.id + ".png' >" + 
                    "<span class='pokeName'>" + capitalizedName + "</span>" +
                    typesHtml +
                "</div></a>"

            })
            .catch((error) => contentDiv.innerHTML = error)
            
        }

    }




    const inputName = document.querySelector("#inputNamePoke");

    inputName.addEventListener("input", (event) => {

        if(inputNbr.value == null) {
            document.querySelector("#content").innerHTML = "";
        }

        event.preventDefault();
        const inputNameValue = document.querySelector("#inputNamePoke").value;
        getInfosAPI2(inputNameValue); // nom inputé
    })


    function getInfosAPI2(namePoke) {

        const contentDiv = document.querySelector("#content");
        contentDiv.innerHTML = "";

        for (let i = 1; i < nbrPoke; i++) {
            
            fetch("https://pokeapi.co/api/v2/pokemon/"+ namePoke)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            });
        }
    }



}