import React from 'react';
import { Container, Row } from 'react-bootstrap';
import projectsData from '../data/projects.json';
import ProjectCard from '../components/organisms/ProjectCard';

function Projects() {
  return (
    <Container className="my-5">
      <h1>Mis Proyectos</h1>
      <Row>
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Row>
    </Container>
  );
}

export default Projects;