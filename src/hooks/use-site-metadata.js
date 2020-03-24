import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
    const data = useStaticQuery(graphql`
    {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author {
              name
              bio
              github
              twitter
            }
          }
        }
      }
    `)
    return data.site.siteMetadata

}

export default useSiteMetadata