
import './index.scss'

import HeaderAdmin  from '../../../components/adminHeader'
import BarraLateral from '../../../components/BarraLateral'


export default function Home(){
  
    return (
  
      <main className="admin-home">

          <BarraLateral/>

          <div className="cont-faixa-cadastro">

              <HeaderAdmin/>

              <div className='centro'>
                <img className='imagem-login' src='/logo.png' alt='opa'/>
              </div>

          </div>

         
       
          
      </main>

    )
}