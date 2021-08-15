import * as React from 'react';
import { Component } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { ITest2Props } from './ITest2Props';

import Brian from '../Pictures/lettuce.jpg';
import styles from './App.css';

export default class Staff extends Component {
    render() {
        return (
            <div className="outer">
                <Container className="inner">
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={11}><h3>Faculty</h3></Col>

                    </Row>
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={10}>
                            <hr></hr>
                        </Col>
                        <Col sm={1}></Col>
                    </Row>
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={2}>
                            <img className="contact-picture"
                                src={Brian}
                                alt="avatar"
                                style={{ height: "125px", width: "125px" }}
                            />
                        </Col>
                        <Col sm={4}>
                            <h3>Dr. Alice</h3>
                            <ul>
                                <li>Classical reading</li>
                                <li>Public Speaking</li>
                                <li>Narrative Writing</li>
                                <li>College Essay</li>
                            </ul>
                        </Col>
                        <Col sm={4}>
                        </Col>
                        <Col sm={1}></Col>
                    </Row>
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={2}>
                            <img className="contact-picture"
                                src={Brian}
                                alt="avatar"
                                style={{ height: "125px", width: "125px" }}
                            />
                        </Col>
                        <Col sm={4}>
                            <h3>Dr. Chris</h3>
                            <ul>
                                <li>Debate</li>
                            </ul>
                        </Col>
                        <Col sm={4}>
                        </Col>
                        <Col sm={1}></Col>
                    </Row>
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={2}>
                            <img className="contact-picture"
                                src={Brian}
                                alt="avatar"
                                style={{ height: "125px", width: "125px" }}
                            />
                        </Col>
                        <Col sm={4}>
                            <h3>Ms. Jane</h3>
                            <ul>
                                <li>SAT/PSAT English</li>
                            </ul>
                        </Col>
                        <Col sm={4}>
                        </Col>
                        <Col sm={1}></Col>
                    </Row>
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={2}>
                            <img className="contact-picture"
                                src={Brian}
                                alt="avatar"
                                style={{ height: "125px", width: "125px" }}
                            />
                        </Col>
                        <Col sm={4}>
                            <h3>Mr. Johnson</h3>
                            <ul>
                                <li>Performance Arts</li>
                            </ul>
                        </Col>
                        <Col sm={4}>
                        </Col>
                        <Col sm={1}></Col>
                    </Row>
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={2}>
                            <img className="contact-picture"
                                src={Brian}
                                alt="avatar"
                                style={{ height: "125px", width: "125px" }}
                            />
                        </Col>
                        <Col sm={4}>
                            <h3>Coach John Hendrick</h3>
                            <ul>
                                <li>Chess</li>
                            </ul>
                        </Col>
                        <Col sm={4}>
                        </Col>
                        <Col sm={1}></Col>
                    </Row>
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={2}>
                            <img className="contact-picture"
                                src={Brian}
                                alt="avatar"
                                style={{ height: "125px", width: "125px" }}
                            />
                        </Col>
                        <Col sm={4}>
                            <h3>Mrs. Hou</h3>
                            <ul>
                                <li>Mathematics</li>
                            </ul>
                        </Col>
                        <Col sm={4}>
                        </Col>
                        <Col sm={1}></Col>
                    </Row>
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={2}>
                            <img className="contact-picture"
                                src={Brian}
                                alt="avatar"
                                style={{ height: "125px", width: "125px" }}
                            />
                        </Col>
                        <Col sm={4}>
                            <h3>Mr. Marberry</h3>
                            <ul>
                                <li>Adult English</li>
                            </ul>
                        </Col>
                        <Col sm={4}>
                        </Col>
                        <Col sm={1}></Col>
                    </Row>
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={2}>
                            <img className="contact-picture"
                                src={Brian}
                                alt="avatar"
                                style={{ height: "125px", width: "125px" }}
                            />
                        </Col>
                        <Col sm={4}>
                            <h3>Mr. Niu</h3>
                            <ul>
                                <li>Number Sense</li>
                                <li>ISEE Math</li>
                                <li>Geometry</li>
                                <li>Competition Math</li>
                                <li>Physics</li>
                            </ul>
                        </Col>
                        <Col sm={4}>
                        </Col>
                        <Col sm={1}></Col>
                    </Row>
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={2}>
                            <img className="contact-picture"
                                src={Brian}
                                alt="avatar"
                                style={{ height: "125px", width: "125px" }}
                            />
                        </Col>
                        <Col sm={4}>
                            <h3>Dr. Robert</h3>
                            <ul>
                                <li>Reading/Writing</li>
                                <li>ISEE English</li>
                            </ul>
                        </Col>
                        <Col sm={4}>
                        </Col>
                        <Col sm={1}></Col>
                    </Row>
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={2}>
                            <img className="contact-picture"
                                src={Brian}
                                alt="avatar"
                                style={{ height: "125px", width: "125px" }}
                            />
                        </Col>
                        <Col sm={4}>
                            <h3>Dr. Tran</h3>
                            <ul>
                                <li>Biology</li>
                            </ul>
                        </Col>
                        <Col sm={4}>
                        </Col>
                        <Col sm={1}></Col>
                    </Row>
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={2}>
                            <img className="contact-picture"
                                src={Brian}
                                alt="avatar"
                                style={{ height: "125px", width: "125px" }}
                            />
                        </Col>
                        <Col sm={4}>
                            <h3>Ms. Xu</h3>
                            <ul>
                                <li>Chemistry</li>
                            </ul>
                        </Col>
                        <Col sm={4}>
                        </Col>
                        <Col sm={1}></Col>
                    </Row>
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={2}>
                            <img className="contact-picture"
                                src={Brian}
                                alt="avatar"
                                style={{ height: "125px", width: "125px" }}
                            />
                        </Col>
                        <Col sm={4}>
                            <h3>Dr. Zhao</h3>
                            <ul>
                                <li>Chemistry</li>
                            </ul>
                        </Col>
                        <Col sm={4}>
                        </Col>
                        <Col sm={1}></Col>
                    </Row>
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={2}>
                            <img className="contact-picture"
                                src={Brian}
                                alt="avatar"
                                style={{ height: "125px", width: "125px" }}
                            />
                        </Col>
                        <Col sm={4}>
                            <h3>Dr. Zheng</h3>
                            <ul>
                                <li>Physics</li>
                            </ul>
                        </Col>
                        <Col sm={4}>
                        </Col>
                        <Col sm={1}></Col>
                    </Row>
                </Container>

            </div>
        );
    }
};
