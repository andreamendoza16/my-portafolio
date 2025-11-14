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
          En este portafolio se encuentran trabajos que muestran mi forma de resolver tareas, experimentar con nuevas herramientas 
          ,seguir mejorando en cada paso y ganando experiencia.
        </p>

        <a href="/projects" className="btn-primary">Ver proyectos</a>
      </section>

      {/* Sección de Habilidades */}
      <section className="skills">
        <h2 className="section-title">Mis Habilidades</h2>
        <div className="skills-list">
          <div className="skill-item">Comunicación Efectiva</div>
          <div className="skill-item">Canva</div>
          <div className="skill-item">Figma</div>
          <div className="skill-item">Creatividad</div>
          <div className="skill-item">Programación</div>
          <div className="skill-item">Inglés </div>
          <div className="skill-item">Trabajo en Equipo</div>
          <div className="skill-item">Resolución de Problemas</div>
          <div className="skill-item">Uso de herramientas de Office</div>
          <div className="skill-item">Adaptabilidad</div>
        </div>
      </section>

    </main>
  );
}
