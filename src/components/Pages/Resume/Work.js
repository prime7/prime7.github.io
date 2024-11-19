import React from "react"
import { Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap"
import config from "../../../config"



export default function Work() {
    return (
        <Card body className="mb-4">
            <Card.Title>Work Experience</Card.Title>
            <hr />
            <ListGroup variant="flush">
                {config.work.map((item, index) => (
                    <ListGroupItem variant="flush" key={index}>
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

                        <div>
                            {formatNote(item.note)}
                        </div>
                        
                        {item.features && (
                            <ul >
                                {item.features.map((f, i) => (
                                    <li key={i}>{f}</li>
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