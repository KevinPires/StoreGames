import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../../../src/common/common.scss'
import { listarTodosJogos, listarTodosJogosPorNome } from '../../api/jogos'

import InputPesquisa from '../inputPesquisa'

import './index.scss'
export default function HeaderLoja() {

    const [texto, setTexto] = useState('')

    const Navigate = useNavigate();

    async function filtrar() {
        const resp = await listarTodosJogosPorNome(texto)
        // passar a resp como parametro no array de filmes para filtrar
    }

    function carrinho(){
        Navigate('/carrinho')
    }   
    
    useEffect(() => {
        filtrar()
    }, [texto])

    return (
        <main className="Header">

            <section className="containerPesquisa">
                <img id="formatLogo" src="/logo.png" alt="logo" />

                <section className="input-Pesquisa" >
                    <input type="text" placeholder='Pesquisar Jogo' className='input-pesquisa-format' value={texto} onChange={e => setTexto(e.target.value)} />
                </section>

                <div className="box-Usuario">
                    <img id='svgIcon' src="/Icon.svg" alt="iconUser" />
                    <span>Bem vindo, Fulano <a>Minha Conta</a> | <a>Sair</a></span>
                    <img src="/carrinho.png" alt="aaaa" onClick={carrinho} />
                </div>
            </section>

            <section className="containerCategoria">
                <li className='listaOpcoes'>
                    <Link to='/jogos'>Loja</Link>
                    <Link to='/categorias'>Categorias</Link>
                    <Link to='/ajuda'>Suporte</Link>
                    <Link to='/usuario'>Area do usuario</Link>
                </li>
            </section>

        </main>
    )
}