import React from 'react';
import { render, screen } from '@testing-library/react';
import News from '../../pages/News'; // RUTA CORRECTA

describe('News Page', () => {
  it('renderiza el título Noticias', () => {
    render(<News />);
    expect(screen.getByText('Noticias')).toBeTruthy();
  });

  it('renderiza las noticias desde el JSON', () => {
    render(<News />);
    // Verifica que se rendericen las noticias del archivo news.json
    expect(screen.getByText('Noticia 1')).toBeTruthy();
    expect(screen.getByText('Noticia 2')).toBeTruthy();
  });
});