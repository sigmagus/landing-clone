import React from 'react';

export default function Services() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-verdeOK mb-8">Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl mb-2">Básico</h3>
          <p>$300 - Landing page simple</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl mb-2">Premium</h3>
          <p>$600 - Landing + Sección Proyectos</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl mb-2">VIP</h3>
          <p>$1,200 - Web completa con Contacto</p>
        </div>
      </div>
    </div>
  );
}