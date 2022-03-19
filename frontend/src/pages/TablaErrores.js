import React, { useEffect, useState } from 'react';
import '../css/tabla.css';

export const TablaErrores = () => {
  const [ErrData, setErrData] = useState([{ tipoError: '', desc: '', fila: '', columna: '' }]);
  useEffect(() => {
    console.log(ErrData);
    setErrData(JSON.parse(localStorage.getItem('TABLA_ERRORES')));
  }, []);

  return (
    <div className="table-container animate__animated animate__fadeInUp">
      <table className="table">
        <thead>
          <tr>
            <th className="">TipoError</th>
            <th className="">Descripcion</th>
            <th className="second">Linea</th>
            <th className="second">Columna</th>
          </tr>
        </thead>
        {ErrData.map(({ tipoError, desc, fila, columna }, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>{tipoError}</td>
                <td>{desc}</td>
                <td>{fila}</td>
                <td>{columna}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
