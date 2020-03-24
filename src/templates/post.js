import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Header from '../components/header'
import Footer from '../components/footer'

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

export default ({
    data: {
        mdx: {
            frontmatter: {
                title,
                date,
                tags
            },
            body: content,
        },
    },
}) => (
        <>
            <Header />
            {tags && tags.length ? (
            <ul>
            {tags.map(tag => (
                <li key={tag}>{tag}</li>
            ))}
            </ul>
            ) : null}
            <h1>{title}</h1>
            <time>{date}</time>
            <MDXRenderer>{content}</MDXRenderer>
            <Footer />
        </>
)
