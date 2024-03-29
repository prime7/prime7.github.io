import React from "react"
import { Container } from "react-bootstrap"
import Layout from "../components/Layout"
import Front from "../components/Pages/Index/Front"
import History from "../components/Pages/Index/History"
import Testimonial from "../components/Pages/Index/Testimonial"
import Seo from "../components/Seo"

export default function Home() {
    return (
        <Layout>
            <Seo title="Tarek Ahmed - Full-stack web developer based in Vancouver,Canada" />
            <Container className="text-center">
                <Front />
                <History />
                <hr />
                <Testimonial />
                <hr />
            </Container>
        </Layout>
    )
}
