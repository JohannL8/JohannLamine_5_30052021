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
    } else {
        return
    }
})

document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const mail = document.getElementById("inputEmail").value
    const adress = document.getElementById("inputAddress").value
    const city = document.getElementById("inputCity").value
    const zip = document.getElementById("inputZip").value

    const zipRegex = /\d{2}[ ]?\d{3}/

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
    console.log(products)

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
        window.location.href = "order.html"
    })

    // window.location.href ="order.html"

    



    // window.location.href = "order.html"


    // for (tedId of values) {
    //     products.push(tedID.value);
    // }
    // console.log(products);

    // product
    // console.log(orderInfo)
    // window.localStorage.clear();
    // window.localStorage.setItem("orderStorage", JSON.stringify(orderInfo));
    // window.location.href = "order.html"

});

// {
//     "contact": {
//         "firstName": "firstName",
//         "lastName": "lastName",
//         "address": "adress",
//         "city": "city",
//         "email": "email"
//     },
//     "products":[
//         "5beaabe91c9d440000a57d96","5beaaa8f1c9d440000a57d95"
//     ]
// }

/*document
    .getElementById("confirmPaiement")
    .addEventListener("click", function(e) {
        e.preventDefault;
        validatePaiement();
    });*/

function displayValue(value) {


    const templateElt = document.getElementById("templateCart")
    const cloneElt = document.importNode(templateElt.content, true)

    cloneElt.getElementById("tedPic").src = value.tedPic
    cloneElt.getElementById("tedName").textContent = value.tedName
    cloneElt.getElementById("tedPrice").textContent = ("Prix :" + " " + value.tedPrice /100 + " " + "€")
    cloneElt.getElementById("tedPrice").value = value.tedPrice

    document.getElementById("cartItem").appendChild(cloneElt)
    
    totalPrice = Number(totalPrice) + Number(value.tedPrice)
     
    document.getElementById("totalPrice").textContent = (totalPrice / 100 + " " + "€")

    // testprod = value.tedID

    // console.log(testprod)

    // let products = []; 
    // for (listId of values) {
    //     products.push(listId.id)
    // }
    // console.log(products)
}

/*myForm.addEventListener('submit', function(e) {
    validatePaiement() 

});*/

// function validatePaiement() {
//     const firstName = document.getElementById("firstName")
//     const lastName = document.getElementById("lastName")
//     const email = document.getElementById("inputEmail")
//     const adress = document.getElementById("inputAddress")
//     const adressAdd = document.getElementById("inputAddress2")
//     const city = document.getElementById("inputCity")
//     const zip = document.getElementById("inputZip")
//     const state = document.getElementById("inputState")

//     const zipRegex = /\d{2}[ ]?\d{3}/

//     if (!(
//         firstName.length > 2
//         && lastName.length > 2
//         && adress.lenght > 8
//         && city.length > 2
//         /*&& zipRegex.test(zip)*/
//     )) {
//         alert("Vous n'avez pas rempli tous les champs necessaires")
//         return
//     } 

// }