import React from 'react';
import Navbar from './components/navbar';
import Body from './components/body';
import Fooder from './components/fooder';
import Carrusel from './components/carrusel/carrusel';



import "./Styles/main.css";


function App() {
  return (
        <>
            <Navbar />
            <Body />
            <Carrusel />
            <Fooder />
        </>
  );
}

export default App;