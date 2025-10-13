import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../../../components/organisms/Footer';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Footer Component', () => {
  it('renderiza el título "Desarrollador BackEnd"', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('Desarrollador BackEnd')).toBeTruthy();
  });

  it('renderiza el número de teléfono', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('+56 9 1234 5678')).toBeTruthy();
  });

  it('renderiza la dirección de email', () => {  
    renderWithRouter(<Footer />);
    const emailText = screen.getByText('luc.huerta@duocuc.cl');  
    expect(emailText).toBeTruthy();
  });

  it('renderiza el enlace de GitHub', () => {
    renderWithRouter(<Footer />);
    const githubLink = screen.getByText('GitHub');
    expect(githubLink).toBeTruthy();
    expect(githubLink.getAttribute('href')).toBe('https://github.com/Fergchis');
    expect(githubLink.getAttribute('target')).toBe('_blank');
    expect(githubLink.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('renderiza los enlaces de navegación', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('Inicio')).toBeTruthy();
    expect(screen.getByText('Sobre mí')).toBeTruthy();
    expect(screen.getByText('Proyectos')).toBeTruthy();
    expect(screen.getByText('Contacto')).toBeTruthy();
  });

  it('renderiza el nombre del desarrollador en los derechos reservados', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/Lucas Huerta/)).toBeTruthy();
  });

  it('renderiza el año actual en los derechos reservados', () => {
    renderWithRouter(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} Lucas Huerta`)).toBeTruthy();
  });

  it('renderiza el texto "Todos los derechos reservados"', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('Todos los derechos reservados')).toBeTruthy();
  });

  it('tiene la clase footer-custom para los estilos personalizados', () => {
    renderWithRouter(<Footer />);
    const footer = screen.getByText('Desarrollador BackEnd').closest('footer');
    expect(footer.className).toContain('footer-custom');
  });

  it('tiene la clase mt-auto para el margen superior automático', () => {
    renderWithRouter(<Footer />);
    const footer = screen.getByText('Desarrollador BackEnd').closest('footer');
    expect(footer.className).toContain('mt-auto');
  });
});