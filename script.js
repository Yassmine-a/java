document.addEventListener('DOMContentLoaded', () => {
    updateTotalPrice();
});

function changeQuantity(button, change) {
    const row = button.closest('tr');
    const quantityElement = row.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    quantity = Math.max(1, quantity + change);
    quantityElement.textContent = quantity;
    updateItemTotal(row);
    updateTotalPrice();
}

function updateItemTotal(row) {
    const price = parseFloat(row.getAttribute('data-price'));
    const quantity = parseInt(row.querySelector('.quantity').textContent);
    const itemTotal = row.querySelector('.item-total');
    itemTotal.textContent = `$${(price * quantity).toFixed(2)}`;
}

function updateTotalPrice() {
    let total = 0;
    document.querySelectorAll('#cart tbody tr').forEach(row => {
        const itemTotal = parseFloat(row.querySelector('.item-total').textContent.replace('$', ''));
        total += itemTotal;
    });
    document.getElementById('total-price').textContent = total.toFixed(2);
}

function toggleLike(button) {
    button.classList.toggle('liked');
}

function removeItem(button) {
    const row = button.closest('tr');
    row.remove();
    updateTotalPrice();
}
