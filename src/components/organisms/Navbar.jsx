import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar-custom" fixed="top"> {/* Cambiar a className personalizado */}
      <Container>
        <Navbar.Brand href="/">Mi Portafolio</Navbar.Brand> {/* Cambiar texto */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* Cambiar a ms-auto para alinear a la derecha */}
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/about">Sobre Mí</Nav.Link>
            <Nav.Link href="/projects">Proyectos</Nav.Link>
            <Nav.Link href="/news">Noticias</Nav.Link>
            <Nav.Link href="/contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar