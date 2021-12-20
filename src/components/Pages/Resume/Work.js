import React from "react"
import { Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap"
import config from "../../../config"

export default function Work() {
    return (
        <Card body className="mb-4">
            <Card.Title>Work Experience</Card.Title>
            <hr className="m-0 p-0" />
            <ListGroup variant="flush">
                {config.work.map(item => (
                    <ListGroupItem variant="flush">
                        <Row>
                            <Col>
                                <strong>{item.title}</strong>
                            </Col>
                            <Col className="text-muted text-end" xs={4}>
                                {item.date}
                            </Col>
                        </Row>
                        <a href={item.link}>{item.company}</a>
                        <p>{item.note}</p>
                        <ul>
                            {item.features.map(f => (
                                <li>{f}</li>
                            ))}
                        </ul>
                    </ListGroupItem>
                ))}
            </ListGroup>
        </Card>
    )
}
