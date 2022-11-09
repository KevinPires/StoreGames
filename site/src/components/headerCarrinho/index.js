import './index.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Storage from 'local-storage'


export default function HeaderCarrinho() {

    const [infoStorage, setInfostorage] = useState('')

    function exibirNome() {
        const taLogado = Storage('usuario-logado')
        setInfostorage(taLogado)
    }

    useEffect(() => {
        exibirNome()
    }, [])

    return (
        <main className="Header">

            <section className="containerPesquisa">
                <img id="formatLogo" src="/logo.png" alt="logo" />
                <section className="containerCategoria">
                    <li className='listaOpcoes'>
                        <Link to='/'>Home</Link>
                        <Link to='/jogos'>Loja</Link>
                        <Link to='/ajuda'>Suporte</Link>
                        {/* <Link to={`/usuario/${infoStorage.id}`}>Area do usuario</Link> */}
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