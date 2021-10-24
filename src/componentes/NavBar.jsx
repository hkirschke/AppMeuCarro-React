import React from "react";
import {
    Button
} from 'reactstrap';
import "../NavBar.css";

const NavBar = () =>{
    return ( 
    <nav className="NavBar bottom">
         <div className="buttonGroup mt1 btn-group-toggle" data-toggle="buttons">
          <Button  href="/" id="btnMeuCarro" className="button btn-outline-success half primary btn-secondary-white navLink" >Meu Carro</Button>
          <Button  href="/Faturas" id="btnFatura" className="button btn-outline-success half primary btn-secondary-white navLink" >Faturas</Button>
          <Button  href="/Contrato" id="btnContrato" className="button btn-outline-success half primary btn-secondary-white navLink">Contrato</Button>
        </div> 
    </nav>
    );
};


export default NavBar;