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
                            <Col xs={3} className="text-end">
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
                        <div>
                            {formatNote(item.note)}
                        </div>
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

function formatNote(note) {
    return note
        .trim()
        .split('\n')
        .map(line => line.trim())
        .filter(line => line !== '')
        .map((line, index) => {
            if (line.startsWith('•')) {
                return (
                    <li key={index}>
                        {line.substring(1).trim()}
                    </li>
                );
            }
            return <p key={index}>{line}</p>;
        });
}