import React from "react";
import "./styles/Departamentos.css";
import Depas from "./images/Departamentos.jpg";

function Departamentos() {
  const tabDepas = [
    {
      numO: "####",
      date: "##/##/####",
    },]

    const tabDepasM = [
      {
        numO: "####",
        dateToDay: "##/##/####",
        Porcent: "##%",
      },]

  return (
    <div>
      <div className="cont">
        <h1 className="titleAdm">Departamentos</h1>
      </div>

      <div className="contAsig">
        <form>
          <input type="text" placeholder="Asignacion" />
          <button type="create">Asignar</button>
        </form>
      </div>

      <div style={{ width: "35%", margin: "0 auto" }}>
        <table>
          <thead>
            <tr>
              <th>Número de Órden</th>
              <th>Fecha de creacion</th>
            </tr>
          </thead>
          <tbody>
            {tabDepas.map((item, index) => (
              <tr key={index}>
                <td>{item.numO}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ width: "35%", margin: "0 auto" }}>
        <table>
          <thead>
            <tr>
              <th>Número de Órden</th>
              <th>Fecha de hoy</th>
              <th>Porcentaje</th>
            </tr>
          </thead>
          <tbody>
            {tabDepasM.map((item, index) => (
              <tr key={index}>
                <td>{item.numO}</td>
                <td>{item.dateToDay}</td>
                <td>{item.Porcent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="cont2">
        <div className="cont">
          <h1 className="titular">Lorem ipsum</h1>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="image">
          <div className="image">
            <img src={Depas} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Departamentos;
