import React from 'react'

function Juego_1() {
  return (
    <div>
        <body>
    
            <div id="tablero-de-juego">
           
                <div id="encabezado">
                    <a id="ayuda" className="btn btn-primary" onclick="ayuda()">
                        ayuda
                    </a>
                    <br/>         
                    <span id="pregunta">Aqui va la pregunta</span>
                    <br/>
    
                    <img id="imagen"src="image/img3.jpg" alt="image" style="width: 90%; height:200px; object-fit: contain;"/>
                </div>

                <div className="opcion"id="opcion1" onclick="selecionaropcion(0)">
                    opcion1
                </div>

                <div className="opcion" id="opcion2" onclick="selecionaropcion(1)">
                    opcion2   
                </div>

                <div classname="opcion"id="opcion3" onclick="selecionaropcion(2)">
                    opcion3
                </div>
       
                <div className="opcion"id="opcion4" onclick="selecionaropcion(3)">
                    opcion4
                </div>
            </div>
            <script   src="main.js"></script>
            <script defer src="index.js"></script>
        </body>
    </div>
  )
}

export default Juego_1