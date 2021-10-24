import React from 'react';
import HeaderIndex from './componentes/HeaderIndex';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MeuCarro from './componentes/MeuCarro';
import Faturas from './componentes/Faturas';
import Contrato from './componentes/Contrato';
import NavBar from './componentes/NavBar';
import './App.css';


function App() {
  return (
    <div className="App">
      <HeaderIndex />  
      <Router>
        <Switch>
        <Route exact path="/">
          <MeuCarro />  
        </Route> 
        <Route exact path="/Faturas">
          <Faturas />  
        </Route> 
        <Route exact path="/Contrato">
          <Contrato />  
        </Route> 
        </Switch>
        <NavBar /> 
      </Router>
    </div>
  );
}

export default App;
