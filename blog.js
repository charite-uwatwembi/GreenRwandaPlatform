let cardsContainer = document.querySelector('.cards-container');
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');
let currentPage = 0; // Start at the first page
let cardsPerPage = 3;

// Function to display cards based on the current page
function showPage(pageIndex) {
    let startIndex = pageIndex * cardsPerPage;
    let endIndex = startIndex + cardsPerPage;

    let cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        if (index >= startIndex && index < endIndex) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Event listener for the previous button
prevBtn.addEventListener('click', function() {
    currentPage = Math.max(0, currentPage - 1);
    showPage(currentPage);
});

// Event listener for the next button
nextBtn.addEventListener('click', function() {
    let totalPages = Math.ceil(document.querySelectorAll('.card').length / cardsPerPage);
    console.log('Total Pages:', totalPages);
    currentPage = Math.min(totalPages - 1, currentPage + 1);
    console.log('Current Page:', currentPage);
    showPage(currentPage);
});


// Initial call to show the first page of cards
showPage(currentPage);
