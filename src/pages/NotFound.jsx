import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Image from '../components/atoms/Image';

function NotFound() {
  const navigate = useNavigate();

  return (
    <Container className="my-5">
      <Row className="justify-content-center text-center">
        <Col md={8} lg={6}>
          {/* Número 404 grande */}
          <h1 className="display-1 fw-bold text-primary mb-0">404</h1>
          
          {/* Título */}
          <h2 className="h1 mb-3">Página no encontrada</h2>
          
          {/* Descripción */}
          <p className="lead text-muted mb-4">
            La página que estás buscando no existe o ha sido movida. 
          </p>

          {/* GIF en lugar de la imagen SVG */}
          <div className="mb-4">
            <Image 
              src="/img/notFound/404-error.gif" 
              alt="Página no encontrada - GIF animado"
              className="img-fluid rounded"
              style={{ maxWidth: '300px', height: 'auto' }}
            />
          </div>

          {/* Botones de acción */}
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => navigate('/')}
            >
              Volver al Inicio
            </Button>
            <Button 
              variant="outline-primary" 
              size="lg"
              onClick={() => navigate(-1)}
            >
              Volver Atrás
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;