class UrgencyBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="bg-slate-900 text-white py-2 px-4 fixed top-0 w-full z-[60] text-center text-sm font-medium shadow-md">
                <p>🔥 ¡Próximo pedido cierra en: <span id="countdown" class="font-bold text-orange-400 font-mono text-base">00d 00h 00m</span>! <span class="hidden sm:inline">Aparta con el 50%.</span></p>
            </div>
        `;
        this.startCountdown();
    }

    startCountdown() {
        const update = () => {
            const now = new Date();
            const nextSunday = new Date();
            nextSunday.setDate(now.getDate() + (7 - now.getDay()) % 7);
            nextSunday.setHours(23, 59, 59, 999);

            if (now.getDay() === 0 && now.getHours() > 20) {
                nextSunday.setDate(now.getDate() + 7);
            }

            const diff = nextSunday - now;
            const d = Math.floor(diff / (1000 * 60 * 60 * 24));
            const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

            const el = this.querySelector('#countdown');
            if (el) el.innerText = `${d}d ${h}h ${m}m`;
        };
        setInterval(update, 60000);
        update();
    }
}
customElements.define('urgency-bar', UrgencyBar);
