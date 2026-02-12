/* ===================================
   EXPERT IT SOLUTIONS - SCRIPT.JS
   Interactive Elements & Animations
   =================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // MOBILE MENU TOGGLE
    // ===================================
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const icon = this.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // ===================================
    // SCROLL ANIMATIONS
    // ===================================
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;
            
            // Trigger animation when element is 80% visible
            if (elementTop < windowHeight * 0.8 && elementBottom > 0) {
                element.classList.add('animated');
            }
        });
    };

    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    // Run on page load
    animateOnScroll();

    // ===================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only apply smooth scroll for valid anchors (not just "#")
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ===================================
    // HEADER SHADOW ON SCROLL
    // ===================================
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
        }
    });

    // ===================================
    // CONTACT FORM HANDLING
    // ===================================
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (!data.name || !data.phone || !data.email || !data.message) {
                alert('Please fill in all required fields.');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Phone validation (Indian format)
            const phoneRegex = /^[+]?[0-9]{10,13}$/;
            if (!phoneRegex.test(data.phone.replace(/\s/g, ''))) {
                alert('Please enter a valid phone number.');
                return;
            }

            // Simulate form submission
            // In production, you would send this to a server
            console.log('Form Data:', data);
            
            // Show success message
            contactForm.style.display = 'none';
            formSuccess.style.display = 'block';
            
            // Optional: Send to WhatsApp instead
            // const whatsappMessage = `Name: ${data.name}%0APhone: ${data.phone}%0AEmail: ${data.email}%0AService: ${data.service}%0AMessage: ${data.message}`;
            // window.open(`https://wa.me/919876543210?text=${whatsappMessage}`, '_blank');
            
            // Reset form after 5 seconds
            setTimeout(function() {
                contactForm.reset();
                contactForm.style.display = 'block';
                formSuccess.style.display = 'none';
            }, 5000);
        });
    }

    // ===================================
    // FLOATING BUTTONS ANIMATION
    // ===================================
    const floatingButtons = document.querySelectorAll('.float-btn');
    
    floatingButtons.forEach((btn, index) => {
        // Stagger animation on load
        setTimeout(() => {
            btn.style.animation = 'pulse 2s infinite, slideInRight 0.5s ease-out';
        }, index * 100);
    });

    // Add slide in animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);

    // ===================================
    // CLICK TO CALL TRACKING
    // ===================================
    const callButtons = document.querySelectorAll('a[href^="tel:"]');
    
    callButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Call button clicked:', this.href);
            // Track with analytics if needed
            // gtag('event', 'phone_call', { phone_number: this.href });
        });
    });

    // ===================================
    // WHATSAPP CLICK TRACKING
    // ===================================
    const whatsappButtons = document.querySelectorAll('a[href^="https://wa.me"]');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('WhatsApp button clicked:', this.href);
            // Track with analytics if needed
            // gtag('event', 'whatsapp_click');
        });
    });

    // ===================================
    // IMAGE LAZY LOADING FALLBACK
    // ===================================
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));

    // ===================================
    // STATS COUNTER ANIMATION
    // ===================================
    const statsNumbers = document.querySelectorAll('.stat-card h3');
    
    const animateCounter = (element) => {
        const target = parseInt(element.textContent.replace(/[^0-9]/g, ''));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60 FPS
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '');
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + (element.textContent.includes('+') ? '+' : '');
            }
        };
        
        updateCounter();
    };
    
    // Trigger counter animation when stats section is visible
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                const numbers = entry.target.querySelectorAll('.stat-card h3');
                numbers.forEach(num => {
                    if (num.textContent.match(/[0-9]/)) {
                        animateCounter(num);
                    }
                });
                entry.target.dataset.animated = 'true';
            }
        });
    }, { threshold: 0.5 });
    
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    // ===================================
    // PREVENT FORM RESUBMISSION ON REFRESH
    // ===================================
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }

    // ===================================
    // ACCESSIBILITY: FOCUS VISIBLE
    // ===================================
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-nav');
    });

    // ===================================
    // SERVICE CARD HOVER EFFECTS
    // ===================================
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ===================================
    // TESTIMONIAL SLIDER (Optional Enhancement)
    // ===================================
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    let currentTestimonial = 0;
    
    if (testimonialCards.length > 0 && window.innerWidth < 768) {
        // Mobile testimonial slider
        const showTestimonial = (index) => {
            testimonialCards.forEach((card, i) => {
                card.style.display = i === index ? 'block' : 'none';
            });
        };
        
        // Optional: Auto-rotate testimonials
        // setInterval(() => {
        //     currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        //     showTestimonial(currentTestimonial);
        // }, 5000);
    }

    // ===================================
    // CONSOLE MESSAGE
    // ===================================
    console.log('%c🔧 Expert IT Solutions - Website Loaded Successfully!', 
                'background: #4CAF50; color: white; font-size: 16px; padding: 10px;');
    console.log('%cBuilt with HTML, CSS, and JavaScript', 
                'color: #666; font-size: 12px;');
    
    // ===================================
    // PAGE LOAD PERFORMANCE
    // ===================================
    window.addEventListener('load', function() {
        const loadTime = window.performance.timing.domContentLoadedEventEnd - 
                        window.performance.timing.navigationStart;
        console.log(`Page loaded in ${loadTime}ms`);
    });

});

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Format phone number for display
function formatPhoneNumber(phone) {
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{5})$/);
    if (match) {
        return '+' + match[1] + ' ' + match[2] + ' ' + match[3];
    }
    return phone;
}

// Validate email
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Debounce function for performance
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
