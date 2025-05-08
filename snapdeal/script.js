const banner = document.querySelector('.arrival-banner');

banner.addEventListener('mouseover', () => {
  banner.style.transform = 'scale(1.02)';
  banner.style.transition = 'transform 0.5s ease';
});

banner.addEventListener('mouseout', () => {
  banner.style.transform = 'scale(1)';
});
const banners = document.querySelectorAll('.banner-card');

banners.forEach(banner => {
  banner.addEventListener('mouseover', () => {
    banner.style.transform = 'scale(1.03)';
    banner.style.transition = 'transform 0.5s ease';
  });
  banner.addEventListener('mouseout', () => {
    banner.style.transform = 'scale(1)';
  });
});

document.querySelectorAll('.footer-column a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  document.getElementById('sendBtn').addEventListener('click', function() {
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  const successMessage = document.getElementById('successMessage');

  if (name && phone && message) {
    successMessage.textContent = 'Message Sent Successfully...!!!';
    successMessage.style.color = 'green';

    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';
  } else {
    successMessage.textContent = 'Please fill in all fields!';
    successMessage.style.color = 'red';
  }
});


document.querySelectorAll('.footer-column a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("search-btn");
    const dropdownMenu = document.getElementById("dropdown-menu");

    searchBtn.addEventListener("click", () => {
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (event) => {
        if (!searchBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });
});





  document.querySelectorAll('.wishlist').forEach(icon => {
    icon.addEventListener('click', () => {
      const item = {
        name: icon.dataset.name,
        price: icon.dataset.price,
        imgSrc: icon.dataset.img,
        rating: parseInt(icon.dataset.rating),
        discount: icon.dataset.discount
      };

      // Get existing wishlist or create a new one
      let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

      // Check for duplicates
      const exists = wishlist.some(product => product.name === item.name);
      if (!exists) {
        wishlist.push(item);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        alert(`${item.name} added to wishlist!`);
      } else {
        alert(`${item.name} is already in your wishlist.`);
      }
    });
  });

  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
document.getElementById('wishlist-count').textContent = wishlist.length;

function navigateToPage() {
  const select = document.getElementById("categoryFilter");
  const selectedValue = select.value;

  if (selectedValue !== "all") {
    window.location.href = selectedValue;
  }
}