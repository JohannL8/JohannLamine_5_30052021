const infos = JSON.parse(localStorage.getItem("orderStorage"))
console.log(infos.price)
let prix = infos.price / 100

function orderValidate() {
    var prix = infos.price / 100
    console.log(prix)
    document.getElementById("orderPrice").innerHTML = (prix)
   

}
orderValidate()