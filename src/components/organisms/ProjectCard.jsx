import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import Image from '../atoms/Image';
import Button from '../atoms/Button';
import CardBody from '../molecules/CardBody';
import { useNavigate } from 'react-router-dom';

function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <Card style={{ width: '18rem' }} className="m-2 shadow-sm h-100">
      <Image 
        src={project.image} 
        alt={project.name} 
        className="card-img-top"
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
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
              variant="primary" 
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              Ver detalles
            </Button>
            {project.repoUrl && ( // Cambiar demoUrl por repoUrl
              <Button 
                variant="outline-primary" 
                size="sm"
                onClick={() => window.open(project.repoUrl, '_blank')}
              >
                Ver Proyecto {/* Cambiar texto */}
              </Button>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;