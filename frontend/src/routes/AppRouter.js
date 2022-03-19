import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { Analizador } from '../pages/Analizador';
import { AstPage } from '../pages/AstPage';
import { Inicio } from '../pages/Inicio';
import { TablaErrores } from '../pages/TablaErrores';
import { TablaSimbolos } from '../pages/TablaSimbolos';

export const AppRouter = () => {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Switch>
          <Route path="/analizador" component={Analizador} />
          <Route path="/inicio" component={Inicio} />
          <Route path="/simbolos" component={TablaSimbolos} />
          <Route path="/errores" component={TablaErrores} />
          <Route path="/ast" component={AstPage} />
          <Route exact path="/" component={Inicio} />
        </Switch>
      </div>
    </Router>
  );
};
