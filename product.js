main()

async function main() {
    const productId = getProductId()
    const productData = await getProductData(productId)
    teddyInfo(productData)
}

function getProductId() {
    return new URL(window.location.href).searchParams.get('id')
}

function getProductData(productId) {
    return fetch(`http://localhost:3000/api/teddies/${productId}`)
    .catch((error) => {
        console.log(error)
    })
    .then((httpBodyResponse) => httpBodyResponse.json())
    .then((productData) => productData)
}

function teddyInfo(product) {
    document.getElementById("teddyPic").src = product.imageUrl
    document.getElementById("teddyName").textContent = product.name
    document.getElementById("teddyDescription").textContent = product.description
    document.getElementById("teddyPrice").textContent = ("Prix :" + " " + product.price / 100 + " " + "€")
    

    for (color of product.colors) {
        const templateElt = document.getElementById("templateColor")
        const cloneElt = document.importNode(templateElt.content, true)

        cloneElt.getElementById("ColorChoice").style.backgroundColor = color

        document.getElementById("teddyColor").appendChild(cloneElt)
    }
    
    addCart.addEventListener("click", function (event) {
        event.preventDefault();

        let teddyChoice = {
            tedName: product.name,
            tedID: product._id,
            tedPic: product.imageUrl,
            tedPrice: product.price,
            quantity: 1,
        };

        window.localStorage.setItem(product._id, JSON.stringify(teddyChoice));

        if (window.confirm("Voulez-vous voir votre panier ?")) {
            window.location.href = "panier.html"
        } else {
            window.location.href = "index.html"
        }
    })

}

