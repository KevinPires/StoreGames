import './index.scss';
import BarraLateral from '../../../components/BarraLateral';
import HeaderAdmin from '../../../components/adminHeader';

export default function Pendentes(){
    return(
        <main className="admin-home">
    <BarraLateral selecionado='pendencias'/>


    <div className="cont-faixa-cadastro">

         <HeaderAdmin/>
     </div>
       </main>
    )
}
