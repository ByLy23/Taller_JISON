import React from 'react';
import '../css/navBar.css';
import { NavLink } from 'react-router-dom';
import { FiHome, FiEdit, FiList, FiXSquare, FiGitBranch } from 'react-icons/fi';
import { IconContext } from 'react-icons';
export const NavBar = () => {
  return (
    <nav className="glass">
      <span className="title">JISON</span>
      <hr />
      <IconContext.Provider value={{ size: '2em', className: 'react-icons' }}>
        <div className="links">
          <NavLink activeClassName="active" className="link-item" to="/inicio">
            <FiHome /> Inicio
          </NavLink>
          <NavLink activeClassName="active" className="link-item" to="/analizador">
            <FiEdit />
            Analizador
          </NavLink>
          {/* <span className="reporte">Reportes</span>
          <NavLink activeClassName="active" className="link-item" to="/simbolos">
            <FiList />
            Tabla de Simbolos
          </NavLink>
  */}
          <NavLink activeClassName="active" className="link-item" to="/errores">
            <FiXSquare />
            Tabla de Errores
          </NavLink>
        </div>
      </IconContext.Provider>
    </nav>
  );
};
