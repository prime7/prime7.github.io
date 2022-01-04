import React from "react"
import Title from "./Title"
import { graphql, Link, useStaticQuery } from "gatsby"

export default function Category() {
    const data = useStaticQuery(graphql`
        query GetCategories {
            allMdx {
                distinct(field: frontmatter___category)
            }
        }
    `)
    const categories = data?.allMdx?.distinct

    return (
        <div>
            <Title title="category" />
            <ul>
                {categories.map((category, idx) => (
                    <li key={idx}>
                        <Link
                            to={`/category/${category}`}
                            className="text-capitalize"
                        >
                            {category}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
