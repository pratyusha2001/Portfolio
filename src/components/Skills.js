import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./comp.css"

const Skills = () => {
    return (
        <div id="skills">
            <Container>
                <p className="skill-header">Skills</p>
                <Row lg={4} md={3} sm={2} className="skills-col">
                    <Col>
                        <Card className="skill-card">
                            <Card.Img variant="top" src="data:image/png;base64,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" className="skills-img" />
                            <Card.Body>
                                <Card.Title>NextJS</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="skill-card">
                            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" className="skills-img"/>
                            <Card.Body>
                                <Card.Title>React</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="skill-card">
                            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" className="skills-img" />
                            <Card.Body>
                                <Card.Title>Bootstrap</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="skill-card">
                            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png" className="skills-img" />
                            <Card.Body>
                                <Card.Title>Tailwind</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row lg={4} md={3} sm={2} className="skills-col">
                    <Col>
                        <Card className="skill-card">
                            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" className="skills-img"/>
                            <Card.Body>
                                <Card.Title>HTML</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="skill-card">
                            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" className="skills-img"/>
                            <Card.Body>
                                <Card.Title>CSS</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="skill-card">
                            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" className="skills-img"/>
                            <Card.Body>
                                <Card.Title>JavaScript</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="skill-card">
                            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1119px-Java_programming_language_logo.svg.png" className="skills-img"/>
                            <Card.Body>
                                <Card.Title>Java</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row lg={4} md={3} sm={2} className="skills-col">
                    <Col>
                        <Card className="skill-card">
                            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/695px-C_Programming_Language.svg.png" className="skills-img"/>
                            <Card.Body>
                                <Card.Title>C</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="skill-card">
                            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" className="skills-img"/>
                            <Card.Body>
                                <Card.Title>C++</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Skills;