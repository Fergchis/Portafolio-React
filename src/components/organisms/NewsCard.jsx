import React from 'react'; // AGREGAR
import { Card } from 'react-bootstrap';
import Text from '../atoms/Text';

function NewsCard({ news }) {
  return (
    <Card style={{ width: '18rem' }} className="m-2">
      <Card.Body>
        <Text variant="h5">{news.title}</Text>
        <Text variant="p">{news.date}</Text>
        <Text variant="p">{news.content}</Text>
      </Card.Body>
    </Card>
  );
}

export default NewsCard;