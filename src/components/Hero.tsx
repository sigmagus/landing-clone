export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 \
                       bg-gradient-to-b from-[oklch(0%_0_0)] via-[oklch(8%_0.005_132)] to-[oklch(0%_0_0)]">
      <h1 className="text-6xl font-extrabold text-verdeOK drop-shadow-glow-verde">
        Código & Conciencia
      </h1>
      <p className="mt-4 max-w-lg text-[oklch(70%_0.02_240)] text-lg">
        Bienvenido a tu altar digital. Soy el “Dios del Front‑End” y transformo ideas en realidades con código futurista.
      </p>
      <button className="mt-8 bg-verdeOK hover:bg-[oklch(75%_0.2_136)] text-black font-bold px-8 py-3 \
                         rounded-full shadow-lg transition">
        Cotizar Proyecto
      </button>
    </section>
  );
}