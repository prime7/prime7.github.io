import React from "react"
import Layout from "../components/Layout"
import { useStaticQuery, graphql } from "gatsby"
import BlogPosts from "../components/Posts"

export default function Blog() {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allMdx {
                nodes {
                    frontmatter {
                        slug
                        title
                        date
                        banner {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
    `)
    const posts = data.allMdx.nodes
    return (
        <Layout>
            <BlogPosts posts={posts} />
        </Layout>
    )
}
