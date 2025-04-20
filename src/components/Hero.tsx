// src/components/Hero.tsx
/*import { content } from '../data/content';

export function Hero() {
  const { title, subtitle, image } = content.hero;

  return (
    <section
      id="hero"
      className="flex flex-col-reverse md:flex-row items-center py-20 px-4 bg-gradient-to-r from-primary to-accent text-white"
    >
      <div className="md:w-1/2">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="mb-8">{subtitle}</p>
      </div>
      <div className="md:w-1/2">
        <img src={image} alt="Hero graphic" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
    </section>
  );
}
*/
// src/components/Hero.tsx
// src/components/Hero.tsx
// src/components/Hero.tsx
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { fadeIn, slideInFromRight } from '../utils/variants';

export function Hero() {
  const { title, subtitle, image } = content.hero;

  return (
    <section
      id="hero"
      className="
        flex flex-col-reverse        /* móvil: imagen arriba, texto abajo */
        sm:flex-col-reverse          /* hasta sm igual */
        md:flex-row                  /* en md+ lado a lado */
        items-center justify-center
        py-16 sm:py-20 md:py-32      /* padding vertical adaptado */
        px-4 sm:px-6 lg:px-8          /* padding horizontal responsivo */
      "
    >
      {/* Texto animado con fadeIn */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left space-y-6"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
          {title}
        </h1>
        <p className="text-sm sm:text-base md:text-lg max-w-lg mx-auto md:mx-0">
          {subtitle}
        </p>
      </motion.div>

      {/* Imagen animada con slideInFromRight */}
      <motion.div
        className="w-full sm:w-3/4 md:w-1/2 mb-8 md:mb-0"
        variants={slideInFromRight}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <img
          src={image}
          alt="Hero graphic"
          className="w-full h-auto rounded-lg shadow-2xl"
        />
      </motion.div>
    </section>
  );
}
