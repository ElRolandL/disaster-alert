import React, { Component } from 'react'
import Img2 from "./image/img3.jpg"
import "./index.css"

export default class Juego_1 extends Component {
  render() {
    return (
      <div className='body_j'>
        <div id="tablero-de-juego">
           
            <div id="encabezado">
                <a id="ayuda" className="btn btn-primary" onClick="ayuda()"> ayuda </a>
                
                <br/>
              
                <span id="pregunta">Aqui va la pregunta</span>
                <br/>
        
                <img id="imagen" src= {Img2} alt="image" style="width: 90%; height: 200px; object-fit: contain;" />
            </div>
    
            <div className="opcion"id="opcion1" onclick="selecionaropcion(0)">
                opcion1
            </div>
    
            <div className="opcion" id="opcion2" onclick="selecionaropcion(1)">
                opcion2   
            </div>
    
            <div className="opcion"id="opcion3" onclick="selecionaropcion(2)">
                opcion3
            </div>
           
            <div className="opcion"id="opcion4" onclick="selecionaropcion(3)">
                opcion4
            </div>
        </div>
      </div>
    )
  }
}