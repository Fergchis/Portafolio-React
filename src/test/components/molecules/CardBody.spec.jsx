import React from 'react';
import { render, screen } from '@testing-library/react';
import CardBody from '../../../components/molecules/CardBody';

describe('CardBody Component', () => {
  const mockProps = {
    title: 'Proyecto 1',
    description: 'Descripción del proyecto'
  };

  it('renderiza el título y descripción del proyecto', () => {
    render(<CardBody {...mockProps} />);
    
    expect(screen.getByText('Proyecto 1')).toBeTruthy();
    expect(screen.getByText('Descripción del proyecto')).toBeTruthy();
  });

  it('NO renderiza las tecnologías (ahora están en los badges)', () => {
    render(<CardBody {...mockProps} />);
    
    expect(screen.queryByText('React, Node.js')).toBeNull();
  });
});