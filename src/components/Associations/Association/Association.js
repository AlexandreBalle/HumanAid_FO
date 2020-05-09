import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import './Association.css';

const Association = ({ title, description }) => {
  return (
    <div className='event'>
      <Row>
        <Col xs={4} md={4} lg={4}>
          <Image src="holder.js/171x180" rounded />
        </Col>
        <Col xs={8} md={8} lg={8}>
          <h5>{title}</h5>
          <p>{description}</p>
        </Col>
      </Row>
    </div>
  );
};

export default Association
