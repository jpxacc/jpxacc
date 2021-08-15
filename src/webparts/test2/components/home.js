import React, { Component } from 'react';
import { CardDeck, Button, Card, Row, Container, Col } from 'react-bootstrap';
import TextLoop from "react-text-loop";
import "./App.css";


class Home extends Component {
    render() {


        return (
            <div className="outer">
                <Container className="inner">
                    <div className="imageloop">
                        <div className="inside">
                            <TextLoop
                                interval={5000}
                                springConfig={{ stiffness: 1000, damping: 100 }}
                                fade
                                mask>
                                <span>
                                    <img className="contact-picture"
                                        src={require('../Pictures/bedhead.jpg')}
                                        alt="avatar"
                                        style={{ height: "300px" }}
                                    />
                                </span>
                                <span>
                                    <img className="contact-picture"
                                        src={require('../Pictures/cat.jpg')}
                                        alt="avatar"
                                        style={{ height: "300px" }}
                                    />
                                </span>
                                <span>
                                    <img className="contact-picture"
                                        src={require('../Pictures/stream.png')}
                                        alt="avatar"
                                        style={{ height: "300px" }}
                                    />
                                </span>
                            </TextLoop>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Home;