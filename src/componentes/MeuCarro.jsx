import React from 'react';
import CarroObj from './models/meucarro.json';

const MeuCarro = () => {
    return (
        <div id="tela1" class="component"> 
            <div class="componentContent">
                <div class="card">
                    <div class="card-header">
                        <h1 class="componentTitle">Meu Carro</h1>
                    </div>
                <figure class="figure">
                    <img id="idImgCarro" src={CarroObj.ImagemCarro} class="card-img-top figure-img img-fluid rounded" alt="Imagem não disponível" /> 
                </figure> 
                    <div class="card-body">
                        <div class="p-3 mb-2 bg-light text-dark divRadius">
                            <p id="idMarcaCarro"class="card-text">{"Marca: " + CarroObj.Marca}</p>
                            <p id="idModeloCarro"class="card-text">{"Modelo: "+ CarroObj.Modelo}</p>
                            <p id="idAnoCarro"class="card-text">{"Ano: "+ CarroObj.Ano}</p>
                        </div> 
                    </div>
                    <div class="card-footer text-muted">
                        <p id="idNomCondutor"class="card-text text-center">{"Condutor Principal: " + CarroObj.CondutorPrincipal}</p>
                    </div>
                </div>
            </div>
        </div>
    );
  };

export default MeuCarro;