// change img
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 3000); // Change image every 3 seconds

// header ham burgar menu

        const menuToggle = document.querySelector('.menu-toggle');
        const navInfo = document.querySelector('.link');
        const closeButton = document.createElement('button');

        closeButton.classList.add('close-button');
        closeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        closeButton.setAttribute('aria-label', 'Close navigation');
        navInfo.prepend(closeButton); // Add close button to the nav-info

        menuToggle.addEventListener('click', () => {
            navInfo.classList.toggle('active');
            closeButton.style.display = navInfo.classList.contains('active') ? 'block' : 'none'; // Show/Hide close button
            menuToggle.style.display = navInfo.classList.contains('active') ? 'none' : 'block'; // Hide menu toggle when active
        });

        closeButton.addEventListener('click', () => {
            navInfo.classList.remove('active');
            closeButton.style.display = 'none'; // Hide close button
            menuToggle.style.display = 'block'; // Show menu toggle again
        });
