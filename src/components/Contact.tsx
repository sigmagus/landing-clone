export default function Contact() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-verdeOK mb-8">Contacto</h2>
      <form className="max-w-lg mx-auto flex flex-col space-y-4">
        <input type="text" placeholder="Tu nombre" className="p-3 rounded bg-gray-800 text-white" />
        <input type="email" placeholder="Tu email" className="p-3 rounded bg-gray-800 text-white" />
        <textarea placeholder="Tu mensaje" className="p-3 rounded bg-gray-800 text-white" rows={4} />
        <button type="submit" className="self-center bg-verdeOK hover:bg-[oklch(75%_0.2_136)] text-black px-6 py-2 rounded-full">
          Enviar
        </button>
      </form>
    </div>
  );
}