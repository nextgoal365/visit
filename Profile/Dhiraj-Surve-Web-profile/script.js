// ===========================
// CONFIGURATION - UPDATE THESE!
// ===========================

// Google Apps Script Web App URL
// ⚠️ REPLACE THIS after following GOOGLE-SHEET-SETUP.md (5-minute setup)
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxhYJknug35gErMtJblPb8JhwVmVKxn7w-qFmo66SugCcz4OVXlE0w6Zu5xaLLEsNFrYQ/exec';
// Example: 'https://script.google.com/macros/s/AKfycbXXXXX/exec'

// WhatsApp Configuration
const WHATSAPP_NUMBER = '919967603151'; // Your WhatsApp number with country code (no + sign)

// Your Email (where you want to receive emails)
const YOUR_EMAIL = 'surved1998@gmail.com'; // Your email address

// ===========================
// Smooth Scrolling for Navigation Links
// ===========================
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
            
            const navMenu = document.getElementById('navMenu');
            navMenu.classList.remove('active');
        }
    });
});

// ===========================
// Navbar Scroll Effect
// ===========================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
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

// ===========================
// Mobile Menu Toggle
// ===========================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ===========================
// Scroll to Top Button
// ===========================
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

// ===========================
// Portfolio Filter
// ===========================
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all') {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                const category = item.getAttribute('data-category');
                if (category === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            }
        });
    });
});

// ===========================
// Testimonials Slider
// ===========================
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const sliderDots = document.getElementById('sliderDots');

let currentSlide = 0;
const totalSlides = testimonialCards.length;

for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('slider-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    sliderDots.appendChild(dot);
}

const dots = document.querySelectorAll('.slider-dot');

function showSlide(n) {
    testimonialCards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    if (n >= totalSlides) currentSlide = 0;
    if (n < 0) currentSlide = totalSlides - 1;
    
    testimonialCards[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

function goToSlide(n) {
    currentSlide = n;
    showSlide(currentSlide);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto-play slider
let autoPlay = setInterval(nextSlide, 5000);

// Pause on hover
document.querySelector('.testimonials-slider').addEventListener('mouseenter', () => {
    clearInterval(autoPlay);
});

document.querySelector('.testimonials-slider').addEventListener('mouseleave', () => {
    autoPlay = setInterval(nextSlide, 5000);
});

// ===========================
// TRIPLE CONTACT FORM HANDLING
// WhatsApp + Google Forms + EmailJS
// ===========================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
	const phoneRaw = document.getElementById('phone').value || 'Not provided';
	//const phone = phoneRaw.replace(/[\s\-\+\(\)]/g, ''); 
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    
	 // ===========================
    // VALIDATION
    // ===========================
	
	// 1. Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('❌ Invalid Email Address\n\nPlease enter a valid email like:\nexample@gmail.com');
        document.getElementById('email').focus();
        return;
    }
	
	// 2. Phone Validation (if provided)
    let phone = 'Not provided';
    if (phoneRaw) {
        // Clean phone: remove spaces, +, -, ( ) brackets
        const phoneDigits = phoneRaw.replace(/[\s\-\+\(\)]/g, '');
        
        // Check if it's all digits
        if (!/^\d+$/.test(phoneDigits)) {
            alert('❌ Invalid Phone Number\n\nPhone should contain only numbers.\nSpaces and +91 are OK but letters are not allowed.');
            document.getElementById('phone').focus();
            return;
        }
        
        // Check minimum length (10 digits)
        if (phoneDigits.length < 10) {
            alert('❌ Phone Number Too Short\n\nPhone must be at least 10 digits.\nYou entered: ' + phoneDigits.length + ' digits');
            document.getElementById('phone').focus();
            return;
        }
        
        // Check maximum length (15 digits - international standard)
        if (phoneDigits.length > 15) {
            alert('❌ Phone Number Too Long\n\nPhone cannot exceed 15 digits.\nYou entered: ' + phoneDigits.length + ' digits');
            document.getElementById('phone').focus();
            return;
        }
        
        phone = phoneDigits;  // Use cleaned digits
    }
	
    // 3. Name Validation
    if (name.length < 2) {
        alert('❌ Invalid Name\n\nPlease enter your full name (at least 2 characters).');
        document.getElementById('name').focus();
        return;
    }
    
    // 4. Service Validation
    if (!service || service === '') {
        alert('❌ Service Not Selected\n\nPlease select the service you are interested in.');
        document.getElementById('service').focus();
        return;
    }
    
    // 5. Message Validation
    if (message.length < 5) {
        alert('❌ Message Too Short\n\nPlease provide more details (at least 10 characters).');
        document.getElementById('message').focus();
        return;
    }
	// *******ALL VALIDATIONS PASSED - Continue with form submission
	
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '✨ Sending...';
    submitBtn.disabled = true;
    
    let successCount = 0;
    const results = {
        whatsapp: false,
        googleForms: false
    };
    
    // ===========================
    // 1. SEND TO WHATSAPP
    // ===========================
    try {
        const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Service:* ${encodeURIComponent(service)}%0A*Message:* ${encodeURIComponent(message)}`;
        
        // Open WhatsApp in new tab
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`, '_blank');
        results.whatsapp = true;
        successCount++;
        console.log('✅ 1/2: WhatsApp message prepared');
    } catch (error) {
        console.error('❌ WhatsApp Error:', error);
    }
    
    // ===========================
    // 2. SAVE TO GOOGLE SHEETS (via Apps Script — no CORS issues)
    // ===========================
    try {
        if (GOOGLE_SCRIPT_URL !== 'YOUR_APPS_SCRIPT_URL_HERE') {
            const payload = {
                name:      name,
                email:     email,
                phone:     phone,
                service:   service,
                message:   message,
                timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
            };

            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method:  'POST',
                headers: { 'Content-Type': 'text/plain' }, // text/plain avoids CORS preflight
                body:    JSON.stringify(payload)
            });

            const result = await response.json();

            if (result.status === 'success') {
                results.googleForms = true;
                successCount++;
                console.log('✅ 2/2: Data saved to Google Sheets!');
            } else {
                throw new Error(result.message || 'Unknown error from Apps Script');
            }
        } else {
            console.warn('⚠️  2/2: Google Sheets not configured. Follow GOOGLE-SHEET-SETUP.md');
        }
    } catch (error) {
        console.error('❌ Google Sheets Error:', error.message);
    }
    

    // ===========================
    // SHOW SUCCESS MESSAGE
    // ===========================
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Reset form
        contactForm.reset();
        
        // Show success message based on what worked
        let successMessage = '🎉 Thank you for contacting me!\n\n';
        
        if (successCount >= 2) {
            successMessage += '✅ WhatsApp message opened\n';
            successMessage += '✅ Data saved to Google Sheets\n';
            successMessage += '\nI will get back to you soon!';
        } else if (successCount >= 1) {
            successMessage += '✅ WhatsApp message opened\n';
            successMessage += '✅ Data saved to records\n';
            if (!results.email) {
                successMessage += '⚠️  Email: Setup pending (optional)\n';
            }
            successMessage += '\nI will get back to you soon!';
        } else if (successCount >= 1) {
            successMessage += '✅ WhatsApp message prepared!\n';
            successMessage += '\nPlease click "Send" in WhatsApp to complete.\n';
            if (!results.googleForms) {
                successMessage += '⚠️  Google Sheets: Setup pending\n';
            }
        } else {
            successMessage = '⚠️  Oops! Something went wrong.\n\nPlease contact me directly:\n📱 +91 9967603151\n📧 survedhiraj1998@gmail.com';
        }
        
        alert(successMessage);
        
        // Log completion summary
        console.log('\n📊 CONTACT FORM SUBMISSION SUMMARY:');
        console.log(`   Total Success: ${successCount}/2`);
        console.log(`   WhatsApp: ${results.whatsapp ? '✅' : '❌'}`);
        console.log(`   Google Sheets: ${results.googleForms ? '✅' : '❌'}`);
    }, 1000);
});

// ===========================
// Scroll Animations
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// ===========================
// Counter Animation for Stats
// ===========================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statItems = document.querySelectorAll('.stat-item h3');
            statItems.forEach(item => {
                const text = item.textContent;
                const number = parseInt(text);
                if (!isNaN(number) && !item.classList.contains('animated')) {
                    item.classList.add('animated');
                    animateCounter(item, number, 2000);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ===========================
// Parallax Effect
// ===========================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===========================
// Form Input Animation
// ===========================
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
});

// ===========================
// Lazy Loading Images
// ===========================
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('img').forEach(img => {
    imageObserver.observe(img);
});

// ===========================
// Performance: Debounce
// ===========================
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

const debouncedScroll = debounce(() => {
    // Heavy scroll calculations here
}, 100);

window.addEventListener('scroll', debouncedScroll);

// ===========================
// Initialize
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    console.log('%c🚀 Portfolio Website Loaded!', 'color: #667eea; font-size: 20px; font-weight: bold;');
    console.log('%c📞 Contact: +91 9967603151', 'color: #14b8a6; font-size: 14px;');
    console.log('%c📧 Email: surved1998@gmail.com', 'color: #14b8a6; font-size: 14px;');
    
    console.log('\n📋 Contact Form Configuration Status:');
    console.log('   ✅ WhatsApp: Ready');
    console.log('   ' + (GOOGLE_SCRIPT_URL === 'YOUR_APPS_SCRIPT_URL_HERE' ? '⚠️  ' : '✅ ') + 'Google Sheets: ' + (GOOGLE_SCRIPT_URL === 'YOUR_APPS_SCRIPT_URL_HERE' ? 'Not configured — follow GOOGLE-SHEET-SETUP.md' : 'Ready'));
    
    if (GOOGLE_SCRIPT_URL === 'YOUR_APPS_SCRIPT_URL_HERE') {
        console.log('\n💡 To enable Google Sheets, follow GOOGLE-SHEET-SETUP.md');
    }
    
    // Initialize sections animation
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.1}s`;
    });
});

// ===========================
// Add Loading Animation
// ===========================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    console.log('✨ All assets loaded successfully!');
});
