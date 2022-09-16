import './index.scss'

import HeaderAdmin  from '../../../components/adminHeader'
import BarraLateral from '../../../components/BarraLateral'



export default function CadastratJogos(){
    return (
  
      <main className="cadastrar-jogos-page">
          
          <BarraLateral/>
          <div className="cont-faixa-cadastro">
            <HeaderAdmin/>
          </div>
          
       
      </main>

    )
}