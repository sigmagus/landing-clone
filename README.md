# Landing Template

Una plantilla de landing page en React + Tailwind CSS + Framer Motion, totalmente data‑driven y responsive.

## 🚀 Instalación

```bash
git clone https://github.com/sigmagus/landing-clone.git
cd landing-clone
npm install
npm run dev
Abre http://localhost:3000 para ver tu landing en el navegador.

🔧 Edición de contenido
Todo el contenido (títulos, textos, enlaces, rutas de imágenes) está en:

src/data/content.ts

Modifica ese archivo y guarda para ver los cambios reflejados automáticamente.

🎨 Personalización de tema
Colores, tipografías y breakpoints están en:

tailwind.config.js

colors.primary, colors.accent, colors.highlight

Fuentes en fontFamily

Breakpoints (screens) y container

Ejecuta npm run dev tras cualquier cambio de configuración.

🛠 Build y despliegue
Para producción:

bash
Copy
Edit
npm run build
npm run start
Puedes desplegar en Vercel o Netlify apuntando al build generado.

📦 Uso como template
Para clonar sin historial:

bash
Copy
Edit
npx degit sigmagus/landing-clone my-landing
cd my-landing
npm install
npm run dev
⚖️ Licencia
MIT © sigmagus
