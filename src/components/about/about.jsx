
import React from 'react'
import Imgs from './img/imgs'
import "./main.css"

function about() {
  return (
        <div className='container'>
                <h1 className='titulo'>
                    Sobre nosotros
                </h1>
            <div className='sub-container'>
                <img className='imagen_1' src={Imgs[1].team_1} alt="" />
                <h1>
                    Hypertext Killers.
                    <p>
                        Somos un equipo de desarrollo, interesados en mostrar una nueva propuesta para captar la atencion de la niñez engeneral empezando por colegios de primaria.
                    </p>
                </h1>
               
            </div>
            <div className='sub-container'>
                <h1>
                    Roland Loáisiga Moya.
                
                    <p>
                        Develops Manager. 
                    </p>
                    <p>
                        Desarrollador web y estudiante activo
                        de la carrera de ingeniería en sistemas de informacion. 
                    </p>
                </h1>
                <img className='imagen_1 marco' src={Imgs[0].roland_1} alt="" />
            </div>
            <div className='sub-container'>
                <img className='imagen_1 marco' src={Imgs[2].yenice_1} alt="" />
                <h1>
                    Yenice Espinoza
                    <p>
                        Comunicadora.
                    </p>
                    <p>
                        Comunicadora y experta en marketing, estudiante activa de 
                        la carrera de ingeniería en sistemas de informacion.
                    </p>
                </h1>
                
            </div>
            <div className='sub-container'>
                <h1>
                    Josue Bermudez.
                    <p>
                        Desarrollador
                    </p>
                    <p>
                       desarrollador web y estudiante activo de la carrera de ingeniería en sistemas de información.
                    </p>
                </h1>
                <img className='imagen_1 marco' src={Imgs[4].josue_1} alt="" />
            </div>
            <div className='sub-container'>
                <img className='imagen_1 marco' src={Imgs[3].William_1} alt="" />
                <h1>
                    William Rodriguez.
                    <p>
                        Especialista.
                    </p>
                    <p>
                        Especialista en el area del proceso creativo y estudiante activo de ingeniería en sistemas de información.
                    </p>
                </h1>
                
            </div>
            <div className='sub-container'>
                <h1>
                    Gabriel Palacios.
                    <p>
                        Diseñador grafico.
                    </p>
                    <p>
                       Diseñador grafico, director de logistica y estudiante activo de ingeniería en sistemas de información.
                    </p>
                </h1>
                <img className='imagen_1 marco' src={Imgs[5].Gabriel_1} alt="" />
            </div>
            
        </div>
  );
}

export default about