import React from 'react'
import * as Style from './style/footer.module.scss'

const Footer = () =>{
    
    return(
        <footer className={Style.title}>
            <div className={Style.blankSpace}></div>
            <p> Created by HectorHugo © 2020 </p>
        </footer>
    )
}

export default Footer