const path = require('path')

exports.createPages = async ({
    graphql,
    actions: { createPage },
    reporter
}) => {
    const postsQuery = await graphql(`
        query {
            allMdx {
                nodes {
                    id
                    frontmatter {
                    slug
                    }
                }
            }
        }
    `)

    if (postsQuery.errors) {
        reporter.panicOnBuild(`Unable to create posts.`)
        return
    }

    const posts = postsQuery.data.allMdx.nodes
    posts.forEach(post => {
        createPage({
            path: `/blog/${post.frontmatter.slug}`,
            component: path.resolve(`./src/templates/post.js`),
            context: {
                slug: post.frontmatter.slug
            }
        })
    })
}