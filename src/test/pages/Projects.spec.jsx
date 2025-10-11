import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Projects from '../../pages/Projects';

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
    // CAMBIA los nombres por los REALES de tu JSON
    expect(screen.getByText('kÖzi')).toBeTruthy();
    expect(screen.getByText('Galiana')).toBeTruthy();
    expect(screen.getByText('Experimento Jazz')).toBeTruthy();
  });
});