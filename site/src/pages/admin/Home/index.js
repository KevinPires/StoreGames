import './index.scss'

import HeaderAdmin  from '../../../components/adminHeader'
import BarraLateral from '../../../components/BarraLateral'


export default function Home(){

    return (

      <main className="admin-home">
          <BarraLateral selecionado='home'/>


          <div className="cont-faixa-cadastro">

               <HeaderAdmin/>
            <div className='centro'>

              <img className='ajuste' src='/logoOrigin.png' alt='opa'/>
              </div>
            </div>
             </main>

    )
}