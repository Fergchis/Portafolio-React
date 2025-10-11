import React from 'react';
import { Container, Row, Col, Button, Image, Badge } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import projectsData from '../data/projects.json';

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <Container className="my-5">
        <h1>Proyecto no encontrado</h1>
        <Button variant="primary" onClick={() => navigate('/projects')}>
          Volver a Proyectos
        </Button>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <Image 
            src={project.image} 
            alt={project.name} 
            fluid 
            className="rounded shadow"
            style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
          />
        </Col>
        <Col md={6}>
          <h1 className="mb-4">{project.name}</h1>
          <p className="lead mb-4">{project.description}</p>
          
          <div className="mb-4">
            <h5>Tecnologías utilizadas:</h5>
            <div>
              {project.technologies.map(tech => (
                <Badge key={tech} bg="primary" className="me-2 mb-2" style={{ fontSize: '0.9rem' }}>
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="d-flex gap-3">
            {project.repoUrl && (
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => window.open(project.repoUrl, '_blank')}
              >
                Ver en GitHub
              </Button>
            )}
            <Button 
              variant="outline-secondary" 
              size="lg"
              onClick={() => navigate('/projects')}
            >
              Volver a Proyectos
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectDetail;