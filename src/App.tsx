// src/App.tsx
// src/App.tsx
/*import { NavBar }   from './components/NavBar';
import { Hero }     from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Contact }  from './components/Contact';

export default function App() {
  return (
    <div
      className="
        font-mono
        text-[oklch(98%_0.01_30)] /* texto casi blanco en OKLCH */
     /* "
  
    >
      <NavBar />

      <main className="pt-16">
        <section id="hero">
          <Hero />
        </section>

        <section id="projects" className="pt-20">
          <Projects />
        </section>

        <section id="services" className="pt-20">
          <Services />
        </section>

        <section id="contact" className="pt-20">
          <Contact />
        </section>
      </main>
    </div>
  );
}
*/

/*export default function App() {
  return (
    <div className="min-h-screen bg-[#0f883a] flex items-center justify-center">
      <h1 className="text-5xl text-[#8b5cf6]">
        ¡Tailwind FUNCIONA! 🎉
      </h1>
    </div>
  );
}*/
// src/App.tsx
// src/App.tsx
import { NavBar }   from './components/NavBar';
import { Hero }     from './components/Hero';
import  Services  from './components/Services';
import { Projects } from './components/Projects';
import { Contact }  from './components/Contact';

export default function App() {
  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-b
          from-[oklch(0%_0_0)]
          via-[oklch(8%_0.005_132)]
          to-[oklch(0%_0_0)]
        font-mono
        text-[oklch(98%_0.01_30)]
      "
    >
      <NavBar />

      <main className="pt-16">
        <div className="max-w-5xl mx-auto px-4">
          <section id="hero" className="pt-20">
            <Hero />
          </section>

          <section id="projects" className="pt-20">
            <Projects />
          </section>

          <section id="services" className="pt-20">
            <Services />
          </section>

          <section id="contact" className="pt-20">
            <Contact />
          </section>
        </div>
      </main>
    </div>
  );
}
