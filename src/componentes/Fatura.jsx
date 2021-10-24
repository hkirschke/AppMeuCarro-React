import ContratoObj from './models/contrato.json'; 
import React from 'react';

const cssStatusFaturaAberto = "bg-light text-dark";
const cssStatusFaturaEmAtraso = "text-white bg-danger";
var statusFatura = "Em Aberto";
var valorFatura = 0;

const Fatura = (props) => {
    CarregaModelMockFatura(props.fatura);
    return ( 
    <div class="p-3 mb-2 divRadius"> 
        <p id='idValorFatura' class='card-text'>{"Valor Fatura: " + props.fatura.valorFatura}</p> 
        <p id='idMesFatura' class='card-text'>{"Mês Faturamento:" + props.fatura.MesReferencia}</p> 
        <p id='idStatus' class='card-text'>{"Status Fatura: " + statusFatura}</p>
    </div>
    );
  };

//Carrega informações da fatura e realizando o calculo caso esteja vencida
//inserindo dinamicamente HTML na index.html
//fonte dos dados: /fatura.json
function CarregaModelMockFatura(fatura){ 
    let porcJuros = ContratoObj.JurosVencimento; 
    valorFatura = fatura.Valor;
            
    if(fatura.Status === 1 ){
        statusFatura = "Paga";
    };
    
    if(fatura.Status === 2) {
        statusFatura = "Em atraso";
        let valorDoJuros = valorFatura * (porcJuros/100);
        let valorComJuros = valorDoJuros + valorFatura;
        valorFatura = valorComJuros; 
     }; 
};

// {props.tarefas.map((t, i) => (
//     <Tarefa
//       key={i}
//       descricao={t}
//       onAltera={props.onAltera}
//       onApaga={props.onApaga}
//     />
//   ))}

export default Fatura;