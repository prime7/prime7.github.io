import React from "react"
import { Container } from "react-bootstrap"
import Layout from "../components/Layout"
import Front from "../components/Pages/Index/Front"
import History from "../components/Pages/Index/History"
import Testimonial from "../components/Pages/Index/Testimonial"

import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
deckDeckGoHighlightElement()

export default function Home() {
    return (
        <Layout>
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
