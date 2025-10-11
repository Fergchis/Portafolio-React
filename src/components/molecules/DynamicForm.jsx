import React from "react";
import { Form } from 'react-bootstrap';
import Input from "../atoms/Input";

function DynamicForm({ inputs = [], onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.();
  };

  return (
    <Form onSubmit={handleSubmit}>
      {inputs.map((input, index) => (
        <Form.Group key={input.id || index} className="mb-3"> {/* REMOVER controlId */}
          {input.label && <Form.Label>{input.label}</Form.Label>}
          <Input {...input} />
        </Form.Group>
      ))}
    </Form>
  );
}

export default DynamicForm;