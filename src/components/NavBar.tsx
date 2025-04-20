export default function NavBar() {
  return (
    <nav className="w-full flex items-center justify-between p-6 bg-black/50 fixed top-0 z-10">
      <div className="text-2xl font-bold text-verdeOK">Dios del Front‑End</div>
      <ul className="flex space-x-6 text-gray-200">
        <li><a href="#hero" className="hover:text-verdeOK">Inicio</a></li>
        <li><a href="#projects" className="hover:text-verdeOK">Proyectos</a></li>
        <li><a href="#services" className="hover:text-verdeOK">Servicios</a></li>
        <li><a href="#contact" className="hover:text-verdeOK">Contacto</a></li>
      </ul>
    </nav>
  );
}