import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from '../../../components/atoms/Text';

describe('Text Component', () => {
  it('renderiza un párrafo por defecto', () => {
    render(<Text>Hola mundo</Text>);
    const text = screen.getByText('Hola mundo');
    expect(text).toBeTruthy();
    expect(text.tagName).toBe('P');
  });

  it('renderiza un h1 cuando se pasa la variant h1', () => {
    render(<Text variant="h1">Título</Text>);
    const text = screen.getByText('Título');
    expect(text).toBeTruthy();
    expect(text.tagName).toBe('H1');
  });

  it('aplica la clase className correctamente', () => {
    render(<Text className="mi-clase">Texto</Text>);
    const text = screen.getByText('Texto');
    expect(text).toHaveClass('mi-clase');
  });
});