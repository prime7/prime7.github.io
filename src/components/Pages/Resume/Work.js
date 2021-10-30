import React from "react"
import { Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap"

export default function Work() {
    return (
        <Card body className="mb-4">
            <Card.Title>Work Experience</Card.Title>
            <hr className="m-0 p-0" />
            <ListGroup variant="flush">
                <ListGroupItem variant="flush">
                    <Row>
                        <Col>
                            <strong>Software Developer Intern</strong>
                        </Col>
                        <Col className="text-muted text-end" xs={4}>
                            April,2019 - July,2019
                        </Col>
                    </Row>
                    <a href="https://cookups.com.bd/">
                        Cookups Technologies Ltd. Bangladesh
                    </a>
                    <p>Worked as a full-stack web developer.</p>
                    <ul>
                        <li>Implemented promotion feature in react.</li>
                        <li>UI changes and bug fixes.</li>
                        <li>Onboarding new cooks and explain the system</li>
                    </ul>
                </ListGroupItem>
            </ListGroup>
        </Card>
    )
}
