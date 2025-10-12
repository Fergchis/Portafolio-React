import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light mt-auto">
      <Container className="py-3">
        <Row className="g-3">
          <Col md={6} lg={5}>
            <div className="d-flex flex-column h-50">
              <h6 className="fw-bold mb-2">Desarrollador BackEnd</h6>
              <div className="mt-auto">
                <div className="d-flex flex-wrap gap-3 small">
                  <div className="d-flex align-items-center">
                    <span className="me-1">📞</span>
                    <span>+56 9 1234 5678</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="me-1">✉️</span>
                    <span>luc.huerta@duocuc.cl</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col md={6} lg={4}>
            <h6 className="fw-bold mb-2">Enlaces</h6>
            <div className="d-flex flex-wrap gap-3 small">
              <Link to="/" className="text-light text-decoration-none">
                Inicio
              </Link>
              <Link to="/about" className="text-light text-decoration-none">
                Sobre mí
              </Link>
              <Link to="/projects" className="text-light text-decoration-none">
                Proyectos
              </Link>
              <Link to="/contact" className="text-light text-decoration-none">
                Contacto
              </Link>
              <a 
                href="https://github.com/Fergchis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light text-decoration-none"
              >
                GitHub
              </a>
            </div>
          </Col>

          <Col lg={3} className="text-lg-end">
            <div className="d-flex flex-column h-100 justify-content-between">
              <div>
                <p className="small text-light mb-0">
                  &copy; {currentYear} Lucas Huerta
                </p>
                <p className="small text-light mb-0">Todos los derechos reservados</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;