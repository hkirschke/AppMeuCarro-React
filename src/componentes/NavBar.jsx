import React  from 'react';
import { NavLink } from 'react-router-dom';
import '../NavBar.css';

const NavBar = () =>{
    return (
    <nav className="NavBar bottom">
         <div class="buttonGroup mt1 btn-group-toggle" data-toggle="buttons">
          <NavLink exact to="/" id="btnMeuCarro" class="button navLink btn-outline-success half primary" activeClassName="active">Meu Carro</NavLink>
          <NavLink  to="/Fatura" id="btnFatura" class="button navLink btn-outline-success half primary" activeClassName="active">Faturas</NavLink>
          <NavLink  to="/Contrato" id="btnContrato" class="button navLink btn-outline-success half primary" activeClassName="active">Contrato</NavLink>
        </div> 
    </nav>
    );
};


export default NavBar;