document.addEventListener('DOMContentLoaded', function() {
    // Get the mobile menu button and mobile menu elements
    const mobileMenuButton = document.querySelector('.mobile-menu-button button');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Add click event listener to toggle mobile menu
    if(mobileMenuButton) {
      mobileMenuButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Toggle the active class on the mobile menu
        if(mobileMenu) {
          mobileMenu.classList.toggle('active');
        }
        
        // Toggle the open class on the hamburger icon if it exists
        if(hamburgerIcon) {
          hamburgerIcon.classList.toggle('open');
        }
      });
    }
    
    // Close the mobile menu when clicking outside of it
    document.addEventListener('click', function(e) {
      if(mobileMenu && mobileMenu.classList.contains('active')) {
        // If the click is outside the mobile menu and not on the menu button
        if(!mobileMenu.contains(e.target) && 
           (!mobileMenuButton || !mobileMenuButton.contains(e.target))) {
          mobileMenu.classList.remove('active');
          if(hamburgerIcon) {
            hamburgerIcon.classList.remove('open');
          }
        }
      }
    });
    
    // Close mobile menu when a link inside it is clicked
    const mobileMenuLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
    mobileMenuLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        if(hamburgerIcon) {
          hamburgerIcon.classList.remove('open');
        }
      });
    });
    
    // Handle touch events better for mobile
    if('ontouchstart' in window) {
      mobileMenuButton.addEventListener('touchstart', function(e) {
        e.preventDefault();
        if(mobileMenu) {
          mobileMenu.classList.toggle('active');
        }
        if(hamburgerIcon) {
          hamburgerIcon.classList.toggle('open');
        }
      }, {passive: false});
    }
  });