# Bitácora de cambios

## 2025-04-20 — Estructurar proyecto como template

- [ ] Crear `src/data/content.ts` y migrar todo el contenido estático (títulos, textos, rutas de imágenes, enlaces).
- [ ] Parametrizar componentes (`Hero`, `NavBar`, `Services`, `Projects`, `Contact`) para que reciban **props**.
- [ ] Actualizar `App.tsx` (o `pages/index.tsx`) para importar `content` y pasar props a cada sección.
- [ ] Revisar y ajustar `tailwind.config.js` (colores, fuentes, config extra) para que sea fácil de personalizar.
- [ ] Centralizar animaciones en `src/utils/variants.ts` y eliminar variantes no usadas.
- [ ] Realizar pruebas responsivas (mobile/tablet/desktop) y anotar cualquier ajuste.
- [ ] Actualizar `README.md` con instrucciones de instalación, personalización y despliegue.
