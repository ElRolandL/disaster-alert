import { useRef } from "react";
import {FaBars, FaTimes} from"react-icons/fa"
import "../Styles/main.css";
import tornado from "../assets/img/tornado.png"
import About from "./about/about";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom"

function Navbar() {
  const navRef = useRef();

  const showNavbar = () =>{
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <Router>
        <div className="divpa">
          <header>
            <img src={tornado} alt="logo" className="logo"/>
            <h1 className="texto"> Disaster alert</h1>
            <nav ref={navRef}>
              <Link to="/#">Home</Link>
              <Link to="/About">Sobre nosotros</Link>
              <Link to="/#">Contactanos</Link>
              <Link to="/#">Categorias</Link>
              <button
                className="nav-btn nav-close-btn" 
                onClick={showNavbar}>
                <FaTimes/>
              </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
              <FaBars/>
            </button>
          </header>
        </div>
        <Routes>
            <Route path="/About" element={<About/>}>
            </Route>
        </Routes>
    </Router>
  );
}

export default Navbar;