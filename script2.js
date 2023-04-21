window.onload = function() {

    const inputCode = document.querySelector("#codePostal")
    inputCode.addEventListener("input", (event) => {
        event.preventDefault();
        const inputCodePostal = document.querySelector(".codePostal")
        getInfosAPI(inputCodePostal);
    })

    function getInfosAPI(inputCodePostal) {
        const result = document.querySelector(".result")
        const select = document.querySelector("#citiesSelect");

        fetch("https://geo.api.gouv.fr/communes?codePostal="+inputCodePostal.value+"&fields=nom,code,codeEpci,codesPostaux,population")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            // Réinitialisation de la liste avant nouvelle recherche
            document.querySelector('#citiesSelect').innerHTML = "";

            data.forEach((city) => {
                select.innerHTML += "<option>"+ city.nom +"</option>"
            })

        })
        .catch((error) => result.innerHTML = error)
    }
}

