import React from 'react';
import { Container, Row, Col, Button, Image, Badge } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import projectsData from '../data/projects.json';
import NotFound from './NotFound'

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return <NotFound />;
  }

  return (
    <Container className="my-5">
      <div className="project-detail-container"> {/* Nuevo contenedor con estilos */}
        <Row>
          <Col md={6}>
            <div 
              className="rounded shadow d-flex justify-content-center align-items-center project-image-container" // Agregar clase
              style={{ 
                height: '400px', 
                overflow: 'hidden'
              }}
            >
              <Image 
                src={project.image} 
                alt={project.name} 
                style={{ 
                  maxHeight: '100%', 
                  maxWidth: '100%', 
                  objectFit: 'scale-down' 
                }}
              />
            </div>
          </Col>
          <Col md={6}>
            <h1 className="mb-4">{project.name}</h1>
            <p className="lead mb-4">{project.description}</p>
            
            <div className="mb-4">
              <h5>Tecnologías utilizadas:</h5>
              <div>
                {project.technologies.map(tech => (
                  <Badge key={tech} className="me-2 mb-2"> {/* Quitar bg="primary" */}
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="d-flex gap-3">
              {project.repoUrl && (
                <Button 
                  className="btn-custom" // Cambiar a clase personalizada
                  size="lg"
                  onClick={() => window.open(project.repoUrl, '_blank')}
                >
                  Ver en GitHub
                </Button>
              )}
              <Button 
                className="btn-outline-custom" // Cambiar a clase personalizada
                size="lg"
                onClick={() => navigate('/projects')}
              >
                Volver a Proyectos
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default ProjectDetail;