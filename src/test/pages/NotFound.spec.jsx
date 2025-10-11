import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../../pages/NotFound';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('NotFound Component', () => {
  it('renderiza el código de error 404', () => {
    renderWithRouter(<NotFound />);
    const errorCode = screen.getByText('404');
    expect(errorCode).toBeTruthy();
  });

  it('renderiza el título "Página no encontrada"', () => {
    renderWithRouter(<NotFound />);
    expect(screen.getByText('Página no encontrada')).toBeTruthy();
  });

  it('renderiza la descripción del error', () => {
    renderWithRouter(<NotFound />);
    const description = screen.getByText(/La página que estás buscando no existe o ha sido movida/i);
    expect(description).toBeTruthy();
  });

  it('renderiza la imagen con el src correcto', () => {
    renderWithRouter(<NotFound />);
    const image = screen.getByAltText('Página no encontrada - GIF animado');
    expect(image).toBeTruthy();
    expect(image.getAttribute('src')).toBe('/img/notFound/404-error.gif');
  });

  it('renderiza el botón "Volver al Inicio"', () => {
    renderWithRouter(<NotFound />);
    expect(screen.getByText('Volver al Inicio')).toBeTruthy();
  });

  it('renderiza el botón "Volver Atrás"', () => {
    renderWithRouter(<NotFound />);
    expect(screen.getByText('Volver Atrás')).toBeTruthy();
  });

  it('tiene la estructura de contenedores correcta', () => {
    renderWithRouter(<NotFound />);
    const container = screen.getByText('404').closest('.container');
    expect(container).toBeTruthy();
  });
});