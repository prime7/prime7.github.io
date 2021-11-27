import React from "react"
import { Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap"

export default function Projects() {
    return (
        <Card body className="mb-4">
            <Card.Title>Projects</Card.Title>
            <hr className="m-0 p-0" />
            <ListGroup variant="flush">
                <ListGroupItem>
                    <Row>
                        <Col>
                            <strong>Gatsby Portfolio Site(This Site)</strong>
                        </Col>
                        <Col xs={3}>
                            <a
                                target="_blank"
                                href="https://prime7.github.io"
                                rel="noreferrer"
                            >
                                Demo
                            </a>
                            <span> / </span>
                            <a
                                target="_blank"
                                href="https://prime7.github.io"
                                rel="noreferrer"
                            >
                                Demo
                            </a>
                        </Col>
                    </Row>
                    <ul>
                        <li>
                            This is my portfolio site built with Gatsby and
                            Markdown
                        </li>
                        I have used
                        <li>React.js</li>
                        <li>Markdown</li>
                        <li>Css Modules and React Bootstrap</li>
                    </ul>
                </ListGroupItem>
                <ListGroupItem>
                    <Row>
                        <Col>
                            <strong>Autism Speech Therapy Game</strong>{" "}
                        </Col>
                        <Col xs={3}>
                            <a
                                target="_blank"
                                href="https://play.google.com/store/apps/details?id=com.zottz.zspeech"
                                rel="noreferrer"
                            >
                                Demo
                            </a>
                        </Col>
                    </Row>
                    <ul>
                        <li>It is a simple game built with Stencyl.</li>
                        <li>
                            Helps autistic children understanding sequencing by
                            playing a game.
                        </li>
                    </ul>
                </ListGroupItem>
                <ListGroupItem>
                    <Row>
                        <Col>
                            <strong>Simple Calculator in React Native</strong>
                        </Col>
                        <Col xs={3}>
                            <a
                                target="_blank"
                                href="https://github.com/prime7/react_native_calculator"
                                rel="noreferrer"
                            >
                                Source
                            </a>
                        </Col>
                    </Row>
                    <ul>
                        <li>It is a calculator app built with React Native</li>
                    </ul>
                </ListGroupItem>
                <ListGroupItem>
                    <Row>
                        <Col>
                            <strong>React Light Flipper</strong>
                        </Col>
                        <Col xs={3}>
                            <a
                                target="_blank"
                                href="https://react-light-flipper.netlify.app/"
                                rel="noreferrer"
                            >
                                Demo
                            </a>
                            <span> / </span>
                            <a
                                target="_blank"
                                href="https://github.com/prime7/react-light-flipper"
                                rel="noreferrer"
                            >
                                Source
                            </a>
                        </Col>
                    </Row>
                    <ul>
                        <li>This project has been made using react.js</li>
                        <li>Added css animations</li>
                    </ul>
                </ListGroupItem>
            </ListGroup>
        </Card>
    )
}
