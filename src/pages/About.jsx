import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function About() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={4}>
          <Image 
            src="/img/profile/profile.webp" 
            alt="Foto de perfil"  // AGREGAR ESTA LÍNEA
            fluid 
            rounded 
          />
        </Col>
        <Col md={8}>
          <h1>Sobre Mí</h1>
          <p className="fs-5">
            Mi viaje comenzó con la curiosidad por entender cómo se conectan las cosas. Me di cuenta de que el mundo, al igual que el código, es más simple de lo que parece: está construido sobre capas de información, protocolos y conexiones invisibles. Mi objetivo es explorar estos límites y contribuir a construir los puentes entre lo físico y lo digital.

            Creo firmemente que "un ser humano solo puede existir dentro de la memoria de los demás". En el mundo digital, esto se traduce en que todo lo que creamos —cada línea de código, cada proyecto— cobra vida real en la medida en que es usado, recordado y compartido por los demás. Por eso, me esfuerzo en que mi trabajo no sea solo funcional, sino que también cree una experiencia significativa para las personas.

            Disfruto desarmando problemas complejos hasta su forma más básica y entendiendo la estructura profunda de las cosas. Para mí, la programación no es solo sobre dispositivos; es sobre la evolución de la conciencia humana y las nuevas realidades que podemos crear cuando nos conectamos sin límites.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;