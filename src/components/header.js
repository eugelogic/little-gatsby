import React from 'react'
import { Link } from 'gatsby'
import useSiteMetadata from '../hooks/use-site-metadata'

const Header = () => {
    const { title, description } = useSiteMetadata()
    return (
        <header>
            <h1><Link to={`/`}>{title}</Link></h1>
            <em>{description}</em>
        </header>
)}

export default Header