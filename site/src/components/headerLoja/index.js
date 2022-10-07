import { useEffect, useState } from 'react'
import '../../../src/common/common.scss'
import { listarTodosJogos, listarTodosJogosPorNome } from '../../api/jogos'

import InputPesquisa from '../inputPesquisa'

import './index.scss'
export default function HeaderLoja () {

    const [texto, setTexto] = useState('')

   async function filtrar() {
        const resp = await listarTodosJogosPorNome(texto)
        // passar a resp como parametro no array de filmes para filtrar
   }

   useEffect(() => {
        filtrar()
   }, [texto])
  
    return (
        <main className="Header">

                <section className="containerPesquisa">
                    <img id="formatLogo" src="./logo.png" alt="logo" />

                    <section className="input-Pesquisa" >   
                        <input type="text" placeholder='Pesquisar Jogo' className='input-pesquisa-format' value={texto} onChange={e => setTexto(e.target.value)} />
                    </section>
                    
                    <div className="boxUsuario">
                        <img id='svgIcon' src="./Icon.svg" alt="iconUser" />
                        <span>Bem vindo, Fulano <a>Minha Conta</a> | <a>Sair</a></span>
                    </div>
                </section>

                <section className="containerCategoria">
                    <li className='listaOpcoes'>
                        <p>Loja</p>
                        <p>Categorias</p>
                        <p>Suporte</p>
                        <p>Área do Usuario</p>
                    </li>
                </section>
            
        </main>
    )
}