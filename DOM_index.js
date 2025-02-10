
// Wait for the DOM to be fully loaded before running any scripts
document.addEventListener('DOMContentLoaded', function() {
    // Course navigation functionality
    const courseLinks = document.querySelectorAll('.nav-link');
    const courseContents = document.querySelectorAll('[id^="course"]');

    // Add click handlers to course navigation
    courseLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            courseLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Hide all course contents
            courseContents.forEach(content => {
                content.style.display = 'none';
            });
                // Show selected course content
                const targetId = this.getAttribute('href').substring(1);
                document.getElementById(targetId).style.display = 'block';
            });
        });
    
       // Show only the first course content initially
       courseContents.forEach((content, index) => {
        content.style.display = index === 0 ? 'block' : 'none';
    });

    // Smooth scroll functionality
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    // "Read More" button functionality
    const readMoreButtons = document.querySelectorAll('.btn-primary');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const cardText = this.closest('.card-body').querySelector('.card-text');
            const fullText = cardText.getAttribute('data-full-text') || cardText.textContent;
            
            if (this.textContent === 'Read More') {
                cardText.setAttribute('data-full-text', cardText.textContent);
                cardText.textContent = fullText + ' This is additional content that appears when you click Read More. Click again to show less.';
                this.textContent = 'Show Less';
            } else {
                cardText.textContent = cardText.getAttribute('data-full-text');
                this.textContent = 'Read More';
            }
        });
    });


    
    
    
    