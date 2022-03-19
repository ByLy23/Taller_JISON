import React from 'react';
import { GraphvizComponent } from '../components/GraphvizComponent';
export const AstPage = () => {
  //
  return (
    <div className="table-container1 animate__animated animate__fadeInUp">
      <div className="graph">
        <GraphvizComponent />
      </div>
    </div>
  );
};

//${JSON.parse(localStorage.getItem('ARBOL_AST'))}
