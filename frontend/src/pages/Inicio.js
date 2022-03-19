import React from 'react';
import { IconContext } from 'react-icons';
import '../css/inicio.css';
import { SideBarData } from '../components/SideBarData';
export const Inicio = () => {
  return (
    <div className="card animate__animated animate__fadeInDown">
      <div className="card-header">
        <p className="nombre">Byron Antonio Orellana Alburez</p>
        <p className="carnet">201700733</p>
      </div>
      <IconContext.Provider value={{ size: '1em', className: 'react-icons' }}>
        <div className="card-contact">
          <ul>
            {SideBarData.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.direccion} target="_blank" rel="noreferrer">
                    {item.icon} {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </IconContext.Provider>
    </div>
  );
};
