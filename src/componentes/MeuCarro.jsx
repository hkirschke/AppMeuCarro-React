import React from 'react';


const MeuCarro = () => {
    return (
        ""
    );
  };


const CarregaModelMockCarro = () => { 
    
    fetch('./models/meucarro.json').then(response => {
        return response.json();
    }).then(meucarro => {
        return meucarro;
        // document.getElementById("idMarcaCarro").innerHTML = "Marca: " + data.Marca;
        // document.getElementById("idModeloCarro").innerHTML = "Modelo: "+ data.Modelo;
        // document.getElementById("idAnoCarro").innerHTML = "Ano: "+ data.Ano;
        // document.getElementById("idNomCondutor").innerHTML = "Condutor Principal: " + data.CondutorPrincipal;
        // document.getElementById("idImgCarro").src= data.ImagemCarro;
    }).catch(err => {
       console.log(err);
    }); 
};

export default MeuCarro;