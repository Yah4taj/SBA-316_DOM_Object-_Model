
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
    
       
    
    
    
    