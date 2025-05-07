import { Button, Row, Col, Card, Container, Placeholder, InputGroup, Navbar } from 'react-bootstrap'
import React from 'react'
import Form from 'react-bootstrap/Form';

// import InputGroup from 'react-bootstrap/InputGroup';
import './App.css'

function App() {

  return (
    <>
      <Container fluid>
        
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


        <Row>
          <Col >
            <Container className='ict'>
              <Row>
                <Col>
                  <Row>
                    <Col>Income Tracker</Col>
                    <Col><Button>Week</Button></Col>
                  </Row>
                </Col>
              </Row>

              <Row>
                VirtualBox is a free program that lets you run another operating system (like Linux or Windows) inside your current one — like having a second computer.
              </Row>
              <Row>
                <Col className='twenty'>
                  <h1>+20%</h1>
                  <p>This Week income is higher than last week</p>
                </Col>

                <Col className='SMTWTFS'>
                  <p> S M T W T F S</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <Row>
              <Col>
                <h1>Your Recent Projects</h1>
              </Col>
              <Col>
                <button>See all Projects</button>
              </Col>
            </Row>
            <Row>
              <Col>
                <i className="bi bi-0-circle">Web Dev Pro      Paid</i>
              </Col>
              <Col>arrow</Col>
            </Row>
            <Row>
              <i className="bi bi-0-circle"> Copyright Project     Not Paid</i>
              <Col>arrow</Col>
            </Row>
            <Row>
              <Col>
                <i className="bi bi-0-circle"> Copyright Project     Not Paid</i>
              </Col>
              <Col>arrow</Col>
            </Row>
          </Col>
        </Row>
        <Col>
          <Container>
            <Container>
              <Col>
                <Row>
                  <Col>
                    <h3>
                      Lets connet
                    </h3>
                  </Col>
                  <Col>
                    See all
                  </Col>
                </Row>
                <Row className='connect'>
                  <Col>
                    circle
                  </Col>
                  <Col>
                    <Row>RandyGouse    Senior</Row>
                    <Row>Cybersecurity specialist</Row>
                  </Col>
                  <Col>
                    <Button>+</Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    circle
                  </Col>
                  <Col>
                    <Row>RandyGouse    juioner</Row>
                    <Row>Cybersecurity specialist</Row>
                  </Col>
                  <Col>
                    <Button>+</Button>
                  </Col>
                </Row>
              </Col>
              <Card>
                <Row>
                  <h4>Unlock premimum features</h4>
                </Row>
                <Row>
                  Get access Get access Get access Get access Get access Get access
                </Row>
                
                <Row>
                <InputGroup>
                  <Form.Control
                    placeholder="Upgrade now"
                    aria-label="Upgradenow"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="outline-secondary" id="button-addon2">
                    arrow
                  </Button>
                </InputGroup>
                </Row>
              </Card>
            </Container>

            <Container>
              <Card>
                <Row>
                  <Col>Proposal Progress</Col>
                  <Col>Date April full</Col>
                </Row>
                <Row className='proposal'>
                  <Col>Proposal sent</Col>
                  <Col>Interview</Col>
                  <Col>Hire</Col>
                </Row>
              </Card>
            </Container>
          </Container>
        </Col>
      </Container>
    </>
  )
}

export default App
