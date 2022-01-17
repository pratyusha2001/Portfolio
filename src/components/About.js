import React from "react";
import Waves from 'react.waves'
import { Container, Row, Col } from "react-bootstrap";
import Lottie from "react-lottie-player";
import WebLottie from "../lottie/WebDevLottie.json";
import "./comp.css";

const About = () => {
    return (
        <div>
            <Waves>
                <Container id="about">
                    <Row>
                        <Col xs="12" sm="12" md="6" lg="6" className="about-leftcol">
                            <h1 className="about-hello"><span class="hand-wave">👋</span>Hello!</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="blue" class="bi bi-code-slash" viewBox="0 0 16 16">
                                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                            </svg>
                            <p className="about-description">
                                I'm <span style={{ color: "rgb(255,69,0)" }}>Pratyusha Routh</span>,
                                <br></br>
                                a web developer
                                <br></br>
                                specializing in frontend.
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="blue" class="bi bi-code-slash" viewBox="0 0 16 16">
                                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                            </svg>
                        </Col>
                        <Col xs="12" sm="12" md="6" lg="6">
                            <Lottie loop play animationData={WebLottie} className="about-lottie" />
                        </Col>
                    </Row>
                </Container>
            </Waves>
            <div className="abt-btn-container">
                <a href={require("../file/Resume.pdf")} download="Resume(Pratyusha Routh)"><button className="about-btn">Explore More</button></a>
        </div>
        </div>
    );
}
export default About;