// Toggle hamburger menu and search bar visibility
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', ()=> {
    navLinks.classList.toggle('active');
});



// Select all filter buttons and menu items
const filterButtons = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');

// Add click event listener to each button
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');

    // Show/Hide menu items based on category
    menuItems.forEach(item => {
      // Reset animation
      item.style.animation = 'none';

      if (category === 'all' || item.getAttribute('data-category') === category) {
        item.style.display = 'block';

        // Trigger animation with delay
        setTimeout(() => {
          item.style.animation = 'fadeUp 0.8s ease-in-out forwards';
        }, 50);
      } else {
        item.style.display = 'none';
      }
    });
  });
});



// Select elements to animate
const aboutTexts = document.querySelectorAll('.about-text');
const aboutContent = document.querySelector('.about-content');
const aboutImage = document.querySelector('.about-image');

// Function to handle scroll animation
const handleScrollAnimation = () => {
  const triggerHeight = window.innerHeight / 1.3;

  aboutTexts.forEach((text) => {
    const top = text.getBoundingClientRect().top;
    if (top < triggerHeight) {
      text.style.opacity = '1';
      text.style.transform = 'translateY(0)';
    }
  });

  // Animate other elements
  if (aboutContent.getBoundingClientRect().top < triggerHeight) {
    aboutContent.classList.add('slide-in-left');
  }

  if (aboutImage.getBoundingClientRect().top < triggerHeight) {
    aboutImage.classList.add('slide-in-right');
  }
};

// Trigger scroll animation
window.addEventListener('scroll', handleScrollAnimation);



const form = document.querySelector('form');
const inputs = document.querySelectorAll('input, textarea');

// Basic validation
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission for testing
  
  let valid = true;
  inputs.forEach((input) => {
    if (!input.value.trim()) {
      alert(`Please fill out the ${input.id} field.`);
      valid = false;
    }
  });

  if (valid) {
    alert('Your message has been sent successfully! Thank you for reaching out to Brew Haven.');
    form.reset();
  }
});




const cartItems = [];
const cartItemsList = document.querySelector('.cart-items');
const totalPriceEl = document.getElementById('total-price');
const discountEl = document.getElementById('discount');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const name = button.dataset.name;
    const price = parseFloat(button.dataset.price);

    cartItems.push({ name, price });
    updateCart();
  });
});

function updateCart() {
  cartItemsList.innerHTML = '';
  let totalPrice = 0;

  cartItems.forEach(item => {
    totalPrice += item.price;
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsList.appendChild(listItem);
  });

  const discount = totalPrice > 20 ? totalPrice * 0.1 : 0; // 10% discount for orders over $20
  totalPriceEl.textContent = (totalPrice - discount).toFixed(2);
  discountEl.textContent = discount.toFixed(2);
}



document.addEventListener('DOMContentLoaded', () => {
  const applyButtons = document.querySelectorAll('.apply-btn');
  const positionField = document.getElementById('position');

  applyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const job = button.dataset.job;
      positionField.value = job;
      window.scrollTo({ top: document.querySelector('.application-form').offsetTop, behavior: 'smooth' });
    });
  });

  const form = document.getElementById('job-application-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you for your application! We will get back to you soon.');
    form.reset();
  });
});
