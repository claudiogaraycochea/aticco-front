import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Input, Button } from '../../../ui/ui';

function Home() {
  return (
    <div className="home">
      <Row>
        <h1>
          Home
        </h1>
      </Row>
      <Row>
        <Col>
          <Input />
        </Col>
      </Row>
    </div>
  );
}

export default Home;