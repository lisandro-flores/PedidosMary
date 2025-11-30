# 🛍️ Pedidos Mary - Plataforma de Compras Internacionales

> **Versión 2.0** - Modular, Configurable y Optimizada para Conversión.

Este proyecto es una Landing Page profesional diseñada para un servicio de "Personal Shopper" que facilita compras en Shein, Temu y Amazon para clientes sin tarjeta de crédito.

---

## 🚀 Características Principales

*   **Diseño Premium & Responsivo**: Estética moderna con Tailwind CSS, animaciones suaves y glassmorphism.
*   **100% Configurable**: Cambia el nombre del negocio, teléfono y ciudad desde un solo archivo (`config.js`).
*   **Arquitectura Modular**: Uso de Web Components nativos (`<app-navbar>`, `<urgency-bar>`, etc.) para un código limpio y mantenible.
*   **Herramientas de Venta**:
    *   Calculadora de precios en tiempo real con comisión ajustable.
    *   Generador de enlaces de WhatsApp automáticos con mensajes pre-llenados.
    *   Barra de urgencia con cuenta regresiva automática (cierra los domingos).
*   **Kit de Marketing Incluido**: Banner para redes sociales y Flyer imprimible que se actualizan automáticamente con tu configuración.

---

## 📂 Estructura del Proyecto

```text
anuncio/
├── assets/
│   ├── css/
│   │   └── styles.css       # Estilos globales y animaciones personalizadas
│   ├── js/
│   │   ├── components/      # Web Components (Navbar, Footer, UrgencyBar)
│   │   ├── config.js        # ⚙️ ARCHIVO DE CONFIGURACIÓN PRINCIPAL
│   │   └── script.js        # Lógica de la calculadora y animaciones
├── docs/                    # Documentación adicional
│   ├── ANALISIS_NEGOCIO.md  # Estrategia comercial y modelo de negocio
│   └── COMO_PUBLICAR.md     # Guía paso a paso para subir tu web a internet
├── marketing/               # Material publicitario
│   ├── banner.html          # Banner para Instagram/Facebook (auto-actualizable)
│   └── flyer.html           # Volante tamaño A4 para imprimir (auto-actualizable)
├── index.html               # Página principal
└── terminos.html            # Página de Términos y Garantías
```

---

## ⚙️ Configuración (¡IMPORTANTE!)

Todo el sitio web se controla desde un único archivo. Antes de publicar, asegúrate de editar:

**Archivo:** `assets/js/config.js`

```javascript
const CONFIG = {
    BUSINESS_NAME: "Pedidos Mary",      // Nombre de tu negocio
    PHONE_NUMBER: "1234567890",         // Tu número de WhatsApp (sin espacios ni guiones)
    CITY_NAME: "[Tu Ciudad]",           // Ciudad donde operas (ej. "Monterrey")
    COMMISSION_RATE: 0.20,              // Tu comisión (0.20 = 20%)
};
```

*Al guardar este archivo, los cambios se reflejarán automáticamente en:*
*   El sitio web (`index.html`, `terminos.html`)
*   Los enlaces de WhatsApp
*   El Banner publicitario
*   El Flyer imprimible (incluso el código QR)

---

## 🛠️ Desarrollo y Personalización

### Web Components
El sitio utiliza componentes web nativos para evitar repetir código HTML.
*   **Barra de Urgencia:** `<urgency-bar>` (en `assets/js/components/UrgencyBar.js`)
*   **Navegación:** `<app-navbar>` (en `assets/js/components/Navbar.js`)
*   **Pie de Página:** `<app-footer>` (en `assets/js/components/Footer.js`)

### Estilos
El proyecto usa **Tailwind CSS** (vía CDN para desarrollo rápido) y estilos personalizados en `assets/css/styles.css`.

---

## 📢 Kit de Marketing

En la carpeta `marketing/` encontrarás herramientas listas para usar:

1.  **Banner (`banner.html`)**: Abre este archivo en tu navegador, toma una captura de pantalla y úsala en tus historias de Instagram o estados de WhatsApp.
2.  **Flyer (`flyer.html`)**: Diseñado para tamaño A4. Ábrelo, presiona el botón de "Imprimir" y guárdalo como PDF o imprímelo directamente para repartir.

---

## 📚 Documentación Adicional

*   [📖 Estrategia de Negocio y Ventas](docs/ANALISIS_NEGOCIO.md): Aprende cómo usar esta web para vender más.
*   [☁️ Guía de Publicación](docs/COMO_PUBLICAR.md): Instrucciones para poner tu sitio en línea gratis (Netlify, Vercel, GitHub).

---

**Desarrollado con IA por Antigravity** | *Noviembre 2025*
