// Rotating word effect for hero section
const rotatingWords = ['evaluation', 'post-training', 'RLHF'];
let currentWordIndex = 0;
const rotatingWordElement = document.getElementById('rotatingWord');

function rotateWord() {
    if (rotatingWordElement) {
        currentWordIndex = (currentWordIndex + 1) % rotatingWords.length;
        rotatingWordElement.textContent = rotatingWords[currentWordIndex];
    }
}

// Change word every 4 seconds
if (rotatingWordElement) {
    setInterval(rotateWord, 4000);
}

// FAQ Accordion functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        const faqItem = this.closest('.faq-item');
        
        // Close other open items
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem && item.classList.contains('open')) {
                item.classList.remove('open');
            }
        });
        
        // Toggle current item
        faqItem.classList.toggle('open');
    });
});

// Smooth scroll for buttons (if there were anchor links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Menu button functionality
const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', function() {
    // This can be expanded for mobile menu functionality
    console.log('Menu clicked');
});

// Handle CTA button
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        // This could navigate to a sign-up page or open a modal
        console.log('CTA button clicked - Talk to Founders');
    });
}

// Add scroll animation for elements coming into view
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

// Observe feature cards and other elements
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});
