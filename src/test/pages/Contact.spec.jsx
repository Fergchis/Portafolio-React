import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Contact from '../../pages/Contact';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Contact Page', () => {
  it('renderiza el título de la página de contacto', () => {
    renderWithRouter(<Contact />);
    const title = screen.getByText('Contacto');
    expect(title).toBeTruthy();
  });

  it('renderiza el formulario de contacto', () => {
    renderWithRouter(<Contact />);
    
    const nameInput = screen.getByPlaceholderText('Ingresa tu nombre completo');
    const emailInput = screen.getByPlaceholderText('Ingresa tu correo electrónico');
    const subjectInput = screen.getByPlaceholderText('Ingresa el asunto de tu mensaje');
    const messageInput = screen.getByPlaceholderText('Escribe tu mensaje aquí...');
    
    expect(nameInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(subjectInput).toBeTruthy();
    expect(messageInput).toBeTruthy();
  });

  it('renderiza los botones de enviar y limpiar', () => {
    renderWithRouter(<Contact />);
    
    const sendButton = screen.getByText('Enviar Mensaje');
    const clearButton = screen.getByText('Limpiar Formulario');
    
    expect(sendButton).toBeTruthy();
    expect(clearButton).toBeTruthy();
  });

  it('muestra errores de validación al enviar el formulario vacío', () => {
    renderWithRouter(<Contact />);
    
    const sendButton = screen.getByText('Enviar Mensaje');
    fireEvent.click(sendButton);
    
    expect(screen.getByText('El nombre es requerido')).toBeTruthy();
    expect(screen.getByText('El email es requerido')).toBeTruthy();
    expect(screen.getByText('El asunto es requerido')).toBeTruthy();
    expect(screen.getByText('El mensaje es requerido')).toBeTruthy();
  });

  it('limpia el formulario al hacer click en el botón Limpiar', () => {
    renderWithRouter(<Contact />);
    
    const nameInput = screen.getByPlaceholderText('Ingresa tu nombre completo');
    const clearButton = screen.getByText('Limpiar Formulario');
    
    fireEvent.change(nameInput, { target: { value: 'Juan' } });
    expect(nameInput.value).toBe('Juan');
    
    fireEvent.click(clearButton);
    expect(nameInput.value).toBe('');
  });
});