let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    slides.forEach(slide => (slide.style.display = 'none'));
    dots.forEach(dot => dot.classList.remove('active'));

    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');

    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Initialize slideshow
showSlides();

function currentSlide(index) {
    slideIndex = index - 1;
    showSlides();
}
