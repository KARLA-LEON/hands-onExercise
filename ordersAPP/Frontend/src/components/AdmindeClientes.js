import React from 'react'
import "./styles/AdminClientes.css"


const data = [
  {name: 'Lorem Ipsum', last: 'Lorem Ipsum', mail: 'lorem_ipsum@gmail.com', num: '######',id: 'LOIM01'},
  {name: 'Lorem Ipsum', last: 'Lorem Ipsum', mail: 'lorem_ipsum@gmail.com', num: '######',id: 'LOIM01'},
  {name: 'Lorem Ipsum', last: 'Lorem Ipsum', mail: 'lorem_ipsum@gmail.com', num: '######',id: 'LOIM01'},
];



function AdmindeClientes() {
  return (
  <div>
    <div className="contenedor">
      <h1 className="titulo">Administrador de Clientes</h1>
    </div>

    
    <div className="contenedor">
      <h2 className="titulo">Registro de Nuevo Cliente</h2>
    </div>

    <div className="contenedor3">
   
    <form>
     <div>
        <label htmlFor=''>Nombre:    </label>
        <input type="text" placeholder="Nombre"></input>
      
        </div><br />

    <div>
        <label htmlFor=''>Apellidos:   </label>
        <input type="text" placeholder="Apellidos"></input>
     
     </div><br />
   
     <div>
        <label htmlFor=''>Correo:     </label>
        <input type="text" placeholder="Correo"></input>
       
     </div><br />

     <div>
        <label htmlFor=''>Telefono:       </label>
        <input type="text" placeholder="Telefono"></input>
       
     </div><br />

     <button className='table button' type="submit"><h4  >Registrar</h4></button>
			</form>
    </div> 


 
      <h2 className="titulo">Clientes Registrados</h2>

    <div className='contenedor3'>
        <form2>
          <input type="text" placeholder="Nombre de Cliente a Buscar"/>
          <button type="submit">
            Buscar
          </button>
        </form2>
      </div>

      <div style={{ width: '50%', margin: '0 auto' }}>
      <table>
        <thead>
          <tr>
            <th>NOMBRE</th>
            <th>APELLIDO</th>
            <th>CORREO</th>
            <th>TELEFONO</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
      
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.last}</td>
              <td>{item.mail}</td>
              <td>{item.num}</td>
              <td>
              {item.id}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  </div>
  )
}

export default AdmindeClientes
