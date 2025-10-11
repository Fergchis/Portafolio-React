import React from 'react';
import { Container, Row } from 'react-bootstrap';
import newsData from '../data/news.json';
import NewsCard from '../components/organisms/NewsCard';

function News() {
  return (
    <Container className="my-5">
      <h1>Noticias</h1>
      <Row>
        {newsData.map(news => (
          <NewsCard key={news.id} news={news} />
        ))}
      </Row>
    </Container>
  );
}

export default News;