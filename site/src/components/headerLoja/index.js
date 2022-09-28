import '../../../src/common/common.scss'

import InputPesquisa from '../inputPesquisa'
import './index.scss'
export default function HeaderLoja () {

    return (
        <main className="Header">

                <section className="containerPesquisa">
                    <img id="formatLogo" src="./logo.png" alt="logo" />
                    <InputPesquisa nome="Pesquise por jogos"/>

                    <div className="boxUsuario">
                        <img id='svgIcon' src="./Icon.svg" alt="iconUser" />
                        <span>Bem vindo, Fulano <a>Minha Conta</a> | <a>Sair</a></span>
                    </div>
                </section>

                <section className="containerCategoria">
                    <li className='listaOpcoes'>
                        <p>Loja</p>
                        <p>Categorias</p>
                        <p>Suporte</p>´
                        <p>Área do Usuario</p>
                    </li>
                </section>
            
        </main>
    )
}