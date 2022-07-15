import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Titlebar() {

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand= "lg">
        <Container fluid>
          <Navbar.Brand href="/">FakeShop</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Titlebar;
