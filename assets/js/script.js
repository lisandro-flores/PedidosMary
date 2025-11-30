document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => {
        el.classList.add('transition', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-10');
        observer.observe(el);
    });

    // FAQ Toggle Icon Rotation
    const details = document.querySelectorAll('details');
    details.forEach(targetDetail => {
        targetDetail.addEventListener('click', () => {
            details.forEach(detail => {
                if (detail !== targetDetail) {
                    detail.removeAttribute('open');
                }
            });
        });
    });

    // --- NEW FEATURES ---

    // 2. Price Calculator
    const priceInput = document.getElementById('priceInput');
    const commissionDisplay = document.getElementById('commissionDisplay');
    const totalDisplay = document.getElementById('totalDisplay');

    if (priceInput) {
        const whatsappBtn = document.querySelector('#calculadora a[href^="https://wa.me"]');

        priceInput.addEventListener('input', (e) => {
            const price = parseFloat(e.target.value);
            if (!isNaN(price) && price > 0) {
                const commission = price * CONFIG.COMMISSION_RATE;
                const total = price + commission;

                commissionDisplay.innerText = `$${commission.toFixed(2)}`;
                totalDisplay.innerText = `$${total.toFixed(2)}`;

                // Update WhatsApp Link with smart message
                if (whatsappBtn) {
                    const message = `Hola, coticé un artículo de $${price} en la web. El total estimado es $${total}. ¿Me ayudas a pedirlo?`;
                    whatsappBtn.href = CONFIG.getWhatsAppLink(message);
                }
            } else {
                commissionDisplay.innerText = '$0.00';
                totalDisplay.innerText = '$0.00';
                if (whatsappBtn) whatsappBtn.href = CONFIG.getWhatsAppLink();
            }
        });
    }
});
