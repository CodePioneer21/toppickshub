document.addEventListener('DOMContentLoaded', function () {
    // Find all "Buy Now" buttons on the page
    const buyNowButtons = document.querySelectorAll('a[href*https://www.amazon.com.au/Beginners-Guide-Day-Trading-Online/dp/1593376863/ref=zg_bs_4893919051_sccl_50/355-4003941-9431950?psc=1]');

    // Add a click event listener to each button
    buyNowButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            // Prevent the link from navigating immediately
            event.preventDefault();

            // Show an alert to the user
            alert('Thank you for your interest in our product! You will be redirected to the product page.');

            // Redirect the user to the affiliate link after a short delay
            setTimeout(function () {
                window.open(event.target.href, '_blank');
            }, 1000);
        });
    });
});
const searchInput = document.getElementById('search-input');
const productSections = document.querySelectorAll('section');

searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    
    productSections.forEach((section) => {
        const productTitle = section.querySelector('h2').textContent.toLowerCase();
        
        if (productTitle.includes(searchTerm)) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
});