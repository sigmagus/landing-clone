// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Activa dark mode si lo deseas (opcional)
  // darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:  '#3b0d6f',       // morado oscuro
        accent:   '#39ff14',       // verde neón
        highlight:'#ff3399',       // rosa neón
        background: {
          dark:   'oklch(0% 0 0)',         // negro OKLCH
          mid:    'oklch(8% 0.005 132)',   // gris muy oscuro
        }
      },
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'], // o la que prefieras
      },
      container: {
        center: true,
        padding: '1rem',
      },
      screens: {
        'xs': '480px',
        // el resto ya viene por defecto (sm, md, lg, xl, 2xl)
      },
    },
  },
  plugins: [
    // si usas aspect-ratio, forms, typography, etc:
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}

  