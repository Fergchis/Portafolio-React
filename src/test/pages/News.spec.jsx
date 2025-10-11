import React from 'react';
import { render, screen } from '@testing-library/react';
import News from '../../pages/News';

describe('News Page', () => {
  it('renderiza el título Noticias', () => {
    render(<News />);
    expect(screen.getByText('Noticias')).toBeTruthy();
  });

  it('renderiza las noticias desde el JSON', () => {
    render(<News />);
    expect(screen.getByText('Estados Unidos sufre el peor ataque terrorista de su historia')).toBeTruthy();
    expect(screen.getByText('Mana, Közi y Kaya llevan su talento a Latinoamérica con conciertos y té')).toBeTruthy();
  });
});