import './index.scss';

import BarraLateral from '../../../components/BarraLateral';
import HeaderAdmin from '../../../components/adminHeader';

export default function ConsultarJogos(){
  return(
    <main className="admin-home">
    <BarraLateral selecionado='consultar'/>


    <div className="cont-faixa-cadastro">

         <HeaderAdmin/>
     </div>
       </main>
  )
}