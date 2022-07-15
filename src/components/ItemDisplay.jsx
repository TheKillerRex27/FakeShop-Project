import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

function ItemDisplay() {
  const [ productData, setProductData ] =useState([])

  useEffect(() => {
   getAllProducts();
  }, []);

  async function getAllProducts() {
    const response = await fetch("https://fakestoreapi.com/products/");
    const users = await response.json();
    setProductData(users);
  }
  
  function renderCard(product) {
    return (
      <Col key={product.id} xs={4} style={{ padding: "2%" }}>
        <ItemCard
          imageURL={product.image}
          title={product.title}
          price={"$" + product.price}
          id={product.id}
        />
      </Col>
    )
  }

  return (
    <Tab.Container defaultActiveKey="all">
      <Row>
        <Col sm={3}>
          <Nav variant="pills"  className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="all" href="#">
                All
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="mensClothing" href="#">
                Men's Clothing
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="womensClothing" href="#">
                Women's Clothing
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="jewelery" href="#">
                Jewelery
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="electronics" href="#">
                Electronics
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="all">
              <Container  style={{ backgroundColor: '#F2F2F2' }} fluid>
                <Row>
                {productData.map((product)=> renderCard(product))}
                </Row>
              </Container>
            </Tab.Pane>
            <Tab.Pane eventKey="mensClothing">
            <Container  style={{ backgroundColor: '#F2F2F2' }} fluid>
              <Row>
              {productData.map((product)=> product.category !== "men's clothing" ? null : renderCard(product))}
              </Row>
            </Container>
            </Tab.Pane>
            <Tab.Pane eventKey="womensClothing">
            <Container  style={{ backgroundColor: '#F2F2F2' }} fluid>
              <Row>
              {productData.map((product)=> product.category !== "women's clothing" ? null : renderCard(product))}
              </Row>
            </Container>
            </Tab.Pane>
            <Tab.Pane eventKey="jewelery">
            <Container  style={{ backgroundColor: '#F2F2F2' }} fluid>
              <Row>
              {productData.map((product)=> product.category !== "jewelery" ? null : renderCard(product))}
              </Row>
            </Container>
            </Tab.Pane>
            <Tab.Pane eventKey="electronics">
            <Container  style={{ backgroundColor: '#F2F2F2' }} fluid>
              <Row>
              {productData.map((product)=> product.category !== "electronics" ? null : renderCard(product))}
              </Row>
            </Container>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  )
}

export default ItemDisplay;
