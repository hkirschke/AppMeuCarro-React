const Fatura = () => {
    return (
        CarregaModelMockFatura()
    );
  };


//Carrega a porcentagem do juros do vencimento da fatura, fonte dos dados: contrato.json
const GetPorcentagemJuros = async () => {
    let response = await fetch('./models/contrato.json')
    .then(res => {
        return res.json();
    }).catch(err => {
       console.log(err);
    });
    return response.JurosVencimento;
};
 
//Carrega informações da fatura e realizando o calculo caso esteja vencida
//inserindo dinamicamente HTML na index.html
//fonte dos dados: /fatura.json
const CarregaModelMockFatura = async () => {
    let htmlFaturas = "";
    let porcJuros = await GetPorcentagemJuros();
    
   
    fetch('./models/fatura.json').then(response => {
        return response.json();
    }).then(lstFatura => { 
        lstFatura.forEach(fatura => {
            let classStatusFatura = "bg-light text-dark";
            let statusFatura = "Em Aberto";
            let valorFatura = fatura.Valor;
            
            if(fatura.Status === 1 ){
                statusFatura = "Paga";
            };
    
            if(fatura.Status === 2) {
                statusFatura = "Em atraso";
                let valorDoJuros = valorFatura * (porcJuros/100);
                let valorComJuros = valorDoJuros + valorFatura;
                valorFatura = valorComJuros;
                classStatusFatura = "text-white bg-danger";
            };

            htmlFaturas += 
            "<div class='p-3 mb-2 " + classStatusFatura + " divRadius'>" +
                "<p id='idValorFatura' class='card-text'>Valor Fatura: " + valorFatura + "</p>" +
                "<p id='idMesFatura' class='card-text'>Mês Faturamento: " + fatura.MesReferencia + "</p>" +
                "<p id='idStatus' class='card-text'>Status Fatura:  " + statusFatura + "</p>" +
            "</div>";
        }); 
        
        return htmlFaturas;
        
    }).catch(err => {
       console.log(err);
    });
};

export default Fatura;