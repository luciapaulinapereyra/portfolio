// pages/portfolio.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const Portfolio: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Mis Proyectos</h1>
        <div className="project-list">
          <ProjectCard
            title="Proyecto 1"
            description="Descripción del proyecto 1."
            imageUrl="/images/project1.jpg"
          />
          <ProjectCard
            title="Proyecto 2"
            description="Descripción del proyecto 2."
            imageUrl="/images/project2.jpg"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
