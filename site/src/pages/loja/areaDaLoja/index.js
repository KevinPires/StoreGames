import BarraVantagens from '../../../components/TelaDeJogos/vantagens'
import BarraFilto from '../../../components/TelaDeJogos/barraFiltros'
import './index.scss'
import '../../../common/common.scss'
import { useNavigate } from 'react-router-dom'
import CardJogo from '../../../components/cardJogo'
import Rodape from '../../../components/Rodapé'
import { useState, useEffect } from 'react'
import { listarTodosJogos, listarTodosJogosPorNome, filtrarValorCem, filtrarValorCinquenta, filtrarValorDuzentos, filtrarValorFinal } from '../../../api/jogos'
import Pagination from '../../../components/pagination'
import { Link } from 'react-router-dom'
import storage from 'local-storage'


export default function LojaArea() {
    const [jogos, setJogos] = useState([]);
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [jogoPorPage] = useState(20)

    // filtros
    const [preco, setPreco] = useState()
    const [plataforma, setPlataforma] = useState()
    const [genero, setGenero] = useState()

    const [texto, setTexto] = useState('')

    const [infoStorage, setInfostorage] = useState('')

    function exibirNome() {
        const taLogado = storage('usuario-logado')
        setInfostorage(taLogado)
        console.log(taLogado)
    }

    

    useEffect(() => {
        exibirNome()
    }, [])

    const Navigate = useNavigate()
    async function filtrar() {
        const resp = await listarTodosJogosPorNome(texto)
        setJogos(resp)
    }

    useEffect(() => {
        filtrar()
    }, [texto])

    //

    function carrinho() {
        Navigate('/carrinho')
    }

    const fetchPost = async () => {
        setLoading(true)
        const res = await listarTodosJogos()
        setJogos(res)
        setLoading(false)
    }

    useEffect(() => {
        async function filtrar() {
            let resp = []
            if (preco === '1'){
                resp = await filtrarValorCinquenta()
                setJogos(resp)
            }else if(preco === '2'){
                resp = await filtrarValorCem()
                setJogos(resp)
            }else if(preco === '3'){
                resp = await filtrarValorDuzentos()
                setJogos(resp)
            }else if(preco === '4'){
                resp = await filtrarValorFinal()
                setJogos(resp)
            }
                
            console.log(jogos)
        }
        if (preco){
            filtrar()
        }else{
            fetchPost()
        }
            
    }, [preco])
    
    // useEffect(() => {
    //     fetchPost()
    // }, []);

    const indexOfLastPost = currentPage * jogoPorPage;
    const indexOfFirstPost = indexOfLastPost - jogoPorPage;
    const currentJogos = jogos.slice(indexOfFirstPost, indexOfLastPost)


    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <main className="lojaPage">
            <section className="HeaderLoja">
                <section className="containerPesquisa">
                    <img id="formatLogo" src="/logo.png" alt="logo" />

                    <section className="input-Pesquisa" >
                        <input type="text" placeholder='Pesquisar Jogo' className='input-pesquisa-format' value={texto} onChange={e => setTexto(e.target.value)} />
                    </section>

                    <div className="boxUsuario">
                        <img id='svgIcon' src="/Icon.svg" alt="iconUser" />
                        <span>Bem vindo, {infoStorage ? infoStorage.nome : <p onClick={() => Navigate('/usuario/login')}> Realizar Login </p>} {infoStorage ? <a onClick={() => Navigate(`/usuario/${infoStorage.id}`)}   >Minha Conta</a> : ''}</span>
                        <img src='/carrinho.png' alt='' onClick={carrinho} />
                    </div>
                </section>
                <section className="containerCategoria">
                    <li className='listaOpcoes'>
                        <Link to='/'>Home</Link>
                        <Link to='/jogos'>Loja</Link>
                        <Link to='/ajuda'>Suporte</Link>
                        <span onClick={() => Navigate(`/usuario/${infoStorage.id}`)}>Área do Usuario</span>
                    </li>
                </section>
            </section>
            <section className='container-espacamanto'>

            </section>
            <section className="faixaum">
                <p>Compre o seu jogo aqui</p>
            </section>

            <BarraVantagens />
            <section className='container flexboxrow'>
                <BarraFilto
                    preco={e => setPreco(e.target.value)}
                    plataforma={e => setPlataforma(e.target.value)}
                    genero={e => setGenero(e.target.value)}
                />
                <div className='container-jogos'>

                    <CardJogo jogos={currentJogos} loading={loading} jogo={jogos} />
                    <Pagination
                        jogoPorPage={jogoPorPage}
                        totalJogos={jogos.length}
                        paginate={paginate}
                    />
                </div>
            </section>
            <Rodape />

        </main>
    )
}