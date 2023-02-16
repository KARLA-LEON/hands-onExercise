import React from 'react'
import "./styles/HistorialOrdenes.css"
import expedientes from "./images/HistorialOrd.JPG"


const data = [
  {num: '######', product: 'Lorem Ipsum', client: 'Lorem Ipsum', date: '##/##/####', action: 'Eliminar'},
  {num: '######', product: 'Lorem Ipsum', client: 'Lorem Ipsum', date: '##/##/####',  action: 'Eliminar'},
  {num: '######', product: 'Lorem Ipsum', client: 'Lorem Ipsum', date: '##/##/####',  action: 'Eliminar'},
];



function HistorialdeOrdenes() {
  return (
  <div>
    <div className="contenedor">
      <h1 className="titulo">Historial de Órdenes</h1>
    </div>

    <div className="contenedor2">
      <div className="contenido">
          <h1 className='titular'>Descripción del Apartado Historial</h1>
          <p className='descripcion'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
        <div className="imagen">
          <img src={expedientes}/>
        </div>
    </div> 
    <div className='contenedor3'>
        <form>
          <input type="text" placeholder="Número de Orden a Buscar"/>
          <button type="submit">
            Buscar
          </button>
        </form>
      </div>

      <div style={{ width: '50%', margin: '0 auto' }}>
      <table>
        <thead>
          <tr>
            <th>Número de Órden</th>
            <th>Producto/Servicio</th>
            <th>Cliente</th>
            <th>Fecha de Entrega</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.num}</td>
              <td>{item.product}</td>
              <td>{item.client}</td>
              <td>{item.date}</td>
              <td>
                <button className='table button'>{item.action}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  </div>
  )
}

export default HistorialdeOrdenes