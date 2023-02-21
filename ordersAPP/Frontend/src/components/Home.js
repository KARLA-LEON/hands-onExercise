import React from 'react'
import "./styles/home.css"
import expedientes from "./images/expedientes.jpg"
import Login from "./Log In/Login";

import { Link } from 'react-router-dom';

function Home() {

  return (
    <div>
    <div className="contenedors">
        <div className="contenidos">
            <h1 className='titulars'>Bienvenidos.</h1>
            <h2 className='subtitulos'>Lorem Ipsum</h2>
            <p className='descripcions'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link to='/Login' className='botons'>
          <li>Ingresar</li>
        </Link>
        </div>
        <div className="imagens">
            <img src={expedientes}/>
        </div>
    </div>

    <div className='encabezado'><h2>Más Visitados</h2></div>

    <div className="contenedor1">
        <div className="item item-1"></div>
        <div className="item item-2"></div>
        <div className="item item-3"></div>
    </div>

    <div className="contenedor2s">
        <div className="items items-1"><h3>Historial</h3></div>
        <div className="items items-2"><h3>Clientes</h3></div>
        <div className="items items-3"><h3>Ventas</h3></div>
    </div>

    <div className="contenedor3">
        <div className="itemss itemss-1"><p className='masvisitadodesc'>Historial de órdenes</p></div>
        <div className="itemss itemss-2"><p className='masvisitadodesc'>Crear clientes</p></div>
        <div className="itemss itemss-3"><p className='masvisitadodesc'>Productos</p></div>
    </div>
</div>
  )
}

export default Home