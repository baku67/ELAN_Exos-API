window.onload = function() {

    const inputNbr = document.querySelector("#inputNbrPoke");

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

        fetch("https://pokeapi.co/api/v2/pokemon?limit=" + nbrPoke + "&offset=0")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)

            contentDiv.innerHTML = "";

            data.results.forEach(element => {
                contentDiv.innerHTML += 
                "<div>" +
                    "<span>" + element.name + "</span>" +
                    // "<img src='" + element.url + "'>" +
                    "<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + 1 + ".png' >" + 
                "</div>"
            });

        })
        .catch((error) => contentDiv.innerHTML = error)
    }



}