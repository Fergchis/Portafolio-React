import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-custom mt-auto">
      <Container className="py-4">
        <Row className="g-4 align-items-center">
          {/* Columna Información de Contacto */}
          <Col md={4} lg={4}>
            <div className="d-flex flex-column h-100">
              <h6 className="fw-bold mb-3">Desarrollador BackEnd</h6>
              <div className="mt-auto">
                <div className="d-flex flex-column flex-md-row flex-wrap gap-3 small contact-info">
                  <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                    <span className="me-2">📞</span>
                    <span>+56 9 1234 5678</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                    <span className="me-2">✉️</span>
                    <span>luc.huerta@duocuc.cl</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* Columna Enlaces - Centrada */}
          <Col md={4} lg={4}>
            <div className="text-center">
              <h6 className="fw-bold mb-3">Enlaces Rápidos</h6>
              <div className="d-flex flex-wrap justify-content-center gap-3 small">
                <Link to="/" className="text-decoration-none">
                  Inicio
                </Link>
                <Link to="/about" className="text-decoration-none">
                  Sobre mí
                </Link>
                <Link to="/projects" className="text-decoration-none">
                  Proyectos
                </Link>
                <Link to="/contact" className="text-decoration-none">
                  Contacto
                </Link>
                <a 
                  href="https://github.com/Fergchis" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  GitHub
                </a>
              </div>
            </div>
          </Col>

          {/* Columna Copyright - Texto más pequeño */}
          <Col md={4} lg={4}>
            <div className="d-flex flex-column h-100 justify-content-between text-center text-md-end">
              <div>
                <p className="small mb-1" style={{ fontSize: '0.64rem' }}> {/* Más pequeño */}
                  &copy; {currentYear} Lucas Huerta
                </p>
                <p className="small mb-0" style={{ fontSize: '0.64rem' }}> {/* Más pequeño */}
                  Todos los derechos reservados
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;