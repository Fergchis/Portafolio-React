import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import Image from '../atoms/Image';
import Button from '../atoms/Button';
import CardBody from '../molecules/CardBody';
import { useNavigate } from 'react-router-dom';

function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <Card style={{ width: '20rem', height: '500px' }} 
      className="m-2 shadow-sm d-flex flex-column project-card-custom">
      <div style={{ height: '300px', overflow: 'hidden' }}>
        <Image 
          src={project.image} 
          alt={project.name} 
          className="card-img-top h-100"
          style={{ objectFit: 'cover', width: '100%' }}
        />
      </div>
      
      <Card.Body className="d-flex flex-column flex-grow-1">
        <CardBody
          title={project.name}
          description={project.description}
        />
        <div className="mt-auto">
          <div className="mb-3">
            {project.technologies.map(tech => (
              <Badge key={tech} bg="secondary" className="me-1 mb-1">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="d-grid gap-2">
            <Button 
              className="btn-custom"  // Cambiado a clase personalizada
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              Ver detalles
            </Button>
            {project.repoUrl && (
              <Button 
                className="btn-outline-custom"  // Cambiado a outline personalizado
                size="sm"
                onClick={() => window.open(project.repoUrl, '_blank')}
              >
                Ver Proyecto
              </Button>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;