import './index.scss'
import '../../../common/common.scss'

export default function OptionsUser () {


    return (
        <section className="user-menu-lateral">
            
            
                <div className='format-botao'>
                    <span>Minha Conta</span>
                </div>

                <div className='format-botao'>
                    <img src='/icon-coracao.jpg' alt='coracao-icon'/> <span> Lista de Desejos</span>
                </div>

                <div className='format-botao'>
                    <img src='/icon-historico.png' alt='opa'/>  <span> Histórico </span>
                </div>

                <div className='format-botao'>
                    <img src='/icon-pedido.png' alt='opa'/> <span>Pedidos</span>
                </div>

                <div className='format-botao'>
                    <img src='/icon-sair.png' alt='' /> <span>Sair</span>
                </div>
    


        </section>
    )
}