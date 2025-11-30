class AppMap extends HTMLElement {
    connectedCallback() {
        // Codificar la ciudad para la URL
        const cityEncoded = encodeURIComponent(CONFIG.CITY_NAME);

        this.innerHTML = `
            <section class="py-12 md:py-24 bg-white overflow-hidden">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-8 md:mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Zona de Entregas</h2>
                        <p class="text-lg text-gray-600">
                            Realizamos entregas personales en puntos céntricos de <span class="font-bold text-orange-600">${CONFIG.CITY_NAME}</span>.
                        </p>
                    </div>

                    <!-- Contenedor del Mapa con aislamiento y altura responsiva -->
                    <div class="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-lg border border-gray-200 isolate z-0">
                        <!-- Placeholder de carga -->
                        <div class="absolute inset-0 bg-gray-100 flex items-center justify-center -z-10">
                            <p class="text-gray-400">Cargando mapa...</p>
                        </div>
                        
                        <!-- Google Maps Embed -->
                        <iframe 
                            width="100%" 
                            height="100%" 
                            style="border:0;" 
                            loading="lazy" 
                            allowfullscreen 
                            referrerpolicy="no-referrer-when-downgrade"
                            src="https://maps.google.com/maps?q=${cityEncoded}&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            class="w-full h-full object-cover">
                        </iframe>
                        
                        <!-- Overlay Informativo (Responsive) -->
                        <div class="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 z-10">
                            <div class="flex items-start gap-3">
                                <div class="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i class="fa-solid fa-location-dot"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-gray-900 text-sm md:text-base">Puntos de Entrega</h3>
                                    <p class="text-xs md:text-sm text-gray-600 mt-1">Acordamos el punto medio más conveniente para ti (Plazas, Centro, etc).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}
customElements.define('app-map', AppMap);
