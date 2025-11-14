export default function Projects() {
  const projects = [
    {
      title: "KIDDIES",
      description: "KIDDIES was an interactive platform created to help children learn English in an easy and enjoyable way. It offered fun activities, games, and exercises that made learning engaging, allowing kids to practice language skills while having fun. The platform focused on making education accessible and motivating, encouraging children to explore and develop their English abilities naturally.",
      image: "/projects/KIDDIES.png",
      link: "https://www.figma.com/design/fQQ1Ynb4BuWwxzcEWELhdR/kiddies-copia?node-id=0-1&p=f"
    },
    {
      title: "JAMBO",
      description: "JAMBO is a digital platform that connects people with urgent needs to skilled local workers. It aims to close the gap between those who need help and those who have the skills to provide it. The project promotes dignified work, visibility, and digital inclusion, strengthening the local economy through trust and real experience.",
      image: "/projects/JAMBO.png",
      link: "https://github.com/javo-zy/JamboExpo.git"
    },
    {
      title: "FINACC",
      description: "FINACC was a platform designed to provide easy access to financial education and important procedures. It guided users step by step through processes like tax declarations, helping them understand what to do. The platform aimed to make financial management and administrative tasks simple, clear, and accessible for everyone",
      image: "/projects/FINACC.png",
      link: "https://github.com/Kathy-Jim/Finacc.github.io.git" 
    }
  ];

  return (
    <main className="container">
      <h1 className="section-title">Mis Proyectos</h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img src={project.image} alt={project.title} className="project-img" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
