import React from "react"
import { Col } from "react-bootstrap"

export default function Front() {
    return (
        <Col md={8} lg={6} className="mx-auto py-lg-5">
            <h1>Welcome</h1>
            <p className="lead text-muted">
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don’t simply skip over it entirely.
            </p>
        </Col>
    )
}
