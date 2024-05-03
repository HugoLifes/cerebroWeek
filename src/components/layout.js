import React from 'react'
import Header from './header'
import Footer from './Footer'
import * as  hl from './style/layout.module.scss'

// Margen y Diseño de la pagina

const Layout = (props) => {
    return(
        <section className={hl.siteWrapper}>
        <div className={hl.container}>
            <div className={hl.content}>
                <Header />
                {props.children}
                <Footer/>
            </div>
        </div>
        </section>
        
    )
}

export default Layout