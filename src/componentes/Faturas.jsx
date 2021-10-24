import FaturaObj from './models/fatura.json';
import Fatura from './Fatura';

const Faturas = () => { 
  return(
    <div id="tela3" class="component"> 
      <div class="componentContent">
        <div class="card" >
         <div class="card-header">
           <h1 class="componentTitle">Faturas</h1>
         </div>
        <div class="card-body">
           {FaturaObj.lstFatura.map((f) => (
              <Fatura
               key={f.MesReferencia}
               fatura={f} />
            ))} 
        </div>
        <div class="card-footer text-muted">
          <p id="idContratante"class="card-text text-center"></p>
        </div>
      </div>
    </div>
</div> 
  )
};
 

export default Faturas;
