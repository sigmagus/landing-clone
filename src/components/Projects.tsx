// src/components/Projects.tsx
// src/components/Projects.tsx
import { content } from '../data/content';

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Proyectos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.projects.map((proj) => (
            <a
              key={proj.name}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={proj.thumbnail}
                alt={proj.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-1">{proj.name}</h3>
                <p className="text-gray-600 text-sm">{proj.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
