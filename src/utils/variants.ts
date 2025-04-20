// src/utils/variants.ts
export const fadeIn = {
  hidden: {
    opacity: 0,
    y: 20,            // parte 20px hacia abajo
    scale: 0.95,      // ligeramente más pequeño
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,         // vuelve a su tamaño normal
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export const slideInFromLeft = {
  hidden: { x: -100, opacity: 0 },
  show:   { x:   0, opacity: 1, transition: { type: 'tween', duration: 0.8 } },
};

export const slideInFromRight = {
  hidden: { x: 100, opacity: 0 },
  show:   { x:   0, opacity: 1, transition: { type: 'tween', duration: 0.8 } },
};

// …añade aquí otros variantes que uses (zoomIn, staggerContainer…)
