import React from 'react';
import { render, screen } from '@testing-library/react';
import Image from '../../../components/atoms/Image';

describe('Image Component', () => {
  it('renderiza la imagen con los atributos correctos', () => {
    render(<Image src="test.jpg" alt="Test image" className="test-class" />);
    const image = screen.getByRole('img');
    expect(image).toBeTruthy();
    expect(image.getAttribute('src')).toBe('test.jpg');
    expect(image.getAttribute('alt')).toBe('Test image');
    expect(image).toHaveClass('test-class');
  });
});