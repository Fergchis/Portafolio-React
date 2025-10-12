import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProjectCard from '../../../components/organisms/ProjectCard';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('ProjectCard Component', () => {
  const mockProject = {
    id: 1,
    name: 'Proyecto Test',
    description: 'Descripción test',
    technologies: ['React', 'Bootstrap'],
    image: '/img/projects/kÖziProject.webp',
    repoUrl: 'https://github.com/test'
  };

  it('renderiza el nombre del proyecto', () => {
    renderWithRouter(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Proyecto Test')).toBeTruthy();
  });

  it('renderiza la descripción del proyecto', () => {
    renderWithRouter(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Descripción test')).toBeTruthy();
  });

  it('renderiza las tecnologías del proyecto como badges', () => {
    renderWithRouter(<ProjectCard project={mockProject} />);
    expect(screen.getByText('React')).toBeTruthy();
    expect(screen.getByText('Bootstrap')).toBeTruthy();
  });

  it('NO renderiza el texto "Tecnologías:"', () => {
    renderWithRouter(<ProjectCard project={mockProject} />);
    expect(screen.queryByText('Tecnologías:')).toBeNull();
  });

  it('renderiza el botón de detalles', () => {
    renderWithRouter(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Ver detalles')).toBeTruthy();
  });

  it('renderiza el botón de proyecto si existe repoUrl', () => { 
    renderWithRouter(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Ver Proyecto')).toBeTruthy(); 
  });

  it('renderiza la imagen del proyecto', () => {
    renderWithRouter(<ProjectCard project={mockProject} />);
    const image = screen.getByAltText('Proyecto Test');
    expect(image).toBeTruthy();
    expect(image.getAttribute('src')).toBe('/img/projects/kÖziProject.webp');
  });
});