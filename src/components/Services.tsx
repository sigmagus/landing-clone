// src/components/Services.tsx
// src/components/Services.tsx
import { content } from '../data/content';

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.services.map((svc) => (
            <div
              key={svc.title}
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={svc.icon}
                alt={svc.title}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{svc.title}</h3>
              <p className="text-gray-700">{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
