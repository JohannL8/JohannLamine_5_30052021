
function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push(localStorage.getItem(keys[i]));
        console.log(localStorage.getItem(keys[i]))
    }

    return values;
}

allStorage();

localStorage.getItem("5beaa8bf1c9d440000a57d94")

function validatePaiement() {
    const firstName = document.getElementById("firstName")
    const lastName = document.getElementById("lastName")
    const email = document.getElementById("inputEmail")
    const adress = document.getElementById("inputAddress")
    const adressAdd = document.getElementById("inputAddress2")
    const city = document.getElementById("inputCity")
    const zip = document.getElementById("inputZip")
    const state = document.getElementById("inputState")

    const zipRegex = /\d{2}[ ]?\d{3}/

    if (!(
        firstName.length > 2
        && lastName.length > 2
        && adress.lenght > 8
        && city.length > 2
        && zipRegex.test(zip)
    )) {
        alert("Vous n'avez pas rempli tous les champs necessaires")
        return
    }



}