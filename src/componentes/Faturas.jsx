import FaturaObj from './models/fatura.json';
import Fatura from './Fatura';

//Renderiza o componente Faturas, usado o subcomponente Fatura, enviando as faturas carregadas
//do arquivo fatura.json
const Faturas = () => { 
  return(
    <div className="component"> 
      <div className="componentContent">
        <div className="card" >
         <div className="card-header">
           <h1 className="componentTitle">Faturas</h1>
         </div>
        <div className="card-body">
           {FaturaObj.lstFatura.map((f) => (
              <Fatura
               key={f.MesReferencia}
               fatura={f} />
            ))} 
        </div>
      </div>
    </div>
</div> 
  )
};
 

export default Faturas;
