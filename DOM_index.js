
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
          
            console.log("clicked buttons",this);
          
            
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
    

    // Add animation to testimonial cards on scroll
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    testimonialCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-in-out';
        observer.observe(card);
    });
});

 // Simple form validation 
 const form = document.querySelector('form');
 if (form) {
     form.addEventListener('submit', function(e) {
         e.preventDefault();
         
         const inputs = form.querySelectorAll('input, textarea');
         let isValid = true;
         
         inputs.forEach(input => {
             if (!input.value.trim()) {
                 isValid = false;
                 input.classList.add('is-invalid');
             } else {
                 input.classList.remove('is-invalid');
             }
         });
         
         if (isValid) {
             // Send form data to a server 
             alert('Thank you for your submission!');
             form.reset();
         }
     });
 }
 // Handle form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Validate all inputs
    formInputs.forEach(input => {
        if (!validateInput(input)) {
            isValid = false;
        }
    });
    

    if (isValid) {
        // Collect form data
        const formData = {
            name: contactForm.querySelector('#name').value,
            email: contactForm.querySelector('#email').value,
            course: contactForm.querySelector('#course').value,
            message: contactForm.querySelector('#message').value
        };

        //  Send the data to server
        console.log('Form submitted:', formData);
          // Clear form and show success message
          contactForm.reset();
          alert('Thank you for your message! We will get back to you soon.');
      }
  });
 

// Input validation function
function validateInput(input) {
  input.classList.remove('is-invalid');
  input.classList.remove('is-valid');

  let isValid = true;

  if (input.hasAttribute('required') && !input.value.trim()) {
      isValid = false;
  }

  if (input.type === 'email' && input.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value)) {
          isValid = false;
      }
  }

  if (input.tagName === 'SELECT' && input.value === '') {
      isValid = false;
  }

  input.classList.add(isValid ? 'is-valid' : 'is-invalid');
  return isValid;
}

// Smooth scrolling for course navigation
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
          targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });

          // Update active state of nav links
          document.querySelectorAll('.nav-link').forEach(navLink => {
              navLink.classList.remove('active');
          });
          link.classList.add('active');
      }
  });
});

// Intersection Observer for course sections
const observerOptions = {
  threshold: 0.5,
  rootMargin: '-50px'
};

const observerCallback = (entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          // Update nav link active state based on visible section
          const targetId = `#${entry.target.id}`;
          document.querySelectorAll('.nav-link').forEach(link => {
              link.classList.toggle('active', link.getAttribute('href') === targetId);
          });
      }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe all course sections
document.querySelectorAll('[id^="course"]').forEach(section => {
  observer.observe(section);

});

