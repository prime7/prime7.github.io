import React from "react"
import { Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap"
import config from "../../../config"

export default function Education() {
    return (
        <Card body className="mb-4">
            <Card.Title>Education</Card.Title>
            <hr className="m-0 p-0" />
            {config.education.map(item => (
                <ListGroup variant="flush">
                    <ListGroupItem as="div">
                        <Row>
                            <Col>
                                <strong>{item.degree}</strong>
                            </Col>
                            <Col className="text-muted text-end" xs={4}>
                                {item.date}
                            </Col>
                        </Row>
                        <a href={item.institution.link}>
                            {item.institution.name}
                        </a>
                        <p className="mb-0 pb-0">{item.courses}</p>
                    </ListGroupItem>
                </ListGroup>
            ))}
        </Card>
    )
}
