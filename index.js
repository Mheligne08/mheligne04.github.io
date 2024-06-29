function calculateTotal() {
    let total = 0;
    // Loop through each input field with class 'qty'
    document.querySelectorAll('.qty').forEach(function(item) {
        const qty = parseInt(item.value) || 0; // Get quantity from input (default to 0 if empty or non-numeric)
        const price = parseFloat(item.getAttribute('data-price')); // Get price from data-price attribute
        total += qty * price; // Calculate subtotal for each item
    });

    // Update total field
    document.getElementById('total').value = total.toFixed(2); // Display total with two decimal places

    // Calculate change if cash tendered is provided
    const cash = parseFloat(document.getElementById('cash').value) || 0;
    const change = cash - total;
    document.getElementById('change').value = change.toFixed(2); // Display change with two decimal places
}
