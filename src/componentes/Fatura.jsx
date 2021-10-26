import ContratoObj from './models/contrato.json'; 
import React from 'react';
 
var cssStatusFatura = "bg-light text-dark";
var statusFatura = "Em Aberto";
var valorFatura = 0;


//Renderiza cada fatura passada como propriedade através do componente faturas.
const Fatura = (props) => {
    CarregaModelMockFatura(props.fatura);
    return ( 
    <div className={"p-3 mb-2 divRadius" + cssStatusFatura}> 
        <p id='idValorFatura' className='card-text'>{"Valor Fatura: " + valorFatura}</p> 
        <p id='idMesFatura' className='card-text'>{"Mês Faturamento:" + props.fatura.MesReferencia}</p> 
        <p id='idStatus' className='card-text'>{"Status Fatura: " + statusFatura}</p>
    </div>
    );
  };

//Carrega informações da fatura e realizando o calculo caso esteja vencida
//Define qual classe CSS será aplicada para o card de fatura
//fonte dos dados: /fatura.json
function CarregaModelMockFatura(fatura){ 
    let porcJuros = ContratoObj.JurosVencimento;  
    valorFatura = fatura.Valor; 
    cssStatusFatura = "bg-light text-dark";

    if(fatura.Status === 1 ){
        statusFatura = "Paga";
    };
    
    if(fatura.Status === 2) {
        statusFatura = "Em atraso";
        cssStatusFatura = "text-white bg-danger";
        let valorDoJuros = valorFatura * (porcJuros/100);
        let valorComJuros = valorDoJuros + valorFatura;
        valorFatura = valorComJuros; 
     }; 
};

export default Fatura;