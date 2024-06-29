document.addEventListener('DOMContentLoaded', function() {
    const qty1Input = document.getElementById('qty1');
    const qty2Input = document.getElementById('qty2');
    const qty3Input = document.getElementById('qty3');
    const cashInput = document.getElementById('cash');
    const totalOutput = document.getElementById('total');
    const changeOutput = document.getElementById('change');
    const cartsTextarea = document.getElementById('carts');
    const price1Label = document.getElementById('price1');
    const price2Label = document.getElementById('price2');
    const price3Label = document.getElementById('price3');

    qty1Input.addEventListener('input', updateTotal);
    qty2Input.addEventListener('input', updateTotal);
    qty3Input.addEventListener('input', updateTotal);
    cashInput.addEventListener('input', calculateChange);

    function updateTotal() {
        const price1 = parseFloat(price1Label.innerText);
        const price2 = parseFloat(price2Label.innerText);
        const price3 = parseFloat(price3Label.innerText);

        const qty1 = parseFloat(qty1Input.value) || 0;
        const qty2 = parseFloat(qty2Input.value) || 0;
        const qty3 = parseFloat(qty3Input.value) || 0;

        const total = (price1 * qty1) + (price2 * qty2) + (price3 * qty3);

        totalOutput.value = total.toFixed(2);

        updateCarts();
    }

    function calculateChange() {
        const total = parseFloat(totalOutput.value) || 0;
        const cash = parseFloat(cashInput.value) || 0;
        const change = cash - total;

        changeOutput.value = change.toFixed(2);
    }

    function updateCarts() {
        const qty1 = parseFloat(qty1Input.value) || 0;
        const qty2 = parseFloat(qty2Input.value) || 0;
        const qty3 = parseFloat(qty3Input.value) || 0;

        cartsTextarea.value = `
            Orders:
            Product 1: Whopper Jr Burger - Qty: ${qty1}
            Product 2: Whopper Ala Carte - Qty: ${qty2}
            Product 3: Grilled Chicken Burger - Qty: ${qty3}
        `;
    }
});
