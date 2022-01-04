import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./Post.module.css"
import { Card } from "react-bootstrap"

export default function Post({ post, title }) {
    return (
        <Card>
            <GatsbyImage
                image={getImage(post.frontmatter.banner)}
                alt={title}
                className={styles.img}
            />
            <Card.Body>
                <Card.Title className="text-capitalize">
                    {post.frontmatter.title}
                </Card.Title>

                <Link key={post.id} to={`/blog/${post.frontmatter.slug}`}>
                    See Detail
                </Link>
            </Card.Body>
        </Card>
    )
}
