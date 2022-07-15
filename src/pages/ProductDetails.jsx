import React, { useState, useEffect } from 'react';
import Titlebar from '../components/Titlebar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import StarRating from '../components/StarRating'
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const [ productDetails, setProductDetails ] = useState({ })

  let { id } = useParams();

  useEffect(() => {
   getProducts();
  }, []);

  async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products/" + id);
    const users = await response.json();
    setProductDetails(users);
  }

  return (
    <div>
      <Titlebar />
      <Container fluid>
        <Row>
          <Col sm={4}>
            <Image src={productDetails.image} fluid/>
          </Col>
          <Col style={{ backgroundColor: '#F2F2F2' }} sm={8}>
            <h2 className='my-4'>{productDetails.title}</h2>
            <p className='my-5'>{productDetails.description}</p>
            <h3 className='my-5'>${productDetails.price}</h3>
            <StarRating className='my-5' />
            <div className="d-grid gap-2 my-5">
              <Button variant="dark" size="lg">Add to Cart</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductDetails;
