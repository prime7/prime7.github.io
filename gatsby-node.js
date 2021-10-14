exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
        query {
            allMdx(sort: { fields: frontmatter___date, order: DESC }) {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
            categories: allMdx {
                distinct(field: frontmatter___category)
            }
        }
    `)
    // Create Blog posts
    data.allMdx.nodes.forEach(({ frontmatter: { slug } }) => {
        actions.createPage({
            path: `/posts/${slug}`,
            component: require.resolve("./src/templates/post.js"),
            context: {
                slug,
            },
        })
    })
    // Create Category pages
    data.categories.distinct.forEach(category => {
        actions.createPage({
            path: `/category/${category}`,
            component: require.resolve("./src/templates/category.js"),
            context: {
                category,
            },
        })
    })
}
