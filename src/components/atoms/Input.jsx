import React from "react";
import { Form } from "react-bootstrap";

function Input({ className = "", type = "text", error, ...props }) {
  const componentProps = {
    className: `${className} ${error ? 'is-invalid' : ''}`,
    ...(type === "textarea" ? { as: "textarea" } : { type }),
    ...props,
  };
  
  return (
    <>
      <Form.Control {...componentProps} />
      {error && <Form.Text className="text-danger">{error}</Form.Text>}
    </>
  );
}

export default Input;