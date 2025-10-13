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
      <div className="news-detail-container"> {/* Nuevo contenedor con estilos */}
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="mb-4">
              <Button 
                className="btn-outline-custom" // Cambiar a clase personalizada
                onClick={() => navigate('/news')}
              >
                ← Volver a Noticias
              </Button>
            </div>

            <div className="mb-3">
              <Badge className="news-date-badge"> {/* Quitar bg="primary" */}
                {news.date}
              </Badge>
            </div>

            <h1 className="mb-4">{news.title}</h1>

            <div className="p-4 rounded news-content"> {/* Cambiar a news-content */}
              <p>
                {news.content}
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default NewsDetail;