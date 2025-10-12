import React, { useState } from 'react';
import { Container, Alert } from 'react-bootstrap';
import Text from '../components/atoms/Text';
import DynamicForm from '../components/molecules/DynamicForm';
import Button from '../components/atoms/Button';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'El asunto es requerido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }
    
    return newErrors;
  };

  const formInputs = [
    {
      id: 'name',
      type: 'text',
      label: 'Nombre Completo',
      placeholder: 'Ingresa tu nombre completo',
      value: formData.name,
      error: errors.name,
      onChange: (e) => setFormData({ ...formData, name: e.target.value }),
    },
    {
      id: 'email',
      type: 'email',
      label: 'Correo Electrónico',
      placeholder: 'Ingresa tu correo electrónico',
      value: formData.email,
      error: errors.email,
      onChange: (e) => setFormData({ ...formData, email: e.target.value }),
    },
    {
      id: 'subject',
      type: 'text',
      label: 'Asunto',
      placeholder: 'Ingresa el asunto de tu mensaje',
      value: formData.subject,
      error: errors.subject,
      onChange: (e) => setFormData({ ...formData, subject: e.target.value }),
    },
    {
      id: 'message',
      type: 'textarea',
      label: 'Mensaje',
      placeholder: 'Escribe tu mensaje aquí...',
      rows: 5,
      value: formData.message,
      error: errors.message,
      onChange: (e) => setFormData({ ...formData, message: e.target.value }),
    },
  ];

  const handleSubmit = () => {
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length === 0) {
      const message = `Nombre: ${formData.name}\nEmail: ${formData.email}\nAsunto: ${formData.subject}\nMensaje: ${formData.message}`;
      console.log('Formulario enviado:', formData);
      alert(`¡Mensaje enviado!\n\n${message}`);
      setShowAlert(true);
      handleClear();
    } else {
      setErrors(formErrors);
    }
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setErrors({});
    setShowAlert(false);
  };

  return (
    <Container className="my-5">
      <Text variant="h1" className="mb-4">Contacto</Text>
      <Text variant="p" className="mb-4">
        ¿Quieres trabajar conmigo? ¡No dudes en contactarme!
      </Text>
      
      {showAlert && (
        <Alert variant="success" className="mb-4">
          ¡Gracias por tu mensaje! Te responderé pronto.
        </Alert>
      )}

      <DynamicForm inputs={formInputs} onSubmit={handleSubmit} />
      
      <div className="mt-4">
        <Button variant="primary" onClick={handleSubmit} className="me-2">
          Enviar Mensaje
        </Button>
        <Button variant="outline-secondary" onClick={handleClear}>
          Limpiar Formulario
        </Button>
      </div>
    </Container>
  );
}

export default Contact;