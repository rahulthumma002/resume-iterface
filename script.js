// Smooth scrolling for navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Pop-up details for work experience
document.querySelectorAll('.job').forEach(job => {
    job.addEventListener('click', function () {
        const popup = this.querySelector('.popup');
        popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
    });
});
