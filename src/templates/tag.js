import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const Tag = ({ data }) => {
    return (
        <Layout>
            <h1>Tag: {data.allMdx.nodes.frontmatter.title}</h1>
            <p>Add list of posts with that tag here ...</p>
        </Layout>
    )
}

export default Tag

export const pageQuery = graphql`
    query GET_TAG($tag: String) {
        allMdx( filter: { frontmatter: { tags: { eq: $tag } } } ) {
            nodes {
                id
                frontmatter {
                    title
                    slug
                }
            }
        }
    }
`
