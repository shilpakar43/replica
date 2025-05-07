import { Button, Row, Col,Card, Container, InputGroup } from 'react-bootstrap'
import React from 'react'
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

import './App.css'
import NavbarComponent from './components/Navbar';
import Herobody from './components/hero';

function App() {

  return (
    <>
      <Container fluid className='m-0 p-0'>

        


        <NavbarComponent/>
        <Herobody/>

        
        {/* <Row>
          <Col sm={6} md={6} lg={6} className='d-flex bg-primary-subtle flex-wrap m-5 rounded-5'>
            <Row>
              <Col sm={10} md={10} lg={10}>
                <h2 className='m-5'>Incometracker</h2>
              </Col>

              <Col sm={2} md={2} lg={2} className="position-relative">
                <Dropdown>
                  <Dropdown.Toggle varient="success" id="dropdown-basic" className='text-wrap w-100'rounded-start-2><br />
                    Week
                  </Dropdown.Toggle>
                  <Dropdown.Menu className='w-100 position-absolute '>
                    <Dropdown.Item>Sun</Dropdown.Item>
                    <Dropdown.Item>Mon</Dropdown.Item>
                    <Dropdown.Item>Tue</Dropdown.Item>
                    <Dropdown.Item>Wed</Dropdown.Item>
                    <Dropdown.Item>Thu</Dropdown.Item>
                    <Dropdown.Item>Fri</Dropdown.Item>
                    <Dropdown.Item>Sat</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

              </Col>
            </Row>
            <Row>
              Track Track Track Track Track Track Track Track Track Track Track Track Track Track Track Track Track Track Track Track Track Track Track Track Track
            </Row>
            <Row>
              <Col>
                <Row>
                  <h2>+20%</h2>
                </Row>
                <Row>
                  Track Track Track Track Track Track Track Track
                </Row>
              </Col>
              <Col className='d-flex justify-content-end'>
                <Row >
                  <Col className='d-flex align-items-end'>S</Col>
                  <Col className='d-flex align-items-end'>M</Col>
                  <Col className='d-flex align-items-end'>T</Col>
                  <Col className='d-flex align-items-end'>w</Col>
                  <Col className='d-flex align-items-end'>t</Col>
                  <Col className='d-flex align-items-end'>f</Col>
                  <Col className='d-flex align-items-end'>s</Col>
                </Row>


              </Col>
            </Row>

          </Col>










          <Col sm={6} md={6} lg={6} >
            <Row>
              <Col>
                <h3>Your Recent Projects</h3>
              </Col>
              <Col>
                <button>See all Projects</button>
              </Col>
            </Row>
            <Row>
              <Col>
                <i className="bi bi-0-circle">Web Dev Projects      Paid</i>
              </Col>
              <Col>^</Col>
            </Row>
            <Row>
              <i className="bi bi-0-circle"> Copyright Project       Not Paid</i>
              <Col>arrow</Col>
            </Row>
            <Row>
              <Col>
                <i className="bi bi-0-circle"> Copyright Project     Not Paid</i>
              </Col>
              <Col>arrow</Col>
            </Row>
          </Col>

        </Row> */}

        {/* <Row className='ft'>


          <Col>
            <Row>
              <Col sm={8} md={8} lg={8}>
                <h3>Let's Connect</h3>
              </Col>

              <Col sm={4} md={4} lg={4}>
                See all
              </Col>
            </Row>
            <Row>
              <Col sm={1} md={1} lg={1}>
                <i className="bi bi-person-circle"></i>
              </Col>
              <Col>
                <Row>
                  <Col sm={6} md={6} lg={6}>
                    <h5>Randy House </h5>
                    <Row>
                      Cybersecurity specilist
                    </Row>
                  </Col>
                  <Col sm={3} md={3} lg={3}>
                    Senior
                  </Col>
                </Row>

              </Col>
              <Col sm={2} md={2} lg={2}>+</Col>

            </Row>
            <Row></Row>
          </Col>
          <Col>
            <Card className='UPF'>
              <Row>
                <h4>Unlock premimum features</h4>
              </Row>
              <Row>
                Get access Get access Get access Get access Get access Get access
              </Row>

              <Row className='ssb'>
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
          </Col>
          <Col>
            <Row>
              <Col>Proposal Progress</Col>
              <Col>Date April full</Col>
            </Row>
            <Row className='proposal'>
              <Col>Proposal sent</Col>
              <Col>Interview</Col>
              <Col>Hire</Col>
            </Row>

          </Col>
        </Row> */}

        {/* <Row>





        </Row> */}

      </Container>



    </>
  )
}

export default App
