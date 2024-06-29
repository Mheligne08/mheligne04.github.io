document.addEventListener('DOMContentLoaded', function() {
    const cashInput = document.getElementById('cash');
    const totalOutput = document.getElementById('total');
    const changeOutput = document.getElementById('change');
    const cartsTextarea = document.getElementById('carts');
    const ordersDiv = document.getElementById('orders');
    const price1Label = document.getElementById('price1');
    const price2Label = document.getElementById('price2');
    const price3Label = document.getElementById('price3');
    const qty1Input = document.getElementById('qty1');
    const qty2Input = document.getElementById('qty2');
    const qty3Input = document.getElementById('qty3');

    const addToCartButtons = document.querySelectorAll('.addToCart');

    cashInput.addEventListener('input', calculateChange);

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.getAttribute('data-product');
            const price = parseFloat(this.getAttribute('data-price'));
            const productId = this.getAttribute('data-product-id');
            const qtyInput = document.getElementById(`qty${productId}`);
            const qty = parseFloat(qtyInput.value) || 0;

            if (qty > 0) {
                const cartItem = `${product} - Qty: ${qty} - Price: ${price} - Subtotal: ${(price * qty).toFixed(2)}`;

                // Append to cartsTextarea
                cartsTextarea.value += cartItem + '\n';

                // Add to orders
                const orderItem = document.createElement('div');
                orderItem.innerText = cartItem;
                ordersDiv.appendChild(orderItem);

                // Update total
                updateTotal();
            }
        });
    });

    function updateTotal() {
        const price1 = parseFloat(price1Label.innerText);
        const price2 = parseFloat(price2Label.innerText);
        const price3 = parseFloat(price3Label.innerText);

        const qty1 = parseFloat(qty1Input.value) || 0;
        const qty2 = parseFloat(qty2Input.value) || 0;
        const qty3 = parseFloat(qty3Input.value) || 0;

        const total = (price1 * qty1) + (price2 * qty2) + (price3 * qty3);

        totalOutput.value = total.toFixed(2);

        calculateChange();
    }

    function calculateChange() {
        const total = parseFloat(totalOutput.value) || 0;
        const cash = parseFloat(cashInput.value) || 0;
        const change = cash - total;

        changeOutput.value = change.toFixed(2);
    }
});
            
