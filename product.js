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
    document.getElementById("templateColor").style.backgroundColor = product.colors
    console.log(product.colors)
}