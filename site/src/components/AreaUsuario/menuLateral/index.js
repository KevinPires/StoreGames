import './index.scss'
import '../../../common/common.scss'
import { Link } from 'react-router-dom'
import storage from 'local-storage'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function OptionsUser(props) {

    const Navigate = useNavigate()
    function vereficarBotaoSelecionado(botao) {
        if (botao === props.escolhido)
            return 'escolhido'
        else
            return '';
    }
    const [infoStorage, setInfostorage] = useState('')

    function exibirNome() {
        const taLogado = storage('usuario-logado')
        setInfostorage(taLogado)
        console.log(taLogado)
    }

    useEffect(() => {
        exibirNome()
    }, [])

    return (
        <section className="user-menu-lateral">

            <div>
                <div className='format-botao'>
                    <Link to={`/usuario/${infoStorage.id}`} className={vereficarBotaoSelecionado('conta')}>
                        <img className='png' src='/perfils.png' alt='coracao-icon' /> <span> Minha conta</span>
                    </Link>
                </div>

                <div className='format-botao'>
                    <Link to={`/usuario/listaDesejos/${infoStorage.id}`} className={vereficarBotaoSelecionado('desejo')}>
                        <img className='png' src='/desejo.png' alt='coracao-icon' /> <span> Desejos</span>
                    </Link >
                </div>



                <div className='format-botao'>
                    <Link to={`/usuario/pedidos/ver/${infoStorage.id}`} className={vereficarBotaoSelecionado('pedido')}>
                        <img className='png' src='/icon-pedido.png' alt='opa' /> <span>Pedidos</span>
                    </Link>
                </div>
            </div>


            <div className='format-botao'>
                <Link to='/usuario/login' className=''>
                    <img className='png' src='/icon-sair.png' alt='' /> <span>Sair</span>
                </Link>
            </div>








        </section>
    )
}