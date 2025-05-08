import React from 'react'
import { Row, Col, Container, Button, Dropdown } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const Herobody = () => {
    return (
        <Container>

            <Col>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={7} xl={7} className='d-flex bg-primary-subtle justify-end flex-wrap mt-4 rounded-5 mb-3'>
                        <Row>
                            <Col xs={10} sm={10} md={10} lg={11} xxl={10}>
                                <h2 className='ml-4 mt-4'>Incometracker</h2>
                            </Col>
                            <Col xs={2} sm={2} md={2} lg={1} xxl={2} className="position-relative my-4 ">
                                <Dropdown>
                                    <Dropdown.Toggle varient="success" id="dropdown-basic" className='text-wrap b-4 fw-200' ><br />
                                        Week                                    </Dropdown.Toggle>
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
                        <Row >
                            <Col>
                                <p>
                                    Track Track Track Track Track Track Track Track Track Track Track Track Track Track Track Track Track Track Track Track Track Track Track Track Track
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={6} >
                                <Row>
                                    <h2>+20%</h2>
                                </Row>
                                <Row>
                                    <Col xs={8}>
                                        <p>
                                            Track Track Track Track Track Track Track
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12} md={6} className='d-flex justify-content-end pb-4 me-5'>
                                <Row >
                                    <Col className='d-flex align-items-end'>S</Col>
                                    <Col className='d-flex align-items-end'>M</Col>
                                    <Col className='d-flex align-items-end'>T</Col>
                                    <Col className='d-flex align-items-end'>w</Col>
                                    <Col className='d-flex align-items-end'>T</Col>
                                    <Col className='d-flex align-items-end'>F</Col>
                                    <Col className='d-flex align-items-end'>S</Col>
                                </Row>


                            </Col>
                        </Row>

                    </Col>
                    <Col xs={12} sm={12} md={12} lg={5} xl={5} className='ml-2 mt-5 mr-0' >
                        <Row>
                            <Col xs={8} sm={8} md={10} lg={8} xl={8}>
                                <h3>Your Recent Projects</h3>
                            </Col>
                            <Col xs={4} sm={4} md={2} lg={4} xl={4}  >
                                <button className='p-0 basis-1/4'>See all Projects</button>
                            </Col>
                        </Row>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>

                                    <Col xs={1} sm={1} md={1} lg={1} xl={1} className=' mt-3'>
                                        <i className="bi bi-bricks"></i>
                                    </Col>
                                    <Col xs={9} sm={10} md={6} lg={6} xl={7} className='mt-3'>
                                        <Row>
                                            <Col xs={9} sm={10} md={11} lg={10} xl={11} >
                                                <h4 className='m-0'>Web Dev Projects</h4>
                                            </Col>
                                            <Col xs={3} sm={2} md={1} lg={2} xl={1} className='mt-0'>
                                                <Badge pill bg="secondary">
                                                    Paid
                                                </Badge>
                                            </Col>

                                            <Row>
                                                <Col className='fs-n'>
                                                    $10/hour
                                                </Col>
                                            </Row>
                                        </Row>

                                    </Col>
                                </Accordion.Header>

                                <Accordion.Body>
                                    <Row>
                                        This project involves implementing both frontend and backend functionalities, as well as integrating with third-party APIs.
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Row>
                                                <Col xs={4} sm={4} lg={3} xl={3} >
                                                    <i className="bi bi-geo-alt">Germany</i>
                                                </Col>
                                                <Col xs={1} sm={1} lg={1} xl={1}>|</Col>
                                                <Col xs={4} sm={7} lg={7} xl={8} >
                                                    2h ago
                                                </Col>
                                            </Row>
                                        </Col>

                                    </Row>

                                </Accordion.Body>
                            </Accordion.Item>


                            <Accordion.Item eventKey="1">
                                <Accordion.Header>

                                    <Col xs={1} sm={1} md={1} lg={1} xl={1} className=' mt-3'>
                                        <i className="bi bi-bricks"></i>
                                    </Col>
                                    <Col xs={11} sm={10} md={6} lg={6} xl={7} className='mt-3'>
                                        <Row>
                                            <Col xs={8}>
                                                <h4 className='m-0'>Copyright Projects</h4>
                                            </Col>
                                            <Col xs={4} sm={2} md={8} lg={9} xl={9} className='mt-0'>
                                                <Badge pill bg="secondary">
                                                    Paid
                                                </Badge>
                                            </Col>
                                            <Row>
                                                <Col className='fs-n'>
                                                    $10/hour
                                                </Col>
                                            </Row>
                                        </Row>

                                    </Col>
                                </Accordion.Header>

                                <Accordion.Body>
                                    <Row>
                                        This project involves implementing both frontend and backend functionalities, as well as integrating with third-party APIs.
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Row>
                                                <Col xs={4} sm={4} lg={3} xl={3} >
                                                    <i className="bi bi-geo-alt">Germany</i>
                                                </Col>
                                                <Col xs={1} sm={1} lg={1} xl={1}>|</Col>
                                                <Col xs={4} sm={7} lg={7} xl={8} >
                                                    2h ago
                                                </Col>
                                            </Row>
                                        </Col>

                                    </Row>

                                </Accordion.Body>
                            </Accordion.Item>


                            <Accordion.Item eventKey="2">
                                <Accordion.Header>

                                    <Col xs={1} sm={1} md={1} lg={1} xl={1} className=' mt-3'>
                                        <i className="bi bi-bricks"></i>
                                    </Col>
                                    <Col xs={11} sm={10} md={6} lg={6} xl={7} className='mt-3'>
                                        <Row>
                                            <Col xs={8} sm={10} md={10} lg={12} xl={10} >
                                                <h4 className='m-0'>Web Designing Project</h4>
                                            </Col>
                                            <Col xs={3} sm={2} md={2} lg={2} xl={2} className='mt-0'>
                                                <Badge pill bg="secondary">
                                                    Not paid
                                                </Badge>
                                            </Col>

                                            <Row>
                                                <Col className='fs-n'>
                                                    $10/hour
                                                </Col>
                                            </Row>
                                        </Row>

                                    </Col>
                                </Accordion.Header>

                                <Accordion.Body>
                                    <Row>
                                        This project involves implementing both frontend and backend functionalities, as well as integrating with third-party APIs.
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Row>
                                                <Col xs={4} sm={4} lg={3} xl={3} >
                                                    <i className="bi bi-geo-alt">Germany</i>
                                                </Col>
                                                <Col xs={1} sm={1} lg={1} xl={1}>|</Col>
                                                <Col xs={4} sm={7} lg={7} xl={8} >
                                                    2h ago
                                                </Col>
                                            </Row>
                                        </Col>

                                    </Row>

                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={7} className='mt-4'>

                        <Row>
                            <Col xs={12} sm={12} md={6} lg={7} xl={6} >
                                <Row>
                                    <Col xs={9} sm={12} md={9} lg={9} xl={8}>
                                        <h3>Let's Connet</h3>
                                    </Col>
                                    <Col xs={3} sm={6} md={3} lg={3} xl={4} className='mt-2' >
                                        <button >See all</button>
                                    </Col>
                                </Row>

                                <br />
                                <Row className='d-flex  border border-black rounded-pill py-1'>
                                    <Col >
                                        <Row>
                                            <Col xs={1} sm={1} md={1} lg={2} xl={2} className='mt-3 b-3 fs-2' >                  
                                                <i className="bi bi-person-circle"></i>
                                            </Col>
                                            <Col xs={9} sm={9} md={9} lg={8} xl={8}>
                                                <Row>
                                                    <Col xs={8} sm={8} md={8} lg={9} xl={8}>
                                                        <h5 className='b-0 m-0 mt-3'>Randy Gouse</h5>
                                                    </Col>
                                                    <Col xs={2} sm={2} md={4} lg={3} xl={3} className='mt-3'>
                                                        <Badge pill bg="secondary">
                                                            Senior
                                                        </Badge>
                                                    </Col>

                                                </Row>
                                                <Row>
                                                    <Col xs={12} sm={6} md={12} lg={12} xl={12} className='ts-1'>
                                                        Cyber Security Specilist
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col xs={2} sm={2} md={2} lg={2} xl={2} className='p-0 mt-3 ' >
                                                <Button>
                                                    +
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <br />

                                <Row className='d-flex  border border-black rounded-pill py-1'>
                                    <Col >
                                        <Row>
                                            <Col xs={1} sm={1} md={1} lg={1} xl={2} className='mt-3 b-3 fs-2' >
                                                <i className="bi bi-person-circle"></i>
                                            </Col>
                                            <Col xs={9} sm={9} md={9} lg={9} xl={8}>
                                                <Row>
                                                    <Col xs={8} sm={8} md={8} lg={9} xl={8}>
                                                        <h5 className='b-0 m-0 mt-3'> Gaina Schleifer</h5>
                                                    </Col>
                                                    <Col xs={2} sm={2} md={4} lg={3} xl={4} className='mt-3'>
                                                        <Badge pill bg="secondary">
                                                            Middle
                                                        </Badge>
                                                    </Col>

                                                </Row>
                                                <Row>
                                                    <Col xs={12} sm={6} md={12} lg={12} xl={11} className='ts-1'>
                                                        UI/UX Desiner
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col xs={2} sm={2} md={2} lg={2} xl={1} className='p-0 mt-3 ' >
                                                <Button>
                                                    +
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                            </Col>
                            <Col xs={12} sm={12} md={6} lg={4} xl={6} className='d-flex mt-4 mr-4' >
                                <Card>
                                    <Card.Body>
                                        <Row> <Card.Title>Card Title</Card.Title></Row>
                                        <Row><Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle></Row>
                                        <Row><Card.Text>
                                            Get access to exclusive benifits and expand your freelancing opportunities
                                        </Card.Text></Row><br /><br /><br />
                                        <Row>
                                            <Col xs={10} sm={10} >Upgrade now</Col>
                                            <Col xs={2} sm={2}  > <i class="bi bi-arrow-right-short"></i></Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                    </Col>

                    <Col xs={12} sm={12} md={12} lg={5} xl={5} className='mt-4'>
                        <Row>
                            <Col xs={10}md={12} sm={10} >
                                <Row>
                                    <Col xs={7} sm={7} md={9} lg={8} xl={8}>
                                        <h5>Proposal Progress</h5>

                                    </Col>
                                    <Col xs={5} sm={5} md={3} lg={4} xl={4}>
                                        <i class="bi bi-calendar3-fill"> 11,2024</i>
                                    </Col>

                                </Row>

                            </Col>

                        </Row><br />
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12} >
                                <Row>
                                    <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                        <Row>
                                            <h5>Proposal sent</h5>
                                        </Row>
                                        <Row>

                                        </Row>

                                    </Col>

                                    <Col xs={4} sm={4} md={4} lg={4} xl={4} >
                                        <h5>Interviews</h5>
                                    </Col>

                                    <Col xs={4} sm={4} md={4} lg={4} xl={4} >
                                        <h5>Hires</h5>
                                    </Col>
                                </Row>
                                <Row></Row>

                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Col>

        </Container>

    )
}
export default Herobody