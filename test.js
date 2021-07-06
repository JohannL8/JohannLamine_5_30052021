main()

async function main() {
    const values = await allStorage()

    for (value of values) {
        displayValue(value)
    }

}

function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        displayValue(JSON.parse(localStorage.getItem(keys[i])))
    }

    console.log(values)

    return values;

}



function displayValue(value) {
    console.log(value)
    console.log(value.tedPic)
    console.log(value.tedName)

    const templateElt = document.getElementById("templateCart")
    console.log(templateElt)
    const cloneElt = document.importNode(templateElt.content, true)


    cloneElt.getElementById("tedPic").src = value.tedPic
    cloneElt.getElementById("tedName").textContent = value.tedName
    cloneElt.getElementById("tedPrice").textContent = ("Prix unitaire :" + " " + value.tedPrice /100 + " " + "€")
    cloneElt.getElementById("tedPrice").value = value.tedPrice

    document.getElementById("cartItem").appendChild(cloneElt)


}


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