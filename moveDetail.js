window.onload = function() {

    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    
    const moveName = document.querySelector("#hiddenId").innerHTML;


    fetch("https://pokeapi.co/api/v2/move/"+ moveName)
    .then((response) => response.json())
    .then((data) => {

        document.querySelector("#moveName").innerHTML = data.name;

        
        document.querySelector("#moveType").innerHTML = data.type.name;
        document.querySelector("#moveDmgClass").innerHTML = data.damage_class.name;
        document.querySelector("#movePowerPoints").innerHTML = data.pp;
        document.querySelector("#movePriority").innerHTML = data.priority;
        document.querySelector("#movePower").innerHTML = data.power;
        document.querySelector("#moveTarget").innerHTML = data.target.name;
        document.querySelector("#moveEffect").innerHTML = data.effect_entries[0].effect;

    
        console.log(data)

    })


}