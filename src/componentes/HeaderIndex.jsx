import React from 'react';
import ContratoObj from './models/contrato.json';  

const ImagemCarro = "images/icon-108x108.png";

//Carrega o cabeçalho da aplicação, carregando informações do arquivo contrato.json
const HeaderIndex = () => {
    return (
        <header class="headerBarFive">
            <div id="lblOla" class="appName">
                    Olá, {ContratoObj.Contratante}
            </div>
                <div class="">
                     <img id="logotipo-clientes" src={ImagemCarro} title="" alt="" />
                </div>
        </header>
    );
  };

export default HeaderIndex;