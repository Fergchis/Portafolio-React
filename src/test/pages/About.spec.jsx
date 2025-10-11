import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../../pages/About'; // RUTA CORRECTA

describe('About Page', () => {
  it('renderiza el título Sobre Mí', () => {
    render(<About />);
    expect(screen.getByText('Sobre Mí')).toBeTruthy();
  });

  it('renderiza la imagen de perfil', () => {
    render(<About />);
    const image = screen.getByAltText('Foto de perfil');
    expect(image).toBeTruthy();
  });
});