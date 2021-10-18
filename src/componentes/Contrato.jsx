import React, { useState } from 'react';

const Contrato = () => {
    const [vencimento, setVencimento] = useState("");
    const [diaVencimentoFatura, setDiaVencimentoFatura] = useState("");
    const [valor, setValor] = useState("");
    const [jurosVencimento, setJurosVencimento] = useState("");
    const [contratante, setContratante] = useState(""); 
    CarregaModelMockContrato();
    
    return (
    <div class="componentContent">
      <div class="card" >
        <div class="card-header">
          <h1 class="componentTitle">Dados do contrato</h1>
        </div>
        <div class="card-body">
          <div class="p-3 mb-2 bg-light text-dark divRadius">
            <p id="idVencimentoContrato"class="card-text">{vencimento}</p>
            <p id="idDiaVencimentoFatura"class="card-text">{jurosVencimento}</p>
            <p id="idValorContrato"class="card-text">{valor}</p>
            <p id="idJurosVencimento"class="card-text">{diaVencimentoFatura}</p>
          </div>
        </div>
        <div class="card-footer text-muted">
          <p id="idContratante"class="card-text text-center">{contratante}</p>
        </div>
      </div>
    </div>
    );
  };


//Carrega informações do contrato inserindo dinamicamente HTML na index.html, fonte dos dados: /contrato.json
const CarregaModelMockContrato = () => {
    fetch('./models/contrato.json').then(response => {
        return response.json();
    }).then(contrato => {
        this.setVencimento(this.vencimento,"Vencimento do contrato: " + contrato.Vencimento); 
        this.setDiaVencimentoFatura("Juros vencimento da fatura: " + contrato.DiaVencimentoFatura);
        this.setValor("Valor do aluguel contratado: " + contrato.Valor);
        this.setJurosVencimento("Juros vencimento da fatura: " + contrato.JurosVencimento);
        this.setContratante("Titular: " + contrato.Contratante); 
        return contrato;
    }).catch(err => {
       console.log(err);
    });

};

export default Contrato;