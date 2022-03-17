import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import "./comp.css"

const Projects = () => {
    return (
        <div id="projects">
            <Container>
                <p className="project-header">Projects</p>
                <Row lg={2} sm={2} xs={1}>
                    <Col>
                        <Card className="project-card">
                            <Card.Body>
                                <Card.Title className="project-card-title">Alexa Developers SRM Teams page</Card.Title>
                                <Card.Text>
                                    Tech Stacks used: Next, Tailwind
                                </Card.Text>
                                <a target="_blank" href="https://alexadevsrm.com/team">
                                    <button className="project-btn">
                                        View Project
                                    </button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="project-card">
                            <Card.Body>
                                <Card.Title className="project-card-title">Guvi Code Camp Services page</Card.Title>
                                <Card.Text>
                                    Tech Stacks used: React, React-bootstrap
                                </Card.Text>
                                <a target="_blank" href="https://gccatsrm.tech/services">
                                    <button className="project-btn">
                                        View Project
                                    </button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row lg={2} sm={2} xs={1}>
                    <Col>
                        <Card className="project-card">
                            <Card.Body>
                                <Card.Title className="project-card-title">Blogging website</Card.Title>
                                <Card.Text>
                                    Tech Stacks used: React, CSS
                                </Card.Text>
                                <a target="_blank" href="https://github.com/pratyusha2001/blog-react">
                                    <button className="project-btn">
                                        View Project
                                    </button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="project-card">
                            <Card.Body>
                                <Card.Title className="project-card-title">House Treasure Hunt</Card.Title>
                                <Card.Text>
                                    Tech Stacks used: TypeScript
                                </Card.Text>
                                <a target="_blank" href="https://github.com/pratyusha2001/House-Treasure-Hunt">
                                    <button className="project-btn">
                                        View Project
                                    </button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Projects;