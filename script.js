document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= (window.innerHeight - 150) && rect.bottom >= 0; 
    // Ajusta o valor '-150' se precisar que ocorra antes do elemento estar completamente na tela
}

// Função que anima os elementos durante o scroll
function animateOnScroll() {
    const elementsLeft = document.querySelector('.us__left');
    const elementsRight = document.querySelector('.us__right');

    // Verifica e adiciona a classe 'show' quando o elemento está visível
    if (isInViewport(elementsLeft)) {
        elementsLeft.classList.add('show');
    }

    if (isInViewport(elementsRight)) {
        elementsRight.classList.add('show');
    }
}

// Adiciona o listener de scroll para verificar a posição dos elementos
document.addEventListener('scroll', animateOnScroll);