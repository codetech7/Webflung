// Webflung Interactive Features Handler

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth navigation behavior for menu links
    const navigationLinks = document.querySelectorAll('.menu-link');
    
    navigationLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add interactive hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    const secondaryColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--secondary-tone').trim();
    
    projectCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.style.borderLeft = '4px solid ' + secondaryColor;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderLeft = 'none';
        });
    });
    
    // Simple scroll reveal animation
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const fadeInObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Apply fade-in effect to sections
    const sections = document.querySelectorAll('.info-block, .showcase-area, .reach-out-area');
    sections.forEach(function(section) {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeInObserver.observe(section);
    });
    
    console.log('Webflung interactions initialized successfully');
});
