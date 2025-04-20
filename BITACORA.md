# Bitácora de cambios

## 2025-04-20 — Estructurar proyecto como template

- [x] Crear `src/data/content.ts` y migrar todo el contenido estático (títulos, textos, rutas de imágenes, enlaces).
- [x] Parametrizar componentes (`Hero`, `NavBar`, `Services`, `Projects`, `Contact`) para que reciban **props**.
- [x] Actualizar `App.tsx` (o `pages/index.tsx`) para importar `content` y pasar props a cada sección.
- [x] Revisar y ajustar `tailwind.config.js` (colores, fuentes, config extra) para que sea fácil de personalizar.
- [x] Centralizar animaciones en `src/utils/variants.ts` y eliminar variantes no usadas.
- [x] Realizar pruebas responsivas (mobile/tablet/desktop) y anotar cualquier ajuste.
- [x] Actualizar `README.md` con instrucciones de instalación, personalización y despliegue.
## 2025‑04‑20 — Merge a main

- [x] Mergear `refactor/estructurar-landing` en `main`