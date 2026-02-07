// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Initialize theme from localStorage or default to light
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
}

// Set theme and update UI
function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update toggle button icon
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Toggle theme on button click
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
}

// Initialize theme on page load
initializeTheme();

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Combined scroll handler with throttling
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        return;
    }
    
    scrollTimeout = setTimeout(() => {
        scrollTimeout = null;
        
        // Update active navigation links
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }, 100);
});

// Form Validation and Submission
const bookingForm = document.getElementById('bookingForm');
const formMessage = document.getElementById('formMessage');

if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(bookingForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        // Validate form
        if (validateForm(data)) {
            // Simulate form submission
            submitForm(data);
        }
    });
}

function validateForm(data) {
    // Clear previous messages
    formMessage.className = 'form-message';
    formMessage.textContent = '';
    
    // Check required fields
    if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.service || !data.message) {
        showMessage(window.i18n ? window.i18n.t('booking.error.required') : 'Please fill in all required fields.', 'error');
        return false;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showMessage(window.i18n ? window.i18n.t('booking.error.email') : 'Please enter a valid email address.', 'error');
        return false;
    }
    
    // Validate phone format (basic validation)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(data.phone)) {
        showMessage(window.i18n ? window.i18n.t('booking.error.phone') : 'Please enter a valid phone number.', 'error');
        return false;
    }
    
    return true;
}

function submitForm(data) {
    // Show loading state
    const submitButton = bookingForm.querySelector('.btn-submit');
    const originalText = submitButton.textContent;
    submitButton.textContent = window.i18n ? window.i18n.t('booking.submitting') : 'Submitting...';
    submitButton.disabled = true;
    
    // Simulate API call with setTimeout
    setTimeout(() => {
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Show success message
        showMessage(window.i18n ? window.i18n.t('booking.success') : 'Thank you! Your consultation request has been submitted. We will contact you within 24 hours.', 'success');
        
        // Reset form
        bookingForm.reset();
        
        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 1500);
}

function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
}

// Add animation on scroll for service cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Language selector handler
document.addEventListener('DOMContentLoaded', () => {
    // Initialize i18n
    if (window.i18n) {
        window.i18n.updateContent();
        
        const languageSelect = document.getElementById('languageSelect');
        if (languageSelect) {
            // Set current language in dropdown
            languageSelect.value = window.i18n.currentLanguage;
            
            // Handle language change
            languageSelect.addEventListener('change', (e) => {
                window.i18n.setLanguage(e.target.value);
            });
        }
    }
    
    // Add animation on scroll for service cards
    const animatedElements = document.querySelectorAll('.service-card, .testimonial-card, .stat-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Set minimum date for consultation booking to today
const dateInput = document.getElementById('preferredDate');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}



// Console message for developers
console.log('%c🚀 ConsultPro Website', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cThis website is ready for Webflow hosting!', 'color: #6b7280; font-size: 14px;');
