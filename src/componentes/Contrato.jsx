import React from 'react';
import ContratoObj from './models/contrato.json';

const Contrato = () => { 
  return (
  <div className="componentContent">
    <div className="card" >
      <div className="card-header">
          <h1 className="componentTitle">Dados do contrato</h1>
        </div>
        <div className="card-body"> 
        <div className="p-3 mb-2 bg-light text-dark divRadius">
              <p id="idVencimentoContrato" className="card-text">{"Vencimento do contrato: " + ContratoObj.Vencimento}</p>
              <p id="idDiaVencimentoFatura" className="card-text">{"Dia Vencimento Fatura: " + ContratoObj.DiaVencimentoFatura}</p>
              <p id="idValorContrato" className="card-text">{"Valor do aluguel contratado: " + ContratoObj.Valor}</p>
              <p id="idJurosVencimento" className="card-text">{"Juros vencimento da fatura: " +  ContratoObj.JurosVencimento}</p> 
        </div>
      </div>
    </div>
  </div> 
  );
};

export default Contrato;