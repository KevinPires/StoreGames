import './index.scss'
import '../../../common/common.scss'
import { Link } from 'react-router-dom'

export default function OptionsUser (props) {


    function vereficarBotaoSelecionado(botao){
        if (botao === props.escolhido)
        return 'escolhido'
        else 
        return '';
    }

    return (
        <section className="user-menu-lateral">

            <div className='format-botao'>
            <Link to='/usuario'className={vereficarBotaoSelecionado('conta')}>
                <img className='png' src='/perfils.png' alt='coracao-icon'/> <span> Minha conta</span>
                </Link>
            </div>
            
            <div className='format-botao'>
            <Link to='/usuario/listaDesejos' className={vereficarBotaoSelecionado('desejo')}>
                 <img className='png' src='/desejo.png' alt='coracao-icon'/> <span> Desejos</span>
                </Link >
            </div>
             
             <div className='format-botao'>
             <Link to='/usuario/historico' className={vereficarBotaoSelecionado('historico')}>
                <img className='png' src='/livros.png' alt='opa'/>  <span> Histórico </span>
                </Link>
             </div>
               

               <div className='format-botao'>
               <Link to='/usuario/pedidos' className={vereficarBotaoSelecionado('pedido')}>
                 <img className='png' src='/icon-pedido.png' alt='opa'/> <span>Pedidos</span>
                </Link>
             </div>

                <div className='format-botao'>
                <Link to='/usuario/login' className=''>
                 <img className='png' src='/icon-sair.png' alt='' /> <span>Sair</span>
                </Link>
                </div>


               

               
    


        </section>
    )
}