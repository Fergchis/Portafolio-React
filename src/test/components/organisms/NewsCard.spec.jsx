import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsCard from '../../../components/organisms/NewsCard';

describe('NewsCard Component', () => {
  const mockNews = {
    id: 1,
    title: 'Nueva versión de React',
    date: '2024-01-01',
    content: 'React lanza su versión 18 con nuevas características.'
  };

  it('renderiza el título, fecha y contenido de la noticia', () => {
    render(<NewsCard news={mockNews} />);
    
    expect(screen.getByText('Nueva versión de React')).toBeTruthy();
    expect(screen.getByText('2024-01-01')).toBeTruthy();
    expect(screen.getByText('React lanza su versión 18 con nuevas características.')).toBeTruthy();
  });
});