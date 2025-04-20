import React from 'react';

export default function Projects() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-verdeOK mb-8">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl mb-2">Proyecto 1</h3>
          <p>Descripción breve del proyecto 1.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl mb-2">Proyecto 2</h3>
          <p>Descripción breve del proyecto 2.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl mb-2">Proyecto 3</h3>
          <p>Descripción breve del proyecto 3.</p>
        </div>
      </div>
    </div>
  );
}