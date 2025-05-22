document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        this.innerHTML = mobileMenu.classList.contains('hidden') ? 
            '<i class="fas fa-bars text-xl"></i>' : 
            '<i class="fas fa-times text-xl"></i>';
    });
    
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            mobileMenuButton.innerHTML = '<i class="fas fa-bars text-xl"></i>';
        });
    });
    
    // Experience tabs
    const experienceTabs = document.querySelectorAll('.experience-tab');
    const experienceContents = document.querySelectorAll('.experience-content');
    
    experienceTabs.forEach((tab, index) => {
        tab.addEventListener('click', function() {

            experienceTabs.forEach(t => {
                t.classList.remove('border-secondary', 'text-light', 'bg-gray-800/30');
                t.classList.add('border-gray-700', 'text-gray-400');
            });
            
            this.classList.remove('border-gray-700', 'text-gray-400');
            this.classList.add('border-secondary', 'text-light', 'bg-gray-800/30');
            
            // Hide all content
            experienceContents.forEach(content => {
                content.classList.add('hidden');
            });
            
            // Show corresponding content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.remove('hidden');
        });
    });
    
    if (experienceTabs.length > 0) {
        experienceTabs[0].click();
    }
    
    // Smooth scrolling for links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Shadow to navbar on scroll
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 10) {
            nav.classList.add('shadow-xl');
        } else {
            nav.classList.remove('shadow-xl');
        }
    });
    
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.project-card, .experience-content, #about > div, #contact > div');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate-fadeIn');
            }
        });
    };
    
    animateOnScroll();

    window.addEventListener('scroll', animateOnScroll);
});