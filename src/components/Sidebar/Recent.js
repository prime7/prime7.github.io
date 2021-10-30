import React from "react"
import Title from "./Title"
import { graphql, Link, useStaticQuery } from "gatsby"

export default function Recent() {
    const data = useStaticQuery(graphql`
        query LatestPosts {
            allMdx(
                limit: 5
                sort: { fields: frontmatter___date, order: DESC }
            ) {
                nodes {
                    frontmatter {
                        title
                        slug
                    }
                }
            }
        }
    `)
    const posts = data?.allMdx?.nodes

    return (
        <div>
            <Title title="recent" />
            <ul>
                {posts.map(post => (
                    <li key={post.frontmatter.slug}>
                        <Link
                            to={`/blog/${post.frontmatter.slug}`}
                            key={post.frontmatter.slug}
                        >
                            {post.frontmatter.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
