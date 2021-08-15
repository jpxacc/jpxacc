import React, { Component } from 'react';
import { CardDeck, Card, Container, Col } from 'react-bootstrap';
import Cat from "../Pictures/cat.jpg"
import "./App.css";

class CourseDescription extends Component {
    render() {
        return (
            <div className="outer">
                <Container className="inner">
                    <Col sm={10} className="coursecol">
                        <CardDeck>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Adult English</Card.Title>
                                    <Card.Text>
                                        Taught by: Mr Marberry
                                        <br className="skip"></br>
                                        $20/2hr
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Number Sense (2nd-5th Grade)</Card.Title>
                                    <Card.Text>
                                        Taught by: Dr. Niu
                                        <br className="skip"></br>
                                        $375 for either class
                                 </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Reading/Writing (2nd-8th Grade)</Card.Title>
                                    <Card.Text>
                                        Taught by: Mr. Robert
                                    <br className="skip"></br>
                                        $375 for entire class, many different levels
                                    <br className="skip"></br>
                                        The goal of these courses is to teach the students the many different styles of writing and what makes each of the elements of a story stand out.
                                 </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                        <div className="break"></div>
                        <CardDeck>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>ISEE Math (4th-5th Grade)</Card.Title>
                                    <Card.Text>
                                        Taught by: Dr. Niu
                                        <br className="skip"></br>
                                        $375 for entire class
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Geometry</Card.Title>
                                    <Card.Text>
                                        Taught by: Dr. Niu
                                        <br className="skip"></br>
                                        $560 for entire class
                                 </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>ISEE English (4th-5th)</Card.Title>
                                    <Card.Text>
                                        Taught by: Mr. Robert
                                    <br className="skip"></br>
                                        $375 for entire class
                                 </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                        <div className="break"></div>
                        <CardDeck>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Debate</Card.Title>
                                    <Card.Text>
                                        Taught by: Mr Chris
                                        <br className="skip"></br>
                                        $560 for entire class
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Classical Reading</Card.Title>
                                    <Card.Text>
                                        Taught by: Dr. Alice
                                        <br className="skip"></br>
                                        $560 for entire class
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Creative Writing</Card.Title>
                                    <Card.Text>
                                        Taught by: Mr. Robert
                                        <br className="skip"></br>
                                        $560 for entire class
                                 </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                        <div className="break"></div>
                        <CardDeck>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Middle School Competition Math</Card.Title>
                                    <Card.Text>
                                        Taught by: Dr. Niu
                                    <br className="skip"></br>
                                        $560 for entire class
                                 </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Performance Art</Card.Title>
                                    <Card.Text>
                                        Taught by: Mr. Johnson
                                        <br className="skip"></br>
                                        $450 for entire class
                                 </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Public Speaking</Card.Title>
                                    <Card.Text>
                                        Taught by: Dr. Alice
                                        <br className="skip"></br>
                                        $560 for entire class
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                        <div className="break"></div>
                        <CardDeck>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Narrative Writing</Card.Title>
                                    <Card.Text>
                                        Taught by: Dr. Alice
                                        <br className="skip"></br>
                                        $560 for entire class
                                 </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>SAT/PSAT Math</Card.Title>
                                    <Card.Text>
                                        Taught by: TBD
                                        <br className="skip"></br>
                                        $560 for entire class
                                 </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>SAT/PSAT English</Card.Title>
                                    <Card.Text>
                                        Taught by: Ms. Jane
                                    <br className="skip"></br>
                                        $560 for entire class
                                 </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                        <div className="break"></div>
                        <CardDeck>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Biology </Card.Title>
                                    <Card.Text>
                                        Taught by: Dr. Tran
                                        <br className="skip"></br>
                                        Private lessons available on Friday, Saturday Sunday by appointment
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Chemistry</Card.Title>
                                    <Card.Text>
                                        Taught by: Ms. Xu or Dr. Zhao
                                        <br className="skip"></br>
                                        Private lessons available on Monday, Tuesday, Wednesday, Saturday by appointment
                                 </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Physics</Card.Title>
                                    <Card.Text>
                                        Taught by: Dr. Niu or Dr. Zheng
                                    <br className="skip"></br>
                                        Private lessons available on Wednesday, Saturday, Sunday by appointment
                                 </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                        <div className="break"></div>

                        <CardDeck >

                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Math (All Levels) </Card.Title>
                                    <Card.Text>
                                        Taught by: Mrs. Hou
                                        <br className="skip"></br>
                                        Private lessons available all days by appointment
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>College Essays</Card.Title>
                                    <Card.Text>
                                        Taught by: Dr. Alice
                                        <br className="skip"></br>
                                        Private lessons available by appointment
                                        <br className="skip"></br>
                                        Description: This class is designed to help students learn the styles, voices, forms and genres of the masters of poetry and prose, and to begin to apply the principles they learn from these skilled authors by writing first person narratives. Emphasis will be placed on clear, concise, and accurate writing.
                                 </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Chess (K-4th Grade)</Card.Title>
                                    <Card.Text>
                                        Taught by: Coach John Hendrick
                                        <br className="skip"></br>
                                        $300 for either of the classes
                                        <br className="skip"></br>
                                        Description:  Developing a gateway for children and teens to foster mental skills by
assisting them with increasing focus, problem solving, confidence, and spatial pattern development.
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </CardDeck>
                    </Col>

                </Container></div>
        );
    }
}

export default CourseDescription;