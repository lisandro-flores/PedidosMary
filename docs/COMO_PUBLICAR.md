# Cómo publicar tu página web GRATIS

Aquí tienes las mejores opciones para publicar tu página web sin costo.

> **⚠️ ANTES DE PUBLICAR:** Asegúrate de haber actualizado tus datos (Teléfono, Ciudad, Nombre) en el archivo `assets/js/config.js`.

## Opción 1: Netlify (La más fácil y rápida)
Ideal si no quieres usar comandos ni configuraciones complejas.

1. Ve a [app.netlify.com/drop](https://app.netlify.com/drop).
2. Abre la carpeta de tu proyecto en tu computadora (`c:\Users\lisan\Ingenieria\anuncio`).
3. **Arrastra toda la carpeta** `anuncio` dentro del recuadro punteado en la página de Netlify.
4. ¡Listo! En unos segundos te dará un link (ej. `random-name.netlify.app`).
5. Puedes cambiar el nombre del sitio en "Site Settings" > "Change site name".

## Opción 2: Vercel
Muy rápido y profesional.

1. Ve a [vercel.com](https://vercel.com) y crea una cuenta.
2. Instala Vercel en tu computadora (necesitas Node.js):
   - Abre una terminal en tu carpeta y escribe: `npx vercel`
3. Sigue las instrucciones en pantalla (dale Enter a todo por defecto).
4. Te dará un link de producción.

## Opción 3: GitHub Pages
La opción estándar para desarrolladores (requiere Git).

1. Crea una cuenta en [github.com](https://github.com).
2. Crea un "New Repository" (público).
3. En tu carpeta, abre la terminal y ejecuta:
   ```bash
   git init
   git add .
   git commit -m "Mi pagina web"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```
4. Ve a la configuración del repositorio (Settings) > Pages > Source > selecciona "main".

## Recomendación
Para empezar ya mismo, usa **Netlify Drop**. Es literalmente arrastrar y soltar.
