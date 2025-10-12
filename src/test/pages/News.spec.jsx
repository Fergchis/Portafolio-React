import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import News from '../../pages/News';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('News Page', () => {
  it('renderiza el título Noticias', () => {
    renderWithRouter(<News />);
    expect(screen.getByText('Noticias')).toBeTruthy();
  });

  it('renderiza las noticias desde el JSON', () => {
    renderWithRouter(<News />);

    expect(screen.getByText('Estados Unidos sufre el peor ataque terrorista de su historia')).toBeTruthy();
    expect(screen.getByText('Mana, Közi y Kaya llevan su talento a Latinoamérica con conciertos y té')).toBeTruthy();
  });
});