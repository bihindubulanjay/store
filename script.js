// script.js
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.hero .cta');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    ctaButton.addEventListener('click', function() {
        alert('Thank you for shopping with us!');
    });

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Product added to cart!');
        });
    });
});