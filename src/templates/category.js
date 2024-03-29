import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Posts from "../components/Posts"
import Seo from "../components/Seo"

export const query = graphql`
    query GetCategoryPosts($category: String) {
        categories: allMdx(
            filter: { frontmatter: { category: { eq: $category } } }
        ) {
            nodes {
                frontmatter {
                    title
                    slug
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
            }
        }
    }
`
export default function Category(props) {
    const {
        data: {
            categories: { nodes: posts },
        },
    } = props
    const {
        pageContext: { category },
    } = props
    return (
        <Layout>
            <Seo title={`Posts on ${category} | Tarek Ahmed`} />
            <Posts posts={posts} title={`Category - ${category}`} />
        </Layout>
    )
}
