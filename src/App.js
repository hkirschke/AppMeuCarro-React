import React from 'react';
import HeaderIndex from './componentes/HeaderIndex';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MeuCarro from './componentes/MeuCarro';
import Fatura from './componentes/Fatura';
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
        <Route exact path="/Fatura">
          <Fatura />  
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

//onIniciar={HeaderIndex.CarregaNomeTitular()} nomeProprietario={HeaderIndex.CarregaNomeTitular()} />

{/* <HeaderIndex data={{CarregaNomeTitular}}/>  

const CarregaNomeTitular = () => {  
 let data =require('./componentes/models/contrato.json');
 console.log(data);
 return data;
}; */}

export default App;
