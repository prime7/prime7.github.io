import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Post from "./Post"

export default function Posts({ posts = null, title = "Posts" }) {
    return (
        <Container>
            <h3>{title}</h3>
            <ul className="p-0">
                <Row>
                    {posts === null ? (
                        <h3>No Posts Available</h3>
                    ) : (
                        posts.map(post => (
                            <Col
                                xs={12}
                                md={6}
                                lg={4}
                                key={post.slug}
                                className="mb-3"
                            >
                                <Post post={post} title={title} />
                            </Col>
                        ))
                    )}
                </Row>
            </ul>
        </Container>
    )
}
