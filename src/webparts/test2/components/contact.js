import React, { Component } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import "./App.css";


class Contact extends Component {
    render() {
        return (
            <div className="outer">
                <Container className="inner">

                    <Col sm={1}></Col>
                    <Col sm={10}>
                        <h3>Contact Us</h3>
                        <hr></hr>
                        <div>2809 Eldridge Pkway S.</div>
                        <div>Suite 208</div>
                        <div>Houston, TX 77077</div>
                        <br></br>
                        <div>832-290-9560</div>
                        <div>ascensionedu77077@gmail.com</div>

                    </Col>
                    <Col sm={1}></Col>


                </Container></div>
        );
    }
}

export default Contact;