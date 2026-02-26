// ===============================================
// SAYALI TERSE - RESIN ARTIST PORTFOLIO
// JavaScript - All Interactive Features
// ===============================================

// ========== CONFIGURATION ==========
// ⚠️ REPLACE THESE WITH YOUR ACTUAL VALUES

// Google Apps Script Web App URL (for Google Sheets integration)
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL'; 
// Example: 'https://script.google.com/macros/s/AKfycb.../exec'

// WhatsApp Number (with country code, no + sign)
const WHATSAPP_NUMBER = '917977850875'; // Format: country_code + number

// ========== SMOOTH SCROLLING ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu after clicking
            const navMenu = document.getElementById('navMenu');
            navMenu.classList.remove('active');
            document.getElementById('hamburger').classList.remove('active');
        }
    });
});

// ========== NAVBAR SCROLL EFFECT ==========
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    // Add shadow on scroll
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Active link highlighting
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ========== MOBILE MENU TOGGLE ==========
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ========== SCROLL TO TOP BUTTON ==========
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========== GALLERY LIGHTBOX ==========
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
let currentImageIndex = 0;

// Array of gallery images
const galleryImages = [
    'images/art1.jpg',
    'images/art2.jpg',
    'images/art3.jpg',
    'images/art4.jpg',
    'images/art5.jpg',
    'images/art6.jpg',
    'images/art7.jpg',
    'images/art8.jpg'
];

function openLightbox(index) {
    currentImageIndex = index;
    lightboxImage.src = galleryImages[currentImageIndex];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    }
    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    }
    
    lightboxImage.src = galleryImages[currentImageIndex];
}

// Close lightbox on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
    if (e.key === 'ArrowLeft' && lightbox.classList.contains('active')) {
        changeImage(-1);
    }
    if (e.key === 'ArrowRight' && lightbox.classList.contains('active')) {
        changeImage(1);
    }
});

// Close lightbox on background click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// ========== CONTACT FORM HANDLING ==========
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();
    const interest = document.getElementById('interest').value;
    const message = document.getElementById('message').value.trim();
    
    // ========== VALIDATION ==========
    
    // Name validation
    if (name.length < 2) {
        alert('❌ Please enter your full name (at least 2 characters)');
        document.getElementById('name').focus();
        return;
    }
    
    // Mobile validation
    const mobileDigits = mobile.replace(/[\s\-\+\(\)]/g, '');
    
    if (!/^\d+$/.test(mobileDigits)) {
        alert('❌ Mobile number should contain only digits\n\nSpaces and +91 are OK, but letters are not allowed');
        document.getElementById('mobile').focus();
        return;
    }
    
    if (mobileDigits.length < 10) {
        alert(`❌ Mobile number is too short\n\nIt must be at least 10 digits\nYou entered: ${mobileDigits.length} digits`);
        document.getElementById('mobile').focus();
        return;
    }
    
    if (mobileDigits.length > 15) {
        alert(`❌ Mobile number is too long\n\nMaximum 15 digits allowed\nYou entered: ${mobileDigits.length} digits`);
        document.getElementById('mobile').focus();
        return;
    }
    
    // Email validation (if provided)
    if (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('❌ Invalid Email Address\n\nPlease enter a valid email like:\nexample@gmail.com');
            document.getElementById('email').focus();
            return;
        }
    }
    
    // Interest validation
    if (!interest) {
        alert('❌ Please select what you are interested in');
        document.getElementById('interest').focus();
        return;
    }
    
    // Message validation
    if (message.length < 10) {
        alert('❌ Message is too short\n\nPlease provide more details (at least 10 characters)');
        document.getElementById('message').focus();
        return;
    }
    
    // ========== ALL VALIDATIONS PASSED ==========
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '✨ Sending...';
    submitBtn.disabled = true;
    
    let successCount = 0;
    const results = {
        whatsapp: false,
        googleSheets: false
    };
    
    // ========== 1. OPEN WHATSAPP ==========
    try {
        const whatsappMessage = `*New Inquiry from Website*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Mobile:* ${encodeURIComponent(mobile)}%0A*Email:* ${encodeURIComponent(email || 'Not provided')}%0A*Interested In:* ${encodeURIComponent(interest)}%0A*Message:* ${encodeURIComponent(message)}`;
        
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`, '_blank');
        results.whatsapp = true;
        successCount++;
        console.log('✅ 1/2: WhatsApp opened');
    } catch (error) {
        console.error('❌ WhatsApp Error:', error);
    }
    
    // ========== 2. SAVE TO GOOGLE SHEETS ==========
    try {
        if (GOOGLE_SCRIPT_URL !== 'YOUR_GOOGLE_APPS_SCRIPT_URL') {
            const payload = {
                timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
                name: name,
                mobile: mobileDigits,
                email: email || 'Not provided',
                interest: interest,
                message: message
            };
            
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain' },
                body: JSON.stringify(payload)
            });
            
            const result = await response.json();
            
            if (result.status === 'success') {
                results.googleSheets = true;
                successCount++;
                console.log('✅ 2/2: Data saved to Google Sheets');
            } else {
                throw new Error(result.message || 'Unknown error');
            }
        } else {
            console.warn('⚠️  2/2: Google Sheets not configured. Add your Apps Script URL in script.js');
        }
    } catch (error) {
        console.error('❌ Google Sheets Error:', error.message);
    }
    
    // ========== SHOW SUCCESS MESSAGE ==========
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Reset form
        contactForm.reset();
        
        // Success message
        let successMessage = '🎉 Thank you for contacting me!\n\n';
        
        if (successCount === 2) {
            successMessage += '✅ WhatsApp message opened\n';
            successMessage += '✅ Data saved to records\n';
            successMessage += '\nI will get back to you soon!';
        } else if (successCount === 1) {
            successMessage += '✅ WhatsApp message prepared!\n';
            successMessage += '\nPlease click "Send" in WhatsApp to complete.\n';
            if (!results.googleSheets) {
                successMessage += '⚠️  Auto-save: Setup pending';
            }
        } else {
            successMessage = '⚠️  Oops! Something went wrong.\n\nPlease contact me directly:\n📱 +91 79778 50875\n📧 sayaliterse123@gmail.com';
        }
        
        alert(successMessage);
        
        // Log summary
        console.log('\n📊 CONTACT FORM SUBMISSION SUMMARY:');
        console.log(`   Total Success: ${successCount}/2`);
        console.log(`   WhatsApp: ${results.whatsapp ? '✅' : '❌'}`);
        console.log(`   Google Sheets: ${results.googleSheets ? '✅' : '⚠️  (Not configured)'}`);
        
        if (GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL') {
            console.log('\n💡 To enable Google Sheets:');
            console.log('   1. Deploy Google Apps Script as Web App');
            console.log('   2. Update GOOGLE_SCRIPT_URL in script.js');
        }
    }, 1000);
});

// ========== SCROLL ANIMATIONS ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

// Observe all elements with data-aos attribute
document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
});

// ========== FORM INPUT ANIMATION ==========
document.querySelectorAll('.form-group input, .form-group textarea, .form-group select').forEach(input => {
    input.setAttribute('placeholder', ' ');
    
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.parentElement.classList.remove('focused');
        }
    });
    
    // Check on load if field has value
    if (input.value !== '') {
        input.parentElement.classList.add('focused');
    }
});

// ========== LAZY LOADING IMAGES ==========
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.add('loaded');
            }
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// ========== INITIALIZE ON PAGE LOAD ==========
document.addEventListener('DOMContentLoaded', () => {
    console.log('%c🎨 Sayali Terse - Resin Artist Portfolio', 'color: #DDA0DD; font-size: 20px; font-weight: bold;');
    console.log('%c📞 Contact: +91 79778 50875', 'color: #FFB6C1; font-size: 14px;');
    console.log('%c📧 Email: sayaliterse123@gmail.com', 'color: #FFB6C1; font-size: 14px;');
    console.log('%c🔗 Instagram: @sayaliterse', 'color: #FFB6C1; font-size: 14px;');
    
    console.log('\n📋 Contact Form Configuration Status:');
    console.log('   ✅ WhatsApp: Ready');
    console.log('   ' + (GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL' ? '⚠️  ' : '✅ ') + 
                'Google Sheets: ' + (GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL' ? 'Not configured' : 'Ready'));
    
    if (GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL') {
        console.log('\n💡 To enable Google Sheets integration:');
        console.log('   1. Create a new Google Sheet');
        console.log('   2. Go to Extensions → Apps Script');
        console.log('   3. Paste the Apps Script code (provided separately)');
        console.log('   4. Deploy as Web App');
        console.log('   5. Copy the Web App URL');
        console.log('   6. Update GOOGLE_SCRIPT_URL in script.js');
    }
    
    // Initialize sections animation
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.1}s`;
    });
});

// ========== PERFORMANCE: DEBOUNCE ==========
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

// Apply debounce to scroll events
const debouncedScroll = debounce(() => {
    // Heavy scroll calculations can go here if needed
}, 100);

window.addEventListener('scroll', debouncedScroll);

// ========== ADD LOADING ANIMATION ==========
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    console.log('✨ All assets loaded successfully!');
});

// ========== EASTER EGG ==========
// Type "resin" in console to see a message
let easterEggSequence = '';
document.addEventListener('keypress', (e) => {
    easterEggSequence += e.key.toLowerCase();
    if (easterEggSequence.includes('resin')) {
        console.log('%c🎨 You found the secret! Creating art with resin is magical! ✨', 'color: #FFB6C1; font-size: 16px; font-weight: bold;');
        easterEggSequence = '';
    }
    if (easterEggSequence.length > 10) {
        easterEggSequence = easterEggSequence.slice(-10);
    }
});
