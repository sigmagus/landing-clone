// src/components/NavBar.tsx
// src/components/NavBar.tsx
import { useState } from 'react';
import { content } from '../data/content';

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-black/30 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center py-2 sm:py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">TuLogo</div>

        {/* Botón hamburguesa: sólo visible en md- */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        {/* Menú de navegación */}
        <ul
          className={`
            md:flex space-x-6 text-white
            ${open 
              ? 'flex flex-col absolute top-full left-0 w-full bg-black/80 p-4' 
              : 'hidden md:flex'
            }
          `}
        >
          {content.navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2 hover:text-accent transition"
                onClick={() => setOpen(false)} // cierra el menú al hacer clic
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
