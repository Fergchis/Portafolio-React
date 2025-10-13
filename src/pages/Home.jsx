import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Text from '../components/atoms/Text'

function Home() {
  const navigate = useNavigate()

  return (
    <Container className="my-5">
      <Row className="align-items-center min-vh-50">
        <Col md={6}>
          <Text variant="h1" className="display-4 fw-bold mb-4">
            Hola, soy Lucas Huerta
          </Text>
          <Text variant="p" className="lead mb-4">
            Desarrollador BackEnd ansioso por crear soluciones innovadoras 
            y experiencias digitales excepcionales.
          </Text>

          <div className="d-flex gap-3">
            <Button 
              className="btn-custom btn-lg"    // Ya está correcto
              onClick={() => navigate('/projects')}
            >
              Ver Mis Proyectos
            </Button>
            <Button 
              className="btn-outline-custom btn-lg"  // Cambiar a clase personalizada
              onClick={() => navigate('/contact')}
            >
              Contáctame
            </Button>
          </div>

        </Col>
        <Col md={6}>
          <div className="text-center">
            <img 
              src="/img/profile/profile.webp" 
              alt="Foto de perfil" 
              className="img-fluid rounded-circle"
              style={{ maxWidth: '400px' }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Home