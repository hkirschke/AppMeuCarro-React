import React from 'react';
import ContratoObj from './models/contrato.json';
import img from '../images/IconesMeuCarro/icon-108x108.png'

const ImagemCarro = "../images/IconesMeuCarro/icon-108x108.png";

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