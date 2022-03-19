import React from 'react';
import { SimData } from '../components/SimData';
import '../css/tabla.css';
export const TablaSimbolos = () => {
  return (
    <div className="table-container animate__animated animate__fadeInUp">
      <table className="table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Entorno</th>
            <th className="second">Linea</th>
            <th className="second">Columna</th>
          </tr>
        </thead>
        {SimData.map(({ No, Nombre, Tipo, Entorno, Linea, Columna }, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>{No}</td>
                <td>{Nombre}</td>
                <td>{Tipo}</td>
                <td>{Entorno}</td>
                <td>{Linea}</td>
                <td>{Columna}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
