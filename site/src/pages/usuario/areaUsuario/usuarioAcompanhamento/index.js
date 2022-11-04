import './index.scss';
import HeaderLoja from '../../../../components/headerLoja';
import OptionsUser from '../../../../components/AreaUsuario/menuLateral';

export default function Acompanhamento(){

    return (
        <main className='usuario-page-pedidos'>

            <HeaderLoja/>
 
            <section className="container-acomp">
            
                <div className="options">
                    <OptionsUser
                    escolhido='pedido'/>  
                </div>
              </section>
                </main>
    )
}