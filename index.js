var product1 = document.getElementById("product1");
var qty1 = document.getElementById("qty1");
var price1 = document.getElementById("price1");
var product2 = document.getElementById("product2");
var qty2 = document.getElementById("qty2");
var price2 = document.getElementById("price2");
var qty3 = document.getElementById("qty3");
var price3 = document.getElementById("price3");
var carts = document.getElementById("carts");
var total = document.getElementById("total");
var cash = document.getElementById("cash");
var change = document.getElementById("change");

function addOrder() {
    carts.textContent = "";

    if (parseFloat(qty1.value) > 0) {
        var order1 = qty1.value.toString() + " pcs x " + product1.textContent + " - Php " + (parseFloat(qty1.value) * parseFloat(price1.textContent)).toFixed(2) + "\n";
        carts.textContent += order1;
    }

    if (parseFloat(qty2.value) > 0) {
        var order2 = qty2.value.toString() + " pcs x " + product2.textContent + " - Php " + (parseFloat(qty2.value) * parseFloat(price2.textContent)).toFixed(2) + "\n";
        carts.textContent += order2;
    }
    
    if (parseFloat(qty3.value) > 0) {
        var order3 = qty3.value.toString() + " pcs x " + product3.textContent + " - Php " + (parseFloat(qty3.value) * parseFloat(price3.textContent)).toFixed(2) + "\n";
        carts.textContent += order3;
    }
    if (parseFloat(qty4.value) > 0) {
        var order4 = qty4.value.toString() + " pcs x " + product4.textContent + " - Php " + (parseFloat(qty4.value) * parseFloat(price4.textContent)).toFixed(2) + "\n";
        carts.textContent += order4;
    }
    if (parseFloat(qty5.value) > 0) {
        var order5 = qty5.value.toString() + " pcs x " + product5.textContent + " - Php " + (parseFloat(qty5.value) * parseFloat(price5.textContent)).toFixed(2) + "\n";
        carts.textContent += order5;
    }
    if (parseFloat(qty6.value) > 0) {
        var order6 = qty6.value.toString() + " pcs x " + product6.textContent + " - Php " + (parseFloat(qty6.value) * parseFloat(price6.textContent)).toFixed(2) + "\n";
        carts.textContent += order6;
    }
    updateTotal(); // Update total after adding orders
}

function updateTotal() {
    var total = 0;

    total += parseFloat(qty1.value) * parseFloat(price1.textContent);
    total += parseFloat(qty2.value) * parseFloat(price2.textContent);
    total += parseFloat(qty3.value) * parseFloat(price3.textContent);
    total += parseFloat(qty4.value) * parseFloat(price4.textContent);
    total += parseFloat(qty5.value) * parseFloat(price5.textContent);
    total += parseFloat(qty6.value) * parseFloat(price6.textContent);
    
    
    
    totalInput.value = total.toFixed(2); // Update total input field
    calculateChange(); // Calculate change after updating total
}
}

qty1.addEventListener("keyup", addOrder);
qty2.addEventListener("keyup", addOrder);
qty3.addEventListener("keyup", addOrder);
qty4.addEventListener("keyup", addOrder);
qty5.addEventListener("keyup", addOrder);
qty6.addEventListener("keyup", addOrder);
cashInput.addEventListener("input", calculateChange);
