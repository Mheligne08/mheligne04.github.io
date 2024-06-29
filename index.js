var producti document.getElementById("product1")
var qtyl document.getElementById("qtyl")
var pricel document.getElementById("price1")

var product2 document.getElementById("product2")
var qty2 document.getElementById("qty2")
var price2 document.getElementById("price2")

var carts document.getElementById("carts")
var total document.getElementById("total") var cash document.getElementById("cash")
var change document.getElementById("change")

function addOrder() {
carts.textContent=""
if (parseFloat(qtyl.value) > 0){
var order qty1.value.toString() +' pc/s x ' pricel.textContent + '______' + product1.textContent + '______' Php + (parseFloat(qtyl.value) *parseFloat(pricel.textContent)) + '/n'
//carts.textContent + carts.value.toString() + "\n"; 
carts.textContent order

if (parseFloat(qty2.value) > 0) {
var order qty2.value.toString() +' pc/s x ' price2.textContent + '______' + product2.textContent + '______' Php + (parseFloat(qty2.value) *parseFloat(price2.textContent)) + '/n'
//carts.textContent + carts.value.toString() + "\n"; 
carts.textContent order

qtyl.addEventListener("keyup", addOrder): qty2.addEventListener("keyup", addOrder):

order
