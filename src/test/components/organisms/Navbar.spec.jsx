import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../../../components/organisms/Navbar';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Navbar Component', () => {
  it('renderiza la marca del portafolio', () => {
    renderWithRouter(<Navbar />);
    expect(screen.getByText('Mi Portafolio')).toBeTruthy();
  });

  it('renderiza los enlaces de navegación', () => {
    renderWithRouter(<Navbar />);
    expect(screen.getByText('Inicio')).toBeTruthy();
    expect(screen.getByText('Sobre Mí')).toBeTruthy();
    expect(screen.getByText('Proyectos')).toBeTruthy();
    expect(screen.getByText('Noticias')).toBeTruthy();
    expect(screen.getByText('Contacto')).toBeTruthy();
  });
});