
    document.addEventListener('DOMContentLoaded', function() {
        const aboutSection = document.querySelector('.about-section');
        const usLeft = document.querySelector('.us__left');
        const usRight = document.querySelector('.us__right');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    usLeft.classList.add('show');
                    usRight.classList.add('show');
                }
            });
        });

        observer.observe(aboutSection);
    });

