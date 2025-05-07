import React from 'react'
import { Row, Col, Container, Dropdown } from 'react-bootstrap'


const Herobody = () => {
    return (
        <Container>
            <Row>
                <Col xl={12} sm={12} md={6} lg={6} className='d-flex bg-primary-subtle justify-end flex-wrap mt-4 rounded-5 mb-3'>
                    <Row>
                        <Col xs={10} sm={8} md={10} lg={10} xxl={10}>
                            <h2 className='ml-4 mt-4'>Incometracker</h2>
                        </Col>
                        <Col xs={2} sm={4} md={2} lg={2} xxl={2} className="position-relative my-4 ">
                            <Dropdown>
                                <Dropdown.Toggle varient="success" id="dropdown-basic" className='text-wrap b-4 fw-200'><br />
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
                    <Row >
                        <Col>
                            <p>
                                Track Track Track Track Track Track Track Track Track Track Track Track Track Track Track Track Track Track Track Track Track Track Track Track Track
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={6}>
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




                <Col sm={12} md={6} lg={6} className='ml-2' >
                    <Row>
                        <Col xs={12} sm={10}>
                            <h3>Your Recent Projects</h3>
                        </Col>
                        <Col xs={12} sm={2} >
                            <button>See all Projects</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <Col xs={1} sm={2} md={6} lg={6} className='mt-3'>
                                    <i className="bi bi-0-circle"></i>
                                </Col>
                                <Col xs={11} sm={10} md={6} lg={6} className='mt-3'>
                                    <Row>
                                        <Col xs={9}>
                                            <h4 className='m-0'>Web Dev Projects</h4>
                                        </Col>
                                        <Col xs={2}> Paid</Col>
                                        <Col xs={1}>^</Col>
                                        <Row>
                                            <Col className='fs-n2'>
                                            Cybersecurity specilist
                                            </Col>
                                        </Row>
                                        
                                    </Row>




                                </Col>

                            </Row>


                        </Col>

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

            </Row>






















        </Container>
    )
}
export default Herobody