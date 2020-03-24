import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export const query = graphql`
query ($slug: String!) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
        frontmatter { title }
        body
    }
}
`

export default ({
    data: {
        mdx: {
            frontmatter: { title },
            body: content,
        },
    },
}) => (
        <>
            <h1>{title}</h1>
            <MDXRenderer>{content}</MDXRenderer>
        </>
)
