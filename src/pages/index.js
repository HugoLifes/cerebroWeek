import React from "react"
import Layout from '../components/layout' 
import * as  Style from './style/homeStyle.module.scss'
import BrainVideo from '../images/brain.mp4'


//Home page

function App(){
    return(
        
        <Layout>
        <div className={Style.div} >
            <h2 className={Style.title} > CerebroWeek 2020 </h2>
            <p className={Style.text}> Súmate al marco de la celebración internacional sobre el avance,
             promoción y beneficio de la investigación de la ciencia del cerebro.</p>
             <div className={Style.blankSpace}></div>
             <center>
            <section className={Style.video}>
                <video controls>
                    <source src={BrainVideo} type="video/mp4"/>
                    <track src="subtitulos.vtt" kind="captions" srclang="es" label="Español"></track>
                </video>
            </section>
            </center>

        </div>
        
        </Layout>
        
    )
}

export default App; 
