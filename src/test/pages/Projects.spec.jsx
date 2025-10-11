import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Projects from '../../pages/Projects'; // RUTA CORRECTA

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Projects Page', () => {
  it('renderiza el título Mis Proyectos', () => {
    renderWithRouter(<Projects />);
    expect(screen.getByText('Mis Proyectos')).toBeTruthy();
  });

  it('renderiza los proyectos desde el JSON', () => {
    renderWithRouter(<Projects />);
    // Verifica que se rendericen los proyectos del archivo projects.json
    expect(screen.getByText('Proyecto 1')).toBeTruthy();
    expect(screen.getByText('Proyecto 2')).toBeTruthy();
    expect(screen.getByText('Proyecto 3')).toBeTruthy();
  });
});