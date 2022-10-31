import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../../../src/common/common.scss'
import { listarTodosJogos, listarTodosJogosPorNome } from '../../api/jogos'
import storage from 'local-storage'
import InputPesquisa from '../inputPesquisa'


import './index.scss'
export default function HeaderLoja() {

    const [texto, setTexto] = useState('')

    const Navigate = useNavigate();

    async function filtrar() {
        const resp = await listarTodosJogosPorNome(texto)
        // passar a resp como parametro no array de filmes para filtrar
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

    function carrinho() {
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
                    <span>Bem vindo, {infoStorage ? infoStorage.nome : <p onClick={() => Navigate('/usuario/login')}> Realizar Login </p>} {infoStorage ? <a onClick={() => Navigate(`/usuario/${infoStorage.id}`)}   >Minha Conta</a>: '' }</span>
                    <img src="/carrinho.png" alt="aaaa" onClick={carrinho} />
                </div>
            </section>

            <section className="containerCategoria">
                <li className='listaOpcoes'>
                    <Link to='/'>Home</Link>
                    <Link to='/jogos'>Loja</Link>
                    <Link to='/ajuda'>Suporte</Link>
                    <span onClick={() => Navigate(`/usuario/${infoStorage.id}`)}>Area do usuario</span>
                </li>
            </section>

        </main>
    )
}