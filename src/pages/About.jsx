import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function About() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={4}>
          <Image 
            src="https://via.placeholder.com/300" 
            alt="Foto de perfil"  // AGREGAR ESTA LÍNEA
            fluid 
            rounded 
          />
        </Col>
        <Col md={8}>
          <h1>Sobre Mí</h1>
          <p>Aquí va una breve biografía...</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;