import React from 'react'
import imagenes from './image/imagenes.js'
import "./css/indexs.css"

function carrusel() {
  return (
    <div className='padre'>
        <body>
            <h2>Somos</h2>
            <h2>Disaster Alert</h2>
            <div className="content-all">
                <div className="content-carrousel">
                    <figure><img src={imagenes[13].Team} alt=""/></figure>
                    <figure><img src={imagenes[1].img_2} alt=""/></figure>
                    <figure><img src={imagenes[2].img_3} alt=""/></figure>
                    <figure><img src={imagenes[3].img_4} alt=''/></figure>
                    <figure><img src={imagenes[4].img_5} alt=""/></figure>
                    <figure><img src={imagenes[5].img_6} alt=""/></figure>
                    <figure><img src={imagenes[6].img_7} alt=""/></figure>
                    <figure><img src={imagenes[7].img_8} alt=""/></figure>
                    <figure><img src={imagenes[8].img_9} alt=""/></figure>
                    <figure><img src={imagenes[10].img_10} alt=""/></figure>
                </div> 
            </div>  
        </body>
    </div>
  )
}

export default carrusel