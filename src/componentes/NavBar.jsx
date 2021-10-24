import React  from 'react';
import '../App.css'; 
import { NavLink } from 'react-router-dom';
import '../NavBar.css';

const NavBar = () =>{
    return (
    <nav className="NavBar bottom">
         <div class="buttonGroup mt1 btn-group-toggle" data-toggle="buttons">
          <NavLink exact to="/" id="btnMeuCarro" class="button navLink" activeClassName="active">Meu Carro</NavLink>
          <NavLink  to="/Faturas" id="btnFatura" class="button navLink" activeClassName="active">Faturas</NavLink>
          <NavLink  to="/Contrato" id="btnContrato" class="button navLink" activeClassName="active">Contrato</NavLink>
        </div> 
    </nav>
    );
};

export default NavBar;