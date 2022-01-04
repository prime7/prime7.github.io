module.exports = {
    siteMetadata: {
        title: "Tarek Ahmed",
        description: "I am full-stack web developer based in Vancuver,Canada.",
        author: "toptechschool",
        twitterUsername: "@toptechschool",
    },
    plugins: [
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: `${__dirname}/src/pages/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: `${__dirname}/src/assets`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "posts",
                path: `${__dirname}/src/posts/`,
            },
        },
        `gatsby-plugin-image`,
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-highlight-code`,
                        options: {
                            theme: "vscode",
                            lineNumbers: true,
                        },
                    },
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 800,
                        },
                    },
                ],
            },
        },
        {
            resolve: "gatsby-plugin-google-fonts",
            options: {
                fonts: ["roboto mono", "muli:400,400i,700,700i"],
                display: "swap",
            },
        },
    ],
}
