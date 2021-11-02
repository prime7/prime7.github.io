import React from "react"
import { Card, Container, Row, Col } from "react-bootstrap"
import {
    SiDjango,
    SiScikitlearn,
    SiReact,
    SiGatsby,
    SiDocker,
    SiAmazonaws,
    SiPostgresql,
    SiAmazons3,
    SiPowerbi,
    SiTableau,
    SiPandas,
    SiGit,
} from "react-icons/si"
import * as styles from "./Languages.module.css"

export default function Languages() {
    return (
        <React.Fragment>
            <Card body>
                <Container>
                    <Row className={styles.row}>
                        <Col>
                            <SiDjango
                                className={styles.icon}
                                style={{ color: "green" }}
                            />
                            <p>Django</p>
                        </Col>
                        <Col>
                            <SiReact
                                className={styles.icon}
                                style={{ color: "blue" }}
                            />
                            <p>React.js</p>
                        </Col>
                        <Col>
                            <SiReact
                                className={styles.icon}
                                style={{ color: "blue" }}
                            />
                            <p>React Native</p>
                        </Col>

                        <Col>
                            <SiGatsby
                                className={styles.icon}
                                style={{ color: "purple" }}
                            />
                            <p>Gatsby</p>
                        </Col>
                    </Row>
                    <hr />
                    <Row className={styles.row}>
                        <Col>
                            <SiGit
                                className={styles.icon}
                                style={{ color: "grey" }}
                            />
                            <p>Git</p>
                        </Col>
                        <Col>
                            <SiDocker
                                className={styles.icon}
                                style={{ color: "skyblue" }}
                            />
                            <p>Docker</p>
                        </Col>
                        <Col>
                            <SiAmazonaws
                                className={styles.icon}
                                style={{ color: "black" }}
                            />
                            <p>AWS</p>
                        </Col>
                        <Col>
                            <SiPostgresql
                                className={styles.icon}
                                style={{
                                    color: "darkblue",
                                }}
                            />
                            <p>Postgresql</p>
                        </Col>
                        <Col>
                            <SiAmazons3
                                className={styles.icon}
                                style={{
                                    color: "darkblue",
                                }}
                            />
                            <p>AWS S3</p>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            <SiScikitlearn
                                className={styles.icon}
                                style={{ color: "orange" }}
                            />
                            <p>SKLearn</p>
                        </Col>
                        <Col>
                            <SiTableau
                                className={styles.icon}
                                style={{
                                    color: "purple",
                                }}
                            />
                            <p>Tableau</p>
                        </Col>
                        <Col>
                            <SiPowerbi
                                className={styles.icon}
                                style={{
                                    color: "yellow",
                                }}
                            />
                            <p>PowerBI</p>
                        </Col>
                        <Col>
                            <SiPandas
                                className={styles.icon}
                                style={{
                                    color: "orange",
                                }}
                            />
                            <p>Pandas</p>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </React.Fragment>
    )
}
