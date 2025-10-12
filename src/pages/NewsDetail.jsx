import React from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import newsData from '../data/news.json';
import NotFound from './NotFound';

function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const news = newsData.find(n => n.id === parseInt(id));

  if (!news) {
    return <NotFound />;
  }

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <div className="mb-4">
            <Button variant="outline-secondary" onClick={() => navigate('/news')}>
              ← Volver a Noticias
            </Button>
          </div>

          <div className="mb-3">
            <Badge bg="primary" style={{ fontSize: '1rem' }}>
              {news.date}
            </Badge>
          </div>

          <h1 className="mb-4">{news.title}</h1>

          <div className="bg-light p-4 rounded">
            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.6', 
              whiteSpace: 'pre-line' 
            }}>
              {news.content}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default NewsDetail;