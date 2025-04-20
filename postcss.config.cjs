// postcss.config.cjs
console.log('🔧 Cargando postcss.config.cjs…')

module.exports = {
  plugins: [
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
  ],
}
