import React, { useState } from 'react'
import{BrowserRouter as Router,Link} from "react-router-dom";
import Footer from './footer/Footer';
import "./styles/navbar.css";

function Navbarcomponent() {
    const [isMobile, setIsMobile]= useState(false);
  return (
  
    <nav className='navbarx'>
      <h2 className='logo'>Logo Nombre Empresa</h2>
      <ul className={isMobile?"nav-links-mobile":"nav-links"}
        onClick={() => setIsMobile(false)}
      >
       
        <Link to='/' className='botones'>
          <li>Inicio</li>
        </Link>
        <Link to='/AdministraciondeOrdenes' className='botones'>
          <li>Administración de Órdenes</li>
        </Link>
        <Link to='/paneldecontrol' className='botones'>
          <li>Panel de control</li>
        </Link>
        <Link to='/historialordenes' className='botones'>
          <li>Historial de Órdenes</li>
        </Link>
        <Link to='/AdministraciondeClientes' className='botones'>
          <li>Administración de Clientes</li>
        </Link>
        <Link to='/Ventas' className='botones'>
          <li>Ventas</li>
        </Link>
        <Link to='/Departamentos' className='botones'>
          <li>Departamentos</li>
        </Link>
       
      </ul>
      <button className='mobile-menu-icon'
        onClick={()=>setIsMobile(!isMobile)}
      >
        {isMobile ? (<i className='fas fa-times'></i>) : ( <i className='fas fa-bars'></i>)}
      </button>
    </nav>
    
    
  )
}

export default Navbarcomponent