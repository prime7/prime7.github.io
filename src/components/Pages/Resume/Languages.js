import React from "react"
import { Card, Col, Row } from "react-bootstrap"

export default function Languages() {
    return (
        <React.Fragment>
            <Card body className="mb-4">
                <Row>
                    <Col>
                        <h5>Framework</h5>
                        <ul>
                            <li>
                                <strong>Django</strong>
                            </li>
                            <li>
                                <strong>React</strong>
                            </li>
                            <li>React-Native</li>
                            <li>Gatsby</li>
                            <li>Scikit Learn</li>
                        </ul>
                    </Col>
                    <Col>
                        <h5>Others</h5>
                        <ul>
                            <li>Docker</li>
                            <li>AWS</li>
                            <li>RDS</li>
                            <li>Postgresql</li>
                            <li>S3</li>
                            <li>Redis</li>
                        </ul>
                    </Col>
                </Row>
            </Card>
            <Card body>
                <h5>Tools used</h5>
                <ul>
                    <li>
                        <strong>Tableau</strong>
                    </li>
                    <li>PowerBI</li>
                    <li>R-Studio</li>
                </ul>
            </Card>
        </React.Fragment>
    )
}
