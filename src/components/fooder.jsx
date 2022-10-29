import React from 'react'

import "../Styles/footer.css";
import tornado from "../assets/img/tornado.png"

function fooder() {
  return (
    <div>
        <footer className="pie-pagina">
        <div className="grupo1">
          <div className="box">
            <figure>
              <a href="/#"> <img src={tornado} alt="Island srtore" className="logo"/></a>
            </figure>
          </div>
          <div className="box">
            <h2>SOBRE NOSOTROS</h2>
            <p> 
                Somos un equipo de desarrollo, interesados en mostrar una nueva
                propuesta para captar la atencion de la niñez engeneral empezando
                por colegios de primaria. 
            </p>
            
          </div>
          <div className="box">
            <h2> SIGUENOS </h2>
            <div class="red-social">
              <a href="/#" className="fa fa-facebook"> </a>
              <a href="/#" className="fa fa-instagram"> </a>
              <a href="/#" className="fa fa-twitter"> </a>
              <a href="/#" className="fa fa-whatsapp"> </a>
            </div>
          </div>
        </div>
        <div className="grupo2">
          <small>&copy; 2022 <b>Hypertext Killers</b> -Todos los derechos reservados.</small>
        </div>
      </footer>
    </div>
  );
}
export default fooder;