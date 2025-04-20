// src/components/Contact.tsx
/*import { content } from '../data/content';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-8">Contáctame</h2>
      <div className="max-w-md mx-auto space-y-4 text-center">
        <p>
          <strong>Email:</strong>{' '}
          <a href={`mailto:${content.contact.email}`} className="text-accent hover:underline">
            {content.contact.email}
          </a>
        </p>
        <p>
          <strong>Teléfono:</strong>{' '}
          <a href={`tel:${content.contact.phone}`} className="text-accent hover:underline">
            {content.contact.phone}
          </a>
        </p>
        {content.contact.address && (
          <p>
            <strong>Dirección:</strong> {content.contact.address}
          </p>
        )}
        {/* Si tienes un formulario, añádelo aquí *//*}
      </div>
    </section>
  );
}
*/

// src/components/Contact.tsx
import { content } from '../data/content';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Contáctame</h2>
        <p className="mb-4">
          <strong>Email:</strong>{' '}
          <a href={`mailto:${content.contact.email}`} className="text-accent hover:underline">
            {content.contact.email}
          </a>
        </p>
        <p className="mb-4">
          <strong>Teléfono:</strong>{' '}
          <a href={`tel:${content.contact.phone}`} className="text-accent hover:underline">
            {content.contact.phone}
          </a>
        </p>
        {content.contact.address && (
          <p>
            <strong>Dirección:</strong> {content.contact.address}
          </p>
        )}
      </div>
    </section>
  );
}
