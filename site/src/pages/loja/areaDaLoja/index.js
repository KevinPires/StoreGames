import BarraVantagens from '../../../components/TelaDeJogos/vantagens'
import BarraFilto from '../../../components/TelaDeJogos/barraFiltros'
import './index.scss'
import '../../../common/common.scss'
import { useNavigate } from 'react-router-dom'
import CardJogo from '../../../components/cardJogo'
import Rodape from '../../../components/Rodapé'
import { useState, useEffect } from 'react'
import { listarTodosJogos, listarTodosJogosPorNome, filtrarValorCem, filtrarValorCinquenta, filtrarValorDuzentos, filtrarValorFinal, filtraPlataformaPc, filtraPlataformaPs4, filtraPlataformaXbox, filtraGeneroAcao, filtraGeneroAventura, filtraGeneroSimulacao, filtraGeneroRPG } from '../../../api/jogos'
import Pagination from '../../../components/pagination'
import { Link } from 'react-router-dom'
import storage from 'local-storage'



export default function LojaArea() {
    const [jogos, setJogos] = useState([]);
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [jogoPorPage] = useState(20)

    // filtros
    const [filtro, setFiltro] = useState()
    const [plataforma, setPlataforma] = useState()
    const [genero, setGenero] = useState()

    const [texto, setTexto] = useState('')

    const [infoStorage, setInfostorage] = useState('')

    function exibirNome() {
        const taLogado = storage('usuario-logado')
        setInfostorage(taLogado)
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
            if (filtro === '1'){
                resp = await filtrarValorCinquenta()
                setJogos(resp)
            }else if(filtro === '2'){
                resp = await filtrarValorCem()
                setJogos(resp)
            }else if(filtro === '3'){
                resp = await filtrarValorDuzentos()
                setJogos(resp)
            }else if(filtro === '4'){
                resp = await filtrarValorFinal()
                setJogos(resp)
            }else if(filtro === 'pc'){
                resp = await filtraPlataformaPc()
                setJogos(resp)
            }else if(filtro === 'ps4'){
                console.log(filtro)
                resp = await filtraPlataformaPs4()
                setJogos(resp)
            }else if (filtro === 'xbox'){
                resp = await filtraPlataformaXbox()
                setJogos(resp)
            }else if (filtro === 'acao'){
                resp = await filtraGeneroAcao()
                setJogos(resp)
            }else if (filtro === 'aventura'){
                resp = await filtraGeneroAventura()
                setJogos(resp)
            }else if (filtro === 'simulacao'){
                resp = await filtraGeneroSimulacao()
                setJogos(resp)
            }else if (filtro === 'rpg'){
                resp = await filtraGeneroRPG()
                setJogos(resp)
            }
        
        }
        if (filtro){
            filtrar()
        }else{
            fetchPost()
        }
        
    }, [filtro])
    
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
                <p>Comprar é bom, na StoreGames é melhor ainda!</p>
            </section>

            <BarraVantagens />
            <section className='container flexboxrow'>
                <BarraFilto
                    filtro={e => setFiltro(e.target.value)}
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