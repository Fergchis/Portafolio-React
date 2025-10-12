// src/test/pages/NewsDetail.spec.jsx - VERSIÓN SIMPLIFICADA
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NewsDetail from '../../pages/NewsDetail';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('NewsDetail Component', () => {
  it('se renderiza sin errores', () => {
    expect(() => {
      renderWithRouter(<NewsDetail />);
    }).not.toThrow();
  });

  it('contiene elementos estructurales básicos', () => {
    renderWithRouter(<NewsDetail />);
    
    const container = document.querySelector('.container');
    expect(container).toBeTruthy();
  });
});