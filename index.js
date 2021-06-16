main()

async function main() {
    const articles = await getArticles()

    for (article of articles) {
        displayArticle(article)

    }
}

function getArticles() {
    return fetch("http://localhost:3000/api/teddies")
        .then(function(httpBodyResponse) {
            return httpBodyResponse.json()
        })
        .then(function(articles) {
            return articles
        })
        .catch(function(error) {
            alert(error)
        })
}

function displayArticle(article) {
    const templateElt = document.getElementById("templateArticle")
    const cloneElt = document.importNode(templateElt.content, true)

    cloneElt.getElementById("teddyPic").src = article.imageUrl
    cloneElt.getElementById("teddyName").textContent = article.name
    cloneElt.getElementById("teddyPrice").textContent = ("Prix:" + " " + article.price / 100 + " " + "€")
    cloneElt.getElementById("teddyDescription").textContent = article.description
    cloneElt.getElementById("productLink").href = ("product.html?id=" + article._id)

    document.getElementById("teddyCard").appendChild(cloneElt)


}