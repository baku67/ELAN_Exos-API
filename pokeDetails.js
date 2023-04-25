window.onload = function() {

    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    
    
    // const pokeName = document.querySelector("#pokeName");
    const pokeId = document.querySelector("#hiddenId").innerHTML;

    fetch("https://pokeapi.co/api/v2/pokemon/"+ pokeId)
    .then((response) => response.json())
    .then((data) => {

    
        console.log(data)


        // Header pokeDetail
        let imgSrc = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + data.id + ".png";

        document.querySelector("#pokeName").innerHTML = capitalize(data.name);
        document.querySelector("#pokeImg").setAttribute("src", imgSrc);

        var color = "";
        var color1 = "";
        var color2 = "";
        var backgroundColor = "";
        var backgroundColor1 = "";
        var backgroundColor2 = "";


        // Background-color Header
        if (data.types.length == 1) {

            switch (data.types[0].type.name) {

                case "fire":
                    color = "#ff7600";
                    backgroundColor = "#FFE2CA";
                    break;
                case "water":
                    color = "#0072ff";
                    backgroundColor = "#C6DFFF";
                    break;
                case "poison":
                    color = "#224e06";
                    backgroundColor = "#BBD8A7";
                    break;
                case "grass":
                    color = "#00ff66";
                    backgroundColor = "#BBFFD7";
                    break;
                case "normal":
                    color = "#808080";
                    backgroundColor = "#E1E1E1";
                    break;
                case "electric":
                    color = "#EABB00";
                    backgroundColor = "#FFF891";
                    break;
                case "ice":
                    color = "#BDFFF8";
                    backgroundColor = "#BBFFF7";
                    break;
                case "fighting":
                    color = "#FF8C2E";
                    backgroundColor = "#FFDCBF";
                    break;
                case "ground":
                    color = "#863D18";
                    backgroundColor = "#E7C9BA";
                    break;
                case "flying":
                    color = "#56CFED";
                    backgroundColor = "#B9F2FF";
                    break;
                case "psychic":
                    color = "#AA2DDC";
                    backgroundColor = "#E7BFF8";
                    break;
                case "bug":
                    color = "#9FE320";
                    backgroundColor = "#DDF4B3";
                    break;
                case "rock":
                    color = "#6F6057";
                    backgroundColor = "#E1D9D3";
                    break;
                case "ghost":
                    color = "#E7DBED";
                    backgroundColor = "#FFFFFF";
                    break;
                case "dragon":
                    color = "darkBlue";
                    backgroundColor = "#C9C9F9";
                    break;
                case "steel":
                    color = "gray";
                    backgroundColor = "#ECECEC";
                    break;
                case "dark":
                    color = "black";
                    backgroundColor = "#B1B1B1";
                    break;
                case "fairy":
                    color = "pink";
                    backgroundColor = "#FFC7EE";
                    break;
            }
            bgColor = color;
            // typesHtml = "<span class='types primaryType'>" + capitalize(data.types[0].type.name) + "</span>";

            document.getElementById("pokeDetailHeader").style.backgroundColor = color;
            document.body.style.backgroundColor = backgroundColor;
        }

        else if (data.types.length == 2) {
            
            switch (data.types[0].type.name) {

                case "fire":
                    color1 = "#ff7600";
                    backgroundColor = "#FFE2CA";

                    break;
                case "water":
                    color1 = "#0072ff";
                    backgroundColor = "#C6DFFF";
                    break;
                case "poison":
                    color1 = "#224e06";
                    backgroundColor = "#BBD8A7";
                    break;
                case "grass":
                    color1 = "#00ff66";
                    backgroundColor = "#BBFFD7";
                    break;
                case "normal":
                    color1 = "#808080";
                    backgroundColor = "#E1E1E1";
                    break;
                case "electric":
                    color1 = "#EABB00";
                    backgroundColor = "#FFF891";
                    break;
                case "ice":
                    color1 = "#BDFFF8";
                    backgroundColor = "#BBFFF7";
                    break;
                case "fighting":
                    color1 = "#FF8C2E";
                    backgroundColor = "#FFDCBF";
                    break;
                case "ground":
                    color1 = "#863D18";
                    backgroundColor = "#E7C9BA";
                    break;
                case "flying":
                    color1 = "#56CFED";
                    backgroundColor = "#B9F2FF";
                    break;
                case "psychic":
                    color1 = "#AA2DDC";
                    backgroundColor = "#E7BFF8";
                    break;
                case "bug":
                    color1 = "#9FE320";
                    backgroundColor = "#DDF4B3";
                    break;
                case "rock":
                    color1 = "#6F6057";
                    backgroundColor = "#E1D9D3";
                    break;
                case "ghost":
                    color1 = "#E7DBED";
                    backgroundColor = "#FFFFFF";
                    break;
                case "dragon":
                    color1 = "darkBlue";
                    backgroundColor = "#C9C9F9";
                    break;
                case "steel":
                    color1 = "gray";
                    backgroundColor = "#ECECEC";
                    break;
                case "dark":
                    color1 = "black";
                    backgroundColor = "#B1B1B1";
                    break;
                case "fairy":
                    color1 = "pink";
                    backgroundColor = "#FFC7EE";
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
            // bgColor =  "linear-gradient(132deg, "+ color1 +" 0%, "+ color2 +" 100%);" ;
            // typesHtml = "<span class='twoTypesCont types'><span class='primaryType'>" + capitalize(data.types[0].type.name) + "</span><span class='secondaryType'>" + capitalize(data.types[1].type.name) + "</span></span>";

            document.getElementById("pokeDetailHeader").style = "background: linear-gradient(132deg, "+ color1 +" 0%, "+ color2 +" 100%);";
            document.body.style.backgroundColor = backgroundColor;

        }


        
        nextPokeLink = document.getElementById('nextPokeUrl');
        nextPokeLink.href = "pokeDetail.php?id=" + (data.id + 1);
        previousPokeLink = document.getElementById('previousPokeUrl');
        if ((data.id - 1) <= 0) {
            var newId = 1; 
        }
        else {
            var newId = (data.id - 1);
        }
        previousPokeLink.href = "pokeDetail.php?id=" + newId;


        var types = data.types;
        if (types.length > 1) {
            document.getElementById('typesTitle').innerHTML = "Types";
        }
        else {
            document.getElementById('typesTitle').innerHTML = "Type";
        }
        types.forEach(element => {
            document.querySelector('#typesDiv').innerHTML += "<li>" + element.type.name + "</li>";
        });

        var abilities = data.abilities;
        if (abilities.length > 1) {
            document.getElementById('abilitiesTitle').innerHTML = "Compétences innées";
        }
        else {
            document.getElementById('abilitiesTitle').innerHTML = "Compétence innée";
        }
        abilities.forEach(element => {
            document.querySelector('#abilitiesDiv').innerHTML += "<li>" + element.ability.name + "</li>";
        });

        var stats = data.stats;
        stats.forEach(element => {
            document.querySelector('#statsDiv').innerHTML += "<li>" + element.stat.name + ": " + element.base_stat + "</li>";
        });

        document.querySelector('#infosDiv').innerHTML += "<li>Taille: " + data.height + " pieds</li>";
        document.querySelector('#infosDiv').innerHTML += "<li>Poids: " + data.weight + " kg</li>";

        var itemsHeld = data.held_items;
        if (itemsHeld.length == 0) {
            document.querySelector('#itemsHeldDiv').innerHTML += "<li>Aucun objet tenu</li>";
        }
        else {
            if (itemsHeld > 1) {
                document.getElementById('itemsHeldTitle').innerHTML = "Objets tenus";
            }
            else {
                document.getElementById('itemsHeldTitle').innerHTML = "Objet tenu";
            }
            itemsHeld.forEach(element => {
                document.querySelector('#itemsHeldDiv').innerHTML += "<li>" + element.item.name + "</li>";
            })
        }

        var moves = data.moves;
        moves.forEach(element => {
            document.querySelector('#movesDiv').innerHTML += "<li><a href='moveDetail.php?moveName=" + element.move.name + "'>" + element.move.name + "</a></li>"
        })

    })


    

}
