import React from 'react';
import { render, screen } from '@testing-library/react';
import DynamicForm from '../../../components/molecules/DynamicForm'; // RUTA CORREGIDA

describe('DynamicForm Component', () => {
  const mockInputs = [
    {
      id: 'name',
      type: 'text',
      label: 'Nombre',
      placeholder: 'Ingresa tu nombre',
    },
    {
      id: 'email',
      type: 'email',
      label: 'Email',
      placeholder: 'Ingresa tu email',
    },
  ];

  it('renderiza todos los inputs del formulario', () => {
    render(<DynamicForm inputs={mockInputs} />);
    
    const nameInput = screen.getByPlaceholderText('Ingresa tu nombre');
    const emailInput = screen.getByPlaceholderText('Ingresa tu email');
    
    expect(nameInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
  });

  it('renderiza las etiquetas de los inputs', () => {
    render(<DynamicForm inputs={mockInputs} />);
    
    const nameLabel = screen.getByText('Nombre');
    const emailLabel = screen.getByText('Email');
    
    expect(nameLabel).toBeTruthy();
    expect(emailLabel).toBeTruthy();
  });
});