import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Text from '../atoms/Text';

function NewsCard({ news }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/news/${news.id}`);
  };

  return (
    <Card 
      style={{ width: '28rem' }} 
      className="m-2 shadow-sm"
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyPress={(e) => e.key === 'Enter' && handleClick()}
    >
      <Card.Body>
        <Text variant="h5" className="text-primary">{news.title}</Text>
        <Text variant="p" className="text-muted small">{news.date}</Text>
        <Text variant="p" className="mt-2">
          {news.content.length > 150 
            ? `${news.content.substring(0, 150)}...` 
            : news.content
          }
        </Text>
        <div className="mt-2">
          <small className="text-primary">Click para leer más →</small>
        </div>
      </Card.Body>
    </Card>
  );
}

export default NewsCard;