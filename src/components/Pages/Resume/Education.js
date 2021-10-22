import React from "react"
import { Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap"

export default function Education() {
    return (
        <Card body className="mb-4">
            <Card.Title>Education</Card.Title>
            <hr className="m-0 p-0" />
            <ListGroup variant="flush">
                <ListGroupItem>
                    <Row>
                        <Col>
                            <strong>
                                Computing and Information System, Data Analytics
                                (PBD)
                            </strong>
                        </Col>
                        <Col className="text-muted" xs={4}>
                            September,2019 - December,2021
                        </Col>
                    </Row>
                    <a href="https://www.douglascollege.ca/">
                        Douglas College, British Columbia, Canada
                    </a>
                    <p>
                        Mentionable Courses done: Introduction to programming,
                        System Analysis and design, Operating System, Software
                        Engineering, Advanced web programming with Javascript,
                        Fundamental of Machine Learning, Business Statistics,
                        Fundamental of Data Analytics, Data Visualization,
                        Special topics in Data analytics.
                    </p>
                </ListGroupItem>
            </ListGroup>
            <ListGroup variant="flush">
                <ListGroupItem>
                    <Row>
                        <Col>
                            <strong>
                                Bachelors in Computer Science and Engineering
                            </strong>
                        </Col>
                        <Col className="text-muted" xs={3}>
                            July,2014 - September,2018
                        </Col>
                    </Row>
                    <a href="https://www.aust.edu/">
                        Ahsanullah University of Science and Technology, Dhaka,
                        Bangladesh
                    </a>
                    <p>
                        Mentaionable Courses Taken: Computer Graphics, Pattern
                        Recognition and Machine Learning, Information System
                        Design, Introduction to AI, Microprocessor and
                        Microcontrollers, Digital System Design, Database,
                        Software Development, Data Structures and Algorithm,
                        Object Oriented Programming.
                    </p>
                </ListGroupItem>
            </ListGroup>
        </Card>
    )
}
