import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './footer.css';

function Footer(){
    return (
      <Container fluid> 
        <Row>
          <Col xs></Col>
          <Col xs={{ order: 12 }}>Second, but last</Col>
          <Col xs={{ order: 1 }}></Col>
        </Row>
      </Container>
    );
}

export default Footer;