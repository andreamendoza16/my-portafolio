"use client";

export default function Home() {
  return (
    <main className="container">

      <div className="social-icons">

        <a 
          href="https://www.linkedin.com/in/andrea-mendoza-024295368/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src="/icons/link.png" alt="LinkedIn" />
        </a>

        <a 
          href="https://github.com/andreamendoza16" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src="/icons/portafolio.png" alt="GitHub" />
        </a>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigator.clipboard.writeText("andreamendozaargt@gmail.com");
            alert("Correo copiado: andreamendozaargt@gmail.com");
          }}
        >
          <img src="/icons/email.png" alt="Email" />
        </a>
      </div>

      <section className="hero">
        <h1 className="title">Andrea Mendoza</h1>
        <p className="subtitle"> • Portafolio</p>

        <p className="description">
          Estudiante con conocimientos en Excel, inglés y JavaScript. 
          Me gusta aprender, proponer ideas y desarrollar proyectos con un enfoque creativo y organizado. 
          En este portafolio encontrarás trabajos que muestran mi forma de resolver tareas, experimentar con nuevas herramientas 
          y seguir mejorando en cada paso.
        </p>

        <a href="/projects" className="btn-primary">Ver proyectos</a>
      </section>

    </main>
  );
}
