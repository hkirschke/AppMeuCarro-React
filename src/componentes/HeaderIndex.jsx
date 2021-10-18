import React from 'react';

const ImagemCarro = "./images/IconesMeuCarro/icon-108x108.png";

const HeaderIndex = () => {
    return (
        <header class="headerBarFive">
            <div id="lblOla" class="appName">
                    Olá, {CarregaNomeTitular()}
            </div>
                <div class="">
                     <img id="logotipo-clientes" src={ImagemCarro} title="" alt="" />
                </div>
        </header>
    );
  };

//Carrega o nome do titular inserindo dinamicamente HTML na index.html, fonte dos dados: /contrato.json
const CarregaNomeTitular = () => { 
    fetch('./models/contrato.json').then(response => {
        return response.json();
    }).then(contrato => {
        return contrato.Contratante;
    }).catch(err => {
       console.log(err);
    });
};


export default HeaderIndex;