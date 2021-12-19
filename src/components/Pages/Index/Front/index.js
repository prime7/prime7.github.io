import React from "react"
import { Col } from "react-bootstrap"
import { graphql, Link, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Front() {
    const data = useStaticQuery(graphql`
        query GetCategoriesIndexPage {
            allMdx {
                distinct(field: frontmatter___category)
            }
        }
    `)
    const categories = data?.allMdx?.distinct
    return (
        <Col md={8} lg={6} className="mx-auto py-lg-5">
            <div className="row">
                <div className="col">
                    <StaticImage
                        src="../../../../assets/banner-about.jpeg"
                        width={140}
                        height={140}
                        alt="Tarek Ahmed"
                        className="bd-placeholder-img rounded-circle"
                    />

                    <h2>Hi,I'm Tarek Ahmed!</h2>
                    <p className="text-5">
                        A full-stack Software developer with a background in
                        <b> Computer Science and Engineering</b>. I am
                        passionate about coding and solving problems through
                        code, and I am excited to work alongside other amazing
                        programmers and learn so much more! I enjoy writing
                        technical contents about{" "}
                        <span>
                            {categories.map((category, idx) => (
                                <span key={idx}>
                                    <Link to={`/category/${category}`}>
                                        {category}
                                    </Link>
                                    /
                                </span>
                            ))}
                        </span>
                    </p>
                    <p>
                        Contact me at tarek5701@gmail.com or Schedule One-To-One
                        Session for any{" "}
                        <a href="https://calendly.com/tarek5701/30min">
                            {" "}
                            discussion
                        </a>
                    </p>
                </div>
            </div>
        </Col>
    )
}
