import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

import '../styles/global.css'

export const query = graphql`
 {
    allMdx(sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        id
        frontmatter {
          tags
          title
          slug
          date(formatString: "dddd DD MMMM YYYY")
          excerpt
        }
      }
    }
  }
`

const BlogIndex = ({ data }) => {
    const posts = data.allMdx.nodes
    return (
        <Layout>
            {posts.map(post => (
                <article key={post.id}>
                    {post.frontmatter.tags && post.frontmatter.tags.length ? (
                    <ul className="tags-list">
                    {post.frontmatter.tags.map(tag => (
                        <li key={tag}>{tag}</li>
                    ))}
                    </ul>
                    ) : null}
                    <h2>
                        <Link to={`/blog/${post.frontmatter.slug}`}>{post.frontmatter.title}</Link>
                    </h2>
                    <time>{post.frontmatter.date}</time>
                    <p>{post.frontmatter.excerpt}</p>
                </article>
            ))}
        </Layout>
    )
}

export default BlogIndex