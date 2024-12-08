// Javscript to match your HTML and CSS

document.addEventListener(DOMContentLoaded', () => {
  // Search Box Functionality
const SearchBox = document.querySelectorAll('.search-box');
SearchBox.addEventListener( 'keypress', function (event) {
     if (event.key === 'Enter') {
        const query = SearchBox.values.trim();
        if (query) {
            alert('Searching for: ${query}');
            // Redirect to a search results page or implement search logic
     }  
   } 
 });

   // Buy Now Buttons Functionality
   const buyNOwButtons = document.querySelectorAll('.buy-now');
   buyNOwButtons.forEach((button => {
    button.addEventListener('click', () => {
        const productName = button.previousElementSibling.previousElementSibling.textContent;
        const productPrice = button.previousElementSibling.textContent;

        alert('Added to cart: ${productName} for ${productPrice}');
        // Implement add-to-cart logic here
    });
});

// Cart Icon Functionality
const cartIcon = document.querySelector('header .header-icon a:nth-child(2)');
cartIcon.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Redirecting to the cart page...');
    // Implement cart page redirection
    window.location.href = 'cart.html';
  });

   // User Icon Functionality
   const userIcon = document.querySelector('header .header-icons a:nth-child(2)');
   userIcon.addEventListener('click', (event) => {
     event.preventDefault();
     alert('Redirecting to the login or user account page...');
     // Implement login/account page redirection
     window.localStorage.href = 'login.html';
   });
    
     // Social Media Links Functionality
     const socialMediaLinks = document.querySelectorAll('footer .social-media a');
     socialMediaLinks.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault ();
            switch (index) {
                case 0:
                    window.open('https://www.instagram.com/liseth_home_of_luxury?igsh=MTlrbzkwaWY5cjNtaQ%3D%3D', '_blank');
                    break;
                case 1:
                    window.open('https://www.facebook.com/share/1Ampmwyowk/?mibextid=LQQJ4d', '_blank');
                    break;
                case 2:
                    window.open('https://snapchat.com/t/GtHtzsEV', '_blank');
                    break
                case 3:
                    window.open('https://wa.me/message/J3FHVS2VFWD2L1', '_blank');
                    break
                default:
                    alert('Social media link not configured.');
            }
        });
    });

    // Payment Methods Placeholder (Future Enhancement)
    // You can add functionality to dynamically display payment methods if required.
  });
