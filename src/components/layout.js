import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

import '../styles/global.css'

const Layout = ({ children }) => {
    return (
        <div className="container">
            <Header />
                <div className="content">{children}</div>
            <Footer />
        </div>
    )
}

export default Layout