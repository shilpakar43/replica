import React from 'react'
import { Button, Row, Col, Container, Dropdown, } from 'react'

const lup = () => {
  return (
    <Row className='ft'>
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
        </Row>
  )
}

export default lup