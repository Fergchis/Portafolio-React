import React from 'react';
import Text from '../atoms/Text';

function CardBody({ title, description }) { // Removemos technologies de los props
  return (
    <>
      <Text variant="h5">{title}</Text>
      <Text variant="p">{description}</Text>
    </>
  );
}

export default CardBody;