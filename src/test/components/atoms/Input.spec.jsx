import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from '../../../components/atoms/Input'; // RUTA CORREGIDA

describe('Input Component', () => {
  it('renderiza un input de texto correctamente', () => {
    render(<Input type="text" placeholder="Ingresa texto" />);
    const input = screen.getByPlaceholderText('Ingresa texto');
    expect(input).toBeTruthy();
    expect(input.type).toBe('text');
  });

  it('renderiza un textarea cuando el tipo es textarea', () => {
    render(<Input type="textarea" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeTruthy();
  });

  it('muestra un mensaje de error cuando se pasa la prop error', () => {
    render(<Input error="Este campo es requerido" />);
    const errorText = screen.getByText('Este campo es requerido');
    expect(errorText).toBeTruthy();
    expect(errorText).toHaveClass('text-danger');
  });

  it('aplica la clase is-invalid cuando hay error', () => {
    render(<Input error="Error" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('is-invalid');
  });
});