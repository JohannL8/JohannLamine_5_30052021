let totalPrice = 0;
let myForm = document.getElementById("myForm");

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
    return values;   
}

document.getElementById("clearCart").addEventListener("click", function(clear) {
    clear.preventDefault()
    if (window.confirm("Voulez-vous vraiment vider votre panier ?")) {
        window.localStorage.clear()
        window.location.href = "panier.html"
    }
})

document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const mail = document.getElementById("inputEmail").value
    const adress = document.getElementById("inputAddress").value
    const city = document.getElementById("inputCity").value

    var erreur;

    var inputs = document.getElementsByTagName("input");

    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            erreur = "Veuillez renseigner tous les champs";
        }
    }
    
    if (erreur) {
        e.preventDefault();
        alert('remplir tous les champs')
        return false;
    } 
    e.preventDefault()

    let contact = {
        firstName: firstName,
        lastName: lastName,
        address: adress,
        city: city,
        email: mail,
    }

    let products = Object.keys(localStorage)

    fetch("http://localhost:3000/api/teddies/order", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ contact, products})
    })
    .then(function(res) {
        if (res.ok) {
            return res.json();
        } else {
            console.log("erreur de post")
        }
    })
    .then(function(data) {
        localStorage.setItem("order", JSON.stringify(data));

        localStorage.setItem("totalPrice", totalPrice);
        window.location.href = "order.html"
    })
});

function displayValue(value) {

    const templateElt = document.getElementById("templateCart")
    const cloneElt = document.importNode(templateElt.content, true)

    cloneElt.getElementById("tedPic").src = value.tedPic
    cloneElt.getElementById("tedName").textContent = value.tedName
    cloneElt.getElementById("tedPrice").textContent = ("Prix :" + " " + value.tedPrice /100 + " " + "???")

    document.getElementById("cartItem").appendChild(cloneElt)
    
    totalPrice = Number(totalPrice) + Number(value.tedPrice)
     
    document.getElementById("totalPrice").textContent = (totalPrice / 100 + " " + "???")
}