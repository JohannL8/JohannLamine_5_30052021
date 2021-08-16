const order = JSON.parse(localStorage.getItem("order"));
const price = localStorage.getItem("totalPrice");

orderRecap()

function orderRecap() {
    document.getElementById("orderName").textContent = (order.contact.lastName + " " + order.contact.firstName)
    document.getElementById("orderCode").textContent = order.orderId
    document.getElementById("orderPrice").textContent = (price / 100)
    document.getElementById("orderAdress").textContent = order.contact.address
    document.getElementById("orderCity").textContent = order.contact.city
    document.getElementById("orderEmail").textContent = order.contact.email

    window.localStorage.clear()
}