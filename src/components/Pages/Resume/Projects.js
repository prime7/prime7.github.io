import React from "react"
import { Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap"
import config from "../../../config"

export default function Projects() {
    return (
        <Card body className="mb-4">
            <Card.Title>Projects</Card.Title>
            <hr className="m-0 p-0" />
            <ListGroup variant="flush">
                {config.projects.map(item => (
                    <ListGroupItem>
                        <Row>
                            <Col>
                                <strong>{item.title}</strong>
                            </Col>
                            <Col xs={3}>
                                {item.demo && (
                                    <a
                                        target="_blank"
                                        href={item.demo}
                                        rel="noreferrer"
                                    >
                                        Demo
                                    </a>
                                )}
                                {item.demo && item.source && <span> / </span>}
                                {item.source && (
                                    <a
                                        target="_blank"
                                        href={item.source}
                                        rel="noreferrer"
                                    >
                                        Source
                                    </a>
                                )}
                            </Col>
                        </Row>
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
