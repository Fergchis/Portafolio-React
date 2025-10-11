import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../../pages/Home';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Home Page', () => {
  it('renderiza el título principal con el nombre correcto', () => {
    renderWithRouter(<Home />);
    const title = screen.getByText('Hola, soy Lucas Huerta');
    expect(title).toBeTruthy();
  });

  it('renderiza la descripción principal actualizada', () => {
    renderWithRouter(<Home />);
    const paragraph = screen.getByText(/Desarrollador BackEnd ansioso por crear soluciones innovadoras/);
    expect(paragraph).toBeTruthy();
  });

  it('renderiza los botones de acción', () => {
    renderWithRouter(<Home />);
    const projectsButton = screen.getByText('Ver Mis Proyectos');
    const contactButton = screen.getByText('Contáctame');
    
    expect(projectsButton).toBeTruthy();
    expect(contactButton).toBeTruthy();
  });

  it('renderiza la imagen de perfil', () => {
    renderWithRouter(<Home />);
    const image = screen.getByAltText('Foto de perfil');
    expect(image).toBeTruthy();
  });
});