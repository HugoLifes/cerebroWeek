import React from 'react'
import Foto from '../images/foto.jpg'
import Layout from '../components/layout'
import * as Style from './style/homeStyle.module.scss'
const BlogPage = () => {
    return(
        <Layout>
        <h1 className={Style.title} >Convocatoria</h1>
        <p className={Style.text} >Cartel de divulgacion</p>
        <center>
        <img className={Style.logo} alt="cartel"src={Foto}/>
        </center>
        </Layout>
    )

    
} 

export default BlogPage
