import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./App.css";

class Teacher extends Component {
    render() {
        return (<div>
            <Container>
                <Row>
                    <Col sm={4}>
                        <div class="portrait">
                            <img src={require(this.props.picture)} alt='' />

                        </div>
                    </Col>
                    <Col sm={8}>
                        <div>{this.props.name}</div>
                    </Col>
                </Row>
            </Container>
        </div>)
    }
}

export default Teacher