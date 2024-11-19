import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Layout from "../components/Layout"
import Work from "../components/Pages/Resume/Work"
import Education from "../components/Pages/Resume/Education"
import SocialLinks from "../components/Pages/Resume/SocialLinks"
import Languages from "../components/Pages/Resume/Languages"
import Projects from "../components/Pages/Resume/Projects"

export default function Resume() {
    return (
        <Layout>
            <Container style={{ fontSize: ".8rem" }}>
                <Row>
                    <Col md={8} sm={12}>
                        <Work />
                        <Education />
                        <Projects />
                    </Col>
                    <Col md={4} sm={12}>
                        <SocialLinks />
                        <Languages />
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}
