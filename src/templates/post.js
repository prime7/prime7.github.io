import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Container, Row, Col } from "react-bootstrap"
import Sidebar from "../components/Sidebar/Sidebar"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/Seo"

export const query = graphql`
    query GetPost($slug: String) {
        mdx(frontmatter: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date(fromNow: true)
                images {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                banner {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
            body
        }
    }
`
const posts = ({ data }) => {
    const {
        mdx: {
            frontmatter: { title, date, images, banner },
            body,
        },
    } = data
    return (
        <Layout>
            <Seo title={`${title}  | Tarek Ahmed`} />
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <GatsbyImage
                            image={getImage(banner)}
                            alt={title}
                            className="banner-img justify-content-center"
                        />
                        <h3>{title}</h3>
                        {date}
                        <hr />
                        <MDXRenderer images={images}>{body}</MDXRenderer>
                    </Col>
                    <Col xs={12} md={4}>
                        <Sidebar />
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default posts
