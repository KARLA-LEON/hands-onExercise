import React from 'react'
import "./styles/Ventas.css"

const data = [
  {name: 'Lorem Ipsum', last: 'Lorem Ipsum', mail: 'lorem_ipsum@gmail.com', num: '######',id: 'LOIM01'},
  {name: 'Lorem Ipsum', last: 'Lorem Ipsum', mail: 'lorem_ipsum@gmail.com', num: '######',id: 'LOIM01'},
  {name: 'Lorem Ipsum', last: 'Lorem Ipsum', mail: 'lorem_ipsum@gmail.com', num: '######',id: 'LOIM01'},
];



function Ventas() {
  return (
  <div>
    <div className="contenedor">
      <h1 className="titulo">Orden de Trabajo</h1>
    </div>

    <div className='contenedor3'>
    <div>
        <label htmlFor=''>Seleccionar Cliente:    </label>
       
      
        </div>
        <form2>
          <input type="text" placeholder="Nombre de Cliente a Buscar"/>
          <button type="submit">
            Seleccionar
          </button>
        </form2>
      </div>

   <h2 className="titulo">Datos del Trabajo</h2>


<div className="contenedor3">

      <div>
        <label htmlFor=''>Departamento: </label>
        <select name="Departamento" id="Departamento">
  <option value="1">Departamento 1</option>
  <option value="2">Departamento 2</option>
  <option value="3">Departamento 3</option>
</select>
      
        </div><br />

    <div>
        <label htmlFor=''>Producto o servicio: </label>
        <select name="ps" id="ps">
  <option value="p">Producto</option>
  <option value="s">Servicio</option>

</select>
      </div><br />
	
</div> 

<div className="contenedor3">

      <div>
      <label for="fecha">Fecha de solicitud: </label>
    <input type="date" id="fecha" name="fecha"></input>
        </div><br />

    <div>
        <label htmlFor=''>Precio Total: </label>
        <select name="ps" id="ps">
  <option value="p">Producto</option>
  <option value="s">Servicio</option>

</select>
      </div><br />
		
    </div> 
    <div className="contenedor3">
    <div>
      <label for="descripcion">Descripción del Trabajo:</label><br />
      <textarea name="Descripcion" rows="8" cols="60"></textarea>
   
           </div>
        </div>
        <div className="contenedor2">
       <button className='table button' type="submit">Realizar Petición</button></div>

  </div>
  )
}

export default Ventas
