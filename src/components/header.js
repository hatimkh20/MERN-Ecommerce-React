import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar variant="dark" bg="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home">Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home"><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
            <Nav.Link href="#link"><i className='fas fa-user'></i>Sign in</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header