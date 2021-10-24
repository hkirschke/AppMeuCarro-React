import React from 'react';
import ContratoObj from './models/contrato.json';

const Contrato = () => { 
  return (
  <div class="componentContent">
    <div class="card" >
      <div class="card-header">
          <h1 class="componentTitle">Dados do contrato</h1>
        </div>
        <div class="card-body"> 
        <div class="p-3 mb-2 bg-light text-dark divRadius">
              <p id="idVencimentoContrato"class="card-text">{ContratoObj.vencimento}</p>
              <p id="idDiaVencimentoFatura"class="card-text">{ContratoObj.jurosVencimento}</p>
              <p id="idValorContrato"class="card-text">{ContratoObj.valor}</p>
              <p id="idJurosVencimento"class="card-text">{ContratoObj.diaVencimentoFatura}</p> 
        </div>
      </div>
    </div>
  </div> 
  );
};

export default Contrato;