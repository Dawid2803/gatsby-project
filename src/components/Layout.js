import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import "../styles/index.scss"
import { container, content } from "./Layout.module.scss"

function Layout(props) {
    return (
        <div className={container}>
            <div className={ content }>
                <Header />
                {props.children}
             </div>
            <Footer />
        </div>
    )
}

export default Layout
