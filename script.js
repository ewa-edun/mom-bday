// Page Transition Functions
function showMainPage() {
    const landingPage = document.querySelector('.landing-page');
    const mainPage = document.querySelector('.main-page');
    
    landingPage.classList.remove('active');
    setTimeout(() => {
        mainPage.classList.add('active');
    }, 500);
}

function showGalleryPage() {
    const mainPage = document.querySelector('.main-page');
    const galleryPage = document.querySelector('.gallery-page');
    
    mainPage.classList.remove('active');
    setTimeout(() => {
        galleryPage.classList.add('active');
    }, 500);
}

// Add initial page transition
document.addEventListener('DOMContentLoaded', () => {
    const landingPage = document.querySelector('.landing-page');
    landingPage.classList.add('active');
    
    // Add fade-in animation to the landing page content
    setTimeout(() => {
        const content = landingPage.querySelector('.content');
        content.style.opacity = '1';
    }, 200);
});

// Add hover animations to photo placeholders
const photoPlaceholders = document.querySelectorAll('.photo-placeholder');
photoPlaceholders.forEach(placeholder => {
    placeholder.addEventListener('mouseenter', () => {
        placeholder.style.transform = 'scale(1.05)';
    });
    
    placeholder.addEventListener('mouseleave', () => {
        placeholder.style.transform = 'scale(1)';
    });
});

// Add scroll animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.message, .photo-placeholder');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Initial scroll animation check
animateOnScroll();