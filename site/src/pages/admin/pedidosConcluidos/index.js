import './index.scss'
import BarraLateral from '../../../components/BarraLateral'
import HeaderAdmin from '../../../components/adminHeader'

export default function pedidosConcluidos(){
    return (
        <main className="admin-home">
    <BarraLateral selecionado='concluidos'/>


    <div className="cont-faixa-cadastro">

         <HeaderAdmin/>
     </div>
       </main>
    )
}