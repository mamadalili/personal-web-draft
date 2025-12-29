// Global variables for state management (in-memory storage)
window.appState = {
  userName: null,
  formSubmissions: []
};

// Display current year in footer
document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Initialize page-specific functionality
  initHomePage();
  initContactPage();
});

// Toast notification function
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Home Page Functionality
function initHomePage() {
  const getStartedBtn = document.getElementById('get-started-btn');
  const usernameInput = document.getElementById('username');

  if (!getStartedBtn || !usernameInput) return;

  getStartedBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const name = usernameInput.value.trim();

    // Validation
    if (!name) {
      showToast('Please enter your name');
      return;
    }

    if (name.length < 2) {
      showToast('Name must be at least 2 characters');
      return;
    }

    // Store in memory
    window.appState.userName = name;
    
    // Log to console for debugging
    console.log('User name stored:', name);

    // Show success message
    showToast(`${name}, welcome! Thanks for your visit 🌸`);
    
    // Clear input
    usernameInput.value = '';
  });

  // Enter key support
  usernameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      getStartedBtn.click();
    }
  });

  // Load saved name if exists
  if (window.appState.userName) {
    console.log('Previously saved username:', window.appState.userName);
  }
}

// Contact Form Functionality
function initContactPage() {
  const contactForm = document.getElementById('contactForm');
  
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const name = nameInput?.value.trim();
    const email = emailInput?.value.trim();
    const message = messageInput?.value.trim();

    // Validation
    if (!name || !email || !message) {
      showToast('لطفاً تمام فیلدها را پر کنید');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('لطفاً یک ایمیل معتبر وارد کنید');
      return;
    }

    // Store submission in memory
    const submission = {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    };

    window.appState.formSubmissions.push(submission);

    // Log to console for debugging
    console.log('Form submitted:', submission);
    console.log('All submissions:', window.appState.formSubmissions);

    // Show success message
    showToast('پیام شما با موفقیت ارسال شد! 🎉');

    // Reset form
    contactForm.reset();
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    
    // Skip if it's just "#" or the target doesn't exist
    if (href === '#' || !document.querySelector(href)) {
      return;
    }

    e.preventDefault();
    const target = document.querySelector(href);
    
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add active state to navigation
function setActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPage) {
      link.classList.add('text-blue-400');
      link.classList.remove('text-white', 'hover:text-blue-400');
    }
  });
}

// Call on page load
document.addEventListener('DOMContentLoaded', setActiveNav);

// Accessibility: ESC key to close dropdowns
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      menu.style.opacity = '0';
      menu.style.visibility = 'hidden';
    });
  }
});

// Performance: Debounce function for future use
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Export functions for potential module use
window.portfolioUtils = {
  showToast,
  debounce
};