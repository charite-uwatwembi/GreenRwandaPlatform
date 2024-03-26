let cardsContainer = document.querySelector('.cards');
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');
let currentSlide = 0; // Start at the first slide
let numberOfSlides = document.querySelectorAll('.card').length;

// Function to slide to a specific slide
function slideTo(slideIndex) {
    // Ensure the slide index is within bounds
    if (slideIndex < 0) {
        slideIndex = 0;
    } else if (slideIndex >= numberOfSlides) {
        slideIndex = numberOfSlides - 1;
    }

    // Update the current slide
    currentSlide = slideIndex;

    // Calculate the width of a single card dynamically
    let cardWidth = document.querySelector('.card').offsetWidth;

    // Update the transform property to slide the cards
    cardsContainer.style.transform = `translateX(-${slideIndex * cardWidth}px)`;

    // Update the indicators (if you have them)
    updateIndicators(currentSlide);

    // Disable/enable buttons based on the current slide
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === numberOfSlides - 1;
}

// Event listeners for the navigation buttons
prevBtn.addEventListener('click', function() {
    slideTo(currentSlide - 1); // Go to the previous slide
});

nextBtn.addEventListener('click', function() {
    slideTo(currentSlide + 1); // Go to the next slide
});

// Function to update indicators
function updateIndicators(currentSlide) {
    let indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Initial call to set up the slider
slideTo(currentSlide);
