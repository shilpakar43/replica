import React from 'react'
import { Button, Row, Col, Container, InputGroup, Navbar, Nav } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
const NavbarComponent = () => {
  return (
    <Navbar expand="lg" bg="light" data-bs-theme="light" className='navbar bg=body-tertiary'>
          <Navbar.Brand className='logo' href="#home">Twisty</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Container fluid>
              <Row>
                <Col sm={2} md={2} lg={2}>
                </Col>
                <Col sm={5} md={5} lg={5}>
                  <Nav className="me-auto nav-menu">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#message">Message</Nav.Link>
                    <Nav.Link href="#discover">Discover</Nav.Link>
                    <Nav.Link href="#wallet">Wallet</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                  </Nav>
                </Col>
                <Col sm={1} md={1} lg={1}>
                </Col>
                <Col className='search-bar' sm={3} md={3} lg={3} >
                  <InputGroup >
                    <Form.Control className='search-button'
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon1"
                    />
                    <InputGroup.Text className='search-button' id="basic-addon1">Search</InputGroup.Text>
                  </InputGroup>
                </Col>
                <Col className='icons' sm={1} md={1} lg={1}>
                  <i className="bi bi-gear-fill "></i>
                  <i className="bi bi-bell-fill"></i>
                  <i className="bi bi-person-circle"></i>
                </Col>
              </Row>
            </Container>
          </Navbar.Collapse>
        </Navbar>
  )
}

export default NavbarComponent