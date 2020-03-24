import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export const query = graphql`
query ($slug: String!) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
        frontmatter {
            title,
            date(formatString: "dddd DD MMMM YYYY")
        }
        body
    }
}
`

export default ({
    data: {
        mdx: {
            frontmatter: {
                title,
                date
            },
            body: content,
        },
    },
}) => (
        <>
            <h1>{title}</h1>
            <time>{date}</time>
            <MDXRenderer>{content}</MDXRenderer>
        </>
)
