import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { AiOutlineLink, AiFillGithub } from 'react-icons/ai';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './CSS/Projects.css';
import allProjects from '../assets/Routes/AllProject';

function Projects() {
  const [currentIndexes, setCurrentIndexes] = useState(
    allProjects.map(() => 0)
  );

  const nextImage = (index) => {
    setCurrentIndexes((prev) =>
      prev.map((val, i) =>
        i === index ? (val + 1) % allProjects[index].img.length : val
      )
    );
  };

  const prevImage = (index) => {
    setCurrentIndexes((prev) =>
      prev.map((val, i) =>
        i === index
          ? (val - 1 + allProjects[index].img.length) % allProjects[index].img.length
          : val
      )
    );
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Muhamad Ramadani - Project</title>
        </Helmet>
      </HelmetProvider>

      <Container fluid className="projects-container">
        <div className="projects-title animate__animated animate__zoomIn">
          <h3>Projects</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>04</strong>
          </h4>
        </div>

        <div className="projects-wrapper animate__animated animate__slideInRight animate_slower my-4">
          <div className="row custom-margin-bottom">
            {allProjects.map((project, index) => (
              <div className="col project-col" key={index}>
                <div className="project-card">
                  <div className="imgsec position-relative">
                    <img
                      src={project.img[currentIndexes[index]]}
                      alt={project.title}
                      loading="lazy"
                      className="project-img"
                    />
                    {project.img.length > 1 && (
                      <>
                        <button
                          className="carousel-btn prev"
                          onClick={() => prevImage(index)}
                        >
                          ‹
                        </button>
                        <button
                          className="carousel-btn next"
                          onClick={() => nextImage(index)}
                        >
                          ›
                        </button>
                      </>
                    )}
                  </div>

                  {/* Konten proyek */}
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    {project.websiteUrl && (
                      <a
                        className={project.maintenence ? 'btn-maintenence btn' : 'btn-website btn'}
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <AiOutlineLink className="project-icon" />
                        &nbsp;&nbsp;{project.maintenence ? 'Maintenance' : 'Website'}
                      </a>
                    )}

                    <a
                      className="btn-github"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillGithub className="project-icon" />
                      &nbsp;&nbsp;GitHub
                    </a>

                    <div className="d-block tech-stack-wrapper">
                      {project.techStack.map((tech) => (
                        <span key={tech} id="tech-stack">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Projects;
