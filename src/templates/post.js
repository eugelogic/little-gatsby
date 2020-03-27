import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

export const query = graphql`
query ($slug: String!) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
        frontmatter {
            title,
            date(formatString: "dddd DD MMMM YYYY")
            tags
        }
        body
    }
}
`

const Post = props => {
    const {
        data: {
            mdx: {
                frontmatter: {
                    title,
                    date,
                    tags
                },
                body: content,
            }
        }
    } = props

return (
    <Layout>
        {tags && tags.length ? (
        <ul className="tags-list">
        {tags.map(tag => (
            <li>{tag}</li>
        ))}
        </ul>
        ) : null}
        <h1>{title}</h1>
        <time>{date}</time>
        <MDXRenderer>{content}</MDXRenderer>
    </Layout >
    )
}

export default Post