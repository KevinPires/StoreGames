import '../../../common/common.scss'
import './index.scss'
import OptionsUser from '../../../components/AreaUsuario/menuLateral'
import HeaderLoja from '../../../components/headerLoja'

export default function AreaLoja () {

    return (
        <main className='usuario-page'>

            <HeaderLoja/>

            <section className="container-user">
                <div className="options">
                    <OptionsUser/>  
                </div>

                <div className="box-info">
                    <div className="container-informacoes">
                        
                        <div className="boxusuario">

                        </div>
                        <div className="boxdetalhes">

                        </div>
                    </div>
                    
                    <section className="detalhes">
                    
                    </section>
                </div>



            </section>
        </main>
    )
}