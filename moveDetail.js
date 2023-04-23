window.onload = function() {

    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    
    const moveName = document.querySelector("#hiddenId").innerHTML;


    fetch("https://pokeapi.co/api/v2/move/"+ moveName)
    .then((response) => response.json())
    .then((data) => {

        document.querySelector("#moveName").innerHTML = data.name;


        document.querySelector("#moveType").innerHTML = "Type: " + "<span class='data'>" + data.type.name + "</span>";
        document.querySelector("#moveDmgClass").innerHTML = "Classe de dégat: " + "<span class='data'>" + data.damage_class.name + "</span>";
        document.querySelector("#movePowerPoints").innerHTML = "PP: " + "<span class='data'>" + data.pp + "</span>";
        document.querySelector("#movePriority").innerHTML = "Priorité: " + "<span class='data'>" + data.priority + "</span>";
        document.querySelector("#movePower").innerHTML = "Puissance: " + "<span class='data'>" + data.power + "</span>";
        document.querySelector("#moveTarget").innerHTML = "Cible: " + "<span class='data'>" + data.target.name + "</span>";
        document.querySelector("#moveEffect").innerHTML = "Effet: " + "<span class='data'>" + data.effect_entries[0].effect + "</span>";

    
        console.log(data)

    })


}