// Javscript for functionality

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

   // Add functionality for "Buy Now" buttons
   document.querySelectorAll('.buy-now').forEach((button) => {
    button.addEventListener('click', (event) => {
        const produceId = event.target.getAttribute('data-product-id');
        alert('product with ID: &#8358{productId} added to cart!');
        // Redirect to the cart page
        window.localStorage.href = 'cart.html'

        alert('Added to cart: ${productName} for ${productPrice}');
        // Implement add-to-cart logic here
    });
});

// Cart logo Functionality
const cartlogo = document.querySelector('header .header-icon a:nth-child(2)');
cartlogo.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Redirecting to the cart page...');
    // Implement cart page redirection
    window.location.href = 'cart.html';
  });

   // User id logo Functionality
   const useridlogo = document.querySelector('header .header-icons a:nth-child(2)');
   useridlogo.addEventListener('click', (event) => {
     event.preventDefault();
     alert('Redirecting to the login or user account page...');
     // Implement login/account page redirection
     window.localStorage.href = 'login.html';
   });
    
     // Social Media Links Functionality
     const socialMediaLinks = document.querySelectorAll('footer .social-media a');

     socialMediaLinks.forEach((link, index) => { // Add index here
        link.addEventListener('click', (event) => {
            event.preventDefault ();
            switch (index) {
                case 0:
                    window.open('https://www.instagram.com/liseth_home_of_luxury?igsh=MTlrbzkwaWY5cjNtaQ%3D%3D', '_blank');
                    break;
                case 1:
                    window.open('https://www.facebook.com/share/1Ampmwyowk/?mibextid=LQQJ4d', '_blank')
                    break;
                case 2:
                    window.open('https://snapchat.com/t/GtHtzsEV', '_blank')
                    break
                case 3:
                    window.open('https://wa.me/message/J3FHVS2VFWD2L1', '_blank')
                    break
                default:
                    alert('Redirecting to ${link.href}.')
               }
            });
         });

    // Payment Methods Placeholder (Future Enhancement)
    // You can add functionality to dynamically display payment methods if required.
  });
