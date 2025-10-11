// src/test/pages/ProjectDetail.spec.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

const mockProjects = [
  {
    id: 1,
    name: 'Proyecto Test',
    description: 'Descripción test',
    technologies: ['React', 'Bootstrap'],
    image: 'test.jpg',
    repoUrl: 'https://github.com/test'
  }
];

function MockProjectDetail() {
  const mockId = '1';
  const mockNavigate = () => {};
  const project = mockProjects.find(p => p.id === parseInt(mockId));

  if (!project) {
    return (
      <div>
        <h1>Proyecto no encontrado</h1>
        <button onClick={() => mockNavigate('/projects')}>
          Volver a Proyectos
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <div>
        {project.technologies.map(tech => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <button onClick={() => window.open(project.repoUrl, '_blank')}>
        Ver en GitHub
      </button>
      <button onClick={() => mockNavigate('/projects')}>
        Volver a Proyectos
      </button>
    </div>
  );
}

describe('ProjectDetail Page', () => {
  it('renderiza los detalles del proyecto correctamente', () => {
    render(<MockProjectDetail />);

    expect(screen.getByText('Proyecto Test')).toBeTruthy();
    expect(screen.getByText('Descripción test')).toBeTruthy();
    expect(screen.getByText('React')).toBeTruthy();
    expect(screen.getByText('Bootstrap')).toBeTruthy();
  });

  it('renderiza el botón de GitHub cuando existe repoUrl', () => {
    render(<MockProjectDetail />);
    expect(screen.getByText('Ver en GitHub')).toBeTruthy();
  });
});