class AppNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="glass-nav fixed w-full z-50 transition-all duration-300 top-10">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between items-center h-16">
                        <div class="flex-shrink-0 flex items-center gap-2 cursor-pointer" onclick="window.scrollTo(0,0)">
                            <div class="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white">
                                <i class="fa-solid fa-bag-shopping"></i>
                            </div>
                            <span class="font-bold text-xl tracking-tight text-slate-900">${CONFIG.BUSINESS_NAME}</span>
                        </div>
                        <div class="hidden md:flex items-center space-x-8">
                            <a href="#calculadora" class="text-gray-600 hover:text-orange-600 font-medium transition">Calculadora</a>
                            <a href="#como-funciona" class="text-gray-600 hover:text-orange-600 font-medium transition">Cómo funciona</a>
                            <a href="#beneficios" class="text-gray-600 hover:text-orange-600 font-medium transition">Beneficios</a>
                            <a href="#faq" class="text-gray-600 hover:text-orange-600 font-medium transition">Preguntas</a>
                            <a href="${CONFIG.getWhatsAppLink()}" class="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition shadow-lg hover:shadow-orange-500/30 flex items-center gap-2">
                                <i class="fa-brands fa-whatsapp"></i> Cotizar
                            </a>
                        </div>
                        <div class="md:hidden flex items-center">
                            <a href="${CONFIG.getWhatsAppLink()}" class="text-orange-600 text-2xl">
                                <i class="fa-brands fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        `;
    }
}
customElements.define('app-navbar', AppNavbar);
