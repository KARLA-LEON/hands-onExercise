import React from 'react';
import "./PanelControl.css"

const data = [
  {num: '######', product: 'Lorem Ipsum', client: 'Lorem Ipsum', proceso: 'Lorem Ipsum', date: '##/##/####'},
  {num: '######', product: 'Lorem Ipsum', client: 'Lorem Ipsum', proceso: 'Lorem Ipsum', date: '##/##/####'},
  {num: '######', product: 'Lorem Ipsum', client: 'Lorem Ipsum', proceso: 'Lorem Ipsum', date: '##/##/####'},
  {num: '######', product: 'Lorem Ipsum', client: 'Lorem Ipsum', proceso: 'Lorem Ipsum', date: '##/##/####'},
];

function PaneldeControl(){
return(
  <div>
    <div className="contenedor">
      <h1 className="titulo">Panel de Control</h1>
    </div>

    <div className='cont1'>
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
            <th>Proceso Actual</th>
            <th>Fecha de Entrega</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.num}</td>
              <td>{item.product}</td>
              <td>{item.client}</td>
              <td>{item.proceso}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  </div>

  


);


}

export default PaneldeControl