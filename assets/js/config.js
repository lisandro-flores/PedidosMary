const CONFIG = {
    BUSINESS_NAME: "Pedidos Mary",
    PHONE_NUMBER: "2371088731", // Tu número de WhatsApp
    CITY_NAME: "San Jose Buenavista / San Marcos Tlacoyalco", // Tu ciudad
    COMMISSION_RATE: 0.20, // 20%
};

// Helper para generar links de WhatsApp
CONFIG.getWhatsAppLink = (message = '') => {
    const baseUrl = `https://wa.me/${CONFIG.PHONE_NUMBER}`;
    return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
};

// Auto-reemplazo en HTML estático (Vanilla JS Magic)
document.addEventListener('DOMContentLoaded', () => {
    // Reemplazar textos de ciudad
    document.querySelectorAll('.config-city').forEach(el => {
        el.innerText = CONFIG.CITY_NAME;
    });

    // Reemplazar textos de teléfono
    document.querySelectorAll('.config-phone').forEach(el => {
        el.innerText = CONFIG.PHONE_NUMBER;
    });

    // Actualizar links de WhatsApp genéricos
    document.querySelectorAll('a.config-whatsapp').forEach(el => {
        if (!el.getAttribute('href') || el.getAttribute('href') === '#') {
            el.href = CONFIG.getWhatsAppLink();
        }
    });
});
