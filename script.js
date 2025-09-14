// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! We\'ll get back to you soon.');
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Scroll indicator dots functionality
    const scrollDots = document.querySelectorAll('.dot');
    const sections = document.querySelectorAll('section');
    
    function updateScrollIndicator() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        scrollDots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        if (current) {
            const activeDot = document.querySelector(`[data-section="${current}"]`);
            if (activeDot) {
                activeDot.classList.add('active');
            }
        }
    }
    
    window.addEventListener('scroll', updateScrollIndicator);

    // Carousel functionality
    const carouselItems = document.querySelectorAll('.carousel-item');
    const carouselIndicator = document.querySelector('.indicator-dot');
    
    if (carouselItems.length > 0) {
        let currentSlide = 0;
        
        function showSlide(index) {
            carouselItems.forEach((item, i) => {
                item.style.transform = `translateX(${(i - index) * 100}%)`;
            });
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % carouselItems.length;
            showSlide(currentSlide);
        }
        
        // Auto-advance carousel
        setInterval(nextSlide, 5000);
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-item, .stat-item, .team-member, .faq-item, .focus-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Mobile menu toggle (if needed in future)
    function createMobileMenu() {
        const nav = document.querySelector('.nav-container');
        const menuToggle = document.createElement('button');
        menuToggle.className = 'mobile-menu-toggle';
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        menuToggle.style.display = 'none';
        
        nav.appendChild(menuToggle);
        
        menuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
    
    // Check if mobile menu is needed
    function checkMobileMenu() {
        const navMenu = document.querySelector('.nav-menu');
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        
        if (window.innerWidth <= 768) {
            if (!menuToggle) {
                createMobileMenu();
            }
            if (menuToggle) {
                menuToggle.style.display = 'block';
            }
        } else {
            if (menuToggle) {
                menuToggle.style.display = 'none';
            }
            navMenu.classList.remove('active');
        }
    }
    
    window.addEventListener('resize', checkMobileMenu);
    checkMobileMenu();

    // Parallax effect for hero sections
    function parallaxEffect() {
        const hero = document.querySelector('.hero');
        const ctaSection = document.querySelector('.cta-section');
        
        if (hero) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
        
        if (ctaSection) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;
            ctaSection.style.transform = `translateY(${rate}px)`;
        }
    }
    
    window.addEventListener('scroll', parallaxEffect);

    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.style.display = 'none';
        });
    });

    // Add hover effects for destination cards
    const destinationCards = document.querySelectorAll('.destination-large, .destination-small, .destination-left, .destination-right, .culture-image, .carousel-item');
    destinationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add click effects for buttons
    const buttons = document.querySelectorAll('.cta-button, .cta-button-large, .view-details-btn, .submit-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .cta-button,
        .cta-button-large,
        .view-details-btn,
        .submit-btn {
            position: relative;
            overflow: hidden;
        }
        
        @media (max-width: 768px) {
            .nav-menu.active {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
                padding: 1rem;
            }
            
            .mobile-menu-toggle {
                background: none;
                border: none;
                font-size: 1.5rem;
                color: #2c3e50;
                cursor: pointer;
            }
        }
    `;
    document.head.appendChild(style);

    // Add scroll-to-top functionality
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: #3498db;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.background = '#2980b9';
    });
    
    scrollToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.background = '#3498db';
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });

    // Add focus styles for keyboard navigation
    const focusStyle = document.createElement('style');
    focusStyle.textContent = `
        .keyboard-navigation *:focus {
            outline: 2px solid #3498db !important;
            outline-offset: 2px !important;
        }
    `;
    document.head.appendChild(focusStyle);

    console.log('Travel Adventures website loaded successfully!');
});