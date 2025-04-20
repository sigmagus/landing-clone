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
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { fadeIn, slideInFromRight } from '../utils/variants';

export function Hero() {
  const { title, subtitle, image } = content.hero;

  return (
    <section
      id="hero"
      className="flex flex-col-reverse md:flex-row items-center justify-center py-32 px-4"
    >
      {/* Texto animado con fadeIn */}
      <motion.div
        className="md:w-1/2 text-center md:text-left space-y-6"
        variants={fadeIn}           // ¿qué animación usar?
        initial="hidden"            // estado inicial
        whileInView="show"          // cuándo reproducir
        viewport={{ once: true, amount: 0.25 }} // solo 25% visible y una vez
      >
        <h1 className="text-6xl font-extrabold leading-tight">
          {title}
        </h1>
        <p className="text-lg max-w-lg mx-auto md:mx-0">
          {subtitle}
        </p>
      </motion.div>

      {/* Imagen animada con slideInFromRight */}
      <motion.div
        className="md:w-1/2 mb-8 md:mb-0"
        variants={slideInFromRight}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
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
