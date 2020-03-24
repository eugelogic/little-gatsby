import React from 'react'
import useSiteMetadata from '../hooks/use-site-metadata'

const Footer = () => {
    const { author } = useSiteMetadata()
    return (
        <footer>
            <p>© 2020, Built with <a href="https://www.gatsbyjs.org/">Gatsby</a>, <a href="https://github.com/eugelogic/little-gatsby">see code on GitHub</a>.</p>
        </footer>
    )
}

export default Footer