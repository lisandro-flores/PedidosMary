class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
                <div class="max-w-7xl mx-auto px-4 text-center">
                    <div class="flex justify-center items-center gap-2 mb-6">
                        <i class="fa-solid fa-bag-shopping text-orange-500 text-2xl"></i>
                        <span class="text-2xl font-bold text-white">${CONFIG.BUSINESS_NAME}</span>
                    </div>
                    <p class="mb-8 max-w-md mx-auto">Facilitando tus compras internacionales en ${CONFIG.CITY_NAME}. Seguro, rápido y sin complicaciones.</p>
                    
                    <div class="flex justify-center gap-8 text-2xl mb-8">
                        <a href="#" class="hover:text-white hover:scale-110 transition duration-300"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#" class="hover:text-white hover:scale-110 transition duration-300"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" class="hover:text-white hover:scale-110 transition duration-300"><i class="fa-brands fa-tiktok"></i></a>
                    </div>
                    
                    <p class="text-sm text-gray-600">
                        © 2024 ${CONFIG.BUSINESS_NAME}. Todos los derechos reservados. | 
                        <a href="terminos.html" class="hover:text-orange-500 transition underline decoration-dotted">Términos y Garantías</a>
                    </p>
                </div>
            </footer>
        `;
    }
}
customElements.define('app-footer', AppFooter);
