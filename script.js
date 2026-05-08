const featureCards = document.querySelectorAll('.feature-card');

featureCards.forEach((card) => {
    card.addEventListener('mousemove', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');

    if (window.scrollY > 50) {
        header.style.background = 'rgba(0,0,0,0.7)';
    } else {
        header.style.background = 'rgba(0,0,0,0.3)';
    }
});
