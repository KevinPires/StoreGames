import './index.scss'
import { Link } from 'react-router-dom'



export default function HeaderCarrinho(){
    return (
        <main className="Header">

                <section className="containerPesquisa">
                    <img id="formatLogo" src="/logo.png" alt="logo" />
                    <section className="containerCategoria">
                    <li className='listaOpcoes'>
                        <Link to='/jogos'>Loja</Link>
                        <Link to='/categorias'>Categorias</Link>
                       <Link to='/ajuda'>Suporte</Link>
                       <Link to='/usuario'>Area do usuario</Link>
                    </li>
                </section>
                    <div className="boxUsuario">
                        <img id='svgIcon' src="/Icon.svg" alt="iconUser" />
                        <span>Bem vindo, Fulano <a>Minha Conta</a> | <a>Sair</a></span>
                    </div>
                </section>

                
            
        </main>
    )
}