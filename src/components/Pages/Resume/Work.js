import React from "react"
import { Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap"
import config from "../../../config"

export default function Work() {
    return (
        <Card body className="mb-4">
            <Card.Title>Work Experience</Card.Title>
            <hr />
            <ListGroup variant="flush">
                {config.work.map(item => (
                    <ListGroupItem variant="flush">
                        <Row>
                            <Col>
                                <strong>{item.title}</strong>
                                <span> &#8226; </span>
                                <a href={item.link}>{item.company}</a>
                            </Col>
                            <Col className="text-muted text-end" xs={4}>
                                {item.date}
                            </Col>
                        </Row>

                        <p>{item.note}</p>
                        {item.features && (
                            <ul>
                                {item.features.map(f => (
                                    <li>{f}</li>
                                ))}
                            </ul>
                        )}
                    </ListGroupItem>
                ))}
            </ListGroup>
        </Card>
    )
}
