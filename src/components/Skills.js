import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import "./comp.css"

const Skills = () => {
    return (
        <div id="skills">
        <Container>
            
            <p className="skill-header">Skills</p>
             <Row className="justify-content-center">
                <Col xs="12" sm="5" md="6" lg="6" className="skill-col">
                    HTML
                    <ProgressBar striped variant={"progress-skill"} animated now={95} />
                </Col>
                <Col xs="12" sm="5" md="6" lg="6" className="skill-col">
                    CSS
                    <ProgressBar striped variant={"progress-skill"} animated now={85} />
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs="12" sm="5" md="6" lg="6" className="skill-col">
                    JavaScript
                    <ProgressBar striped variant={"progress-skill"} animated now={85} />
                </Col>
                <Col xs="12" sm="5" md="6" lg="6" className="skill-col">
                    Bootstrap
                    <ProgressBar striped variant={"progress-skill"} animated now={95} />
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs="12" sm="5" md="6" lg="6" className="skill-col">
                    React
                    <ProgressBar striped variant={"progress-skill"} animated now={85} />
                </Col>
                <Col xs="12" sm="5" md="6" lg="6" className="skill-col">
                    Tailwind
                    <ProgressBar striped variant={"progress-skill"} animated now={95} />
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs="12" sm="5" md="6" lg="6" className="skill-col">
                    Next
                    <ProgressBar striped variant={"progress-skill"} animated now={85} />
                </Col>
                <Col xs="12" sm="5" md="6" lg="6" className="skill-col">
                    Java
                    <ProgressBar striped variant={"progress-skill"} animated now={60} />
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs="12" sm="5" md="6" lg="6" className="skill-col">
                    C
                    <ProgressBar striped variant={"progress-skill"} animated now={75} />
                </Col>
                <Col xs="12" sm="5" md="6" lg="6" className="skill-col">
                    C++
                    <ProgressBar striped variant={"progress-skill"} animated now={65} />
                </Col>
            </Row> 
        </Container>
        </div>
    );
}
export default Skills;