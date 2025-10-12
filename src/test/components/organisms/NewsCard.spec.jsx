import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NewsCard from '../../../components/organisms/NewsCard'; 

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('NewsCard Component', () => {
  const mockNews = {
    id: 1,
    title: 'Test Title',
    date: '2023-10-11',
    content: 'This is a test content for the news card that is longer than 150 characters to test the truncation functionality. This additional text makes sure it gets truncated properly.'
  };

  it('renderiza el título, fecha y contenido de la noticia', () => {
    renderWithRouter(<NewsCard news={mockNews} />);

    expect(screen.getByText('Test Title')).toBeTruthy();
    expect(screen.getByText('2023-10-11')).toBeTruthy();
    expect(screen.getByText(/This is a test content/)).toBeTruthy();
  });

  it('trunca el contenido si es muy largo', () => {
    renderWithRouter(<NewsCard news={mockNews} />);

    const content = screen.getByText(/This is a test content/);
    expect(content.textContent.endsWith('...')).toBeTrue();
  });

  it('tiene el role button para accesibilidad', () => {
    renderWithRouter(<NewsCard news={mockNews} />);

    const card = screen.getByRole('button');
    expect(card).toBeTruthy();
  });
});