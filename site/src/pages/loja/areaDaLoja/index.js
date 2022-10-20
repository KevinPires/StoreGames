import BarraVantagens  from '../../../components/TelaDeJogos/vantagens'
import BarraFilto from '../../../components/TelaDeJogos/barraFiltros'
import './index.scss'
import '../../../common/common.scss'
import { useNavigate } from 'react-router-dom'
import CardJogo from '../../../components/cardJogo'
import Rodape from '../../../components/Rodapé'
import { useState, useEffect } from 'react'
import { listarTodosJogos, listarTodosJogosPorNome } from '../../../api/jogos'
import Pagination from '../../../components/pagination'
import { Link } from 'react-router-dom'


export default function LojaArea () {
    const [jogos, setJogos] = useState([]);
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [jogoPorPage] = useState(20)
    
    const [texto, setTexto] = useState('')

    const Navigate = useNavigate()
    async function filtrar() {
         const resp = await listarTodosJogosPorNome(texto)
         setJogos(resp)
    }
 
    useEffect(() => {
         filtrar()
    }, [texto])

    //

    function carrinho(){
        Navigate('/carrinho')
    }
    
    useEffect(()=>{
        const fetchPost = async ()=>{
            setLoading(true)
            const res = await listarTodosJogos()
            setJogos(res)
            setLoading(false)
        }
        console.log(jogos)
        fetchPost()
    }, []);

    const indexOfLastPost = currentPage * jogoPorPage;
    const indexOfFirstPost = indexOfLastPost - jogoPorPage;
    const currentJogos =jogos.slice(indexOfFirstPost, indexOfLastPost)

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
                                <span>Bem vindo, Fulano <a>Minha Conta</a> | <a>Sair</a></span>
                                <img src='/carrinho.png' alt='' onClick={carrinho}/>
                            </div>
                        </section>
                        <section className="containerCategoria">
                            <li className='listaOpcoes'>
                                <Link to='/jogos'>Loja</Link>
                                <Link to='/categorias'>Categorias</Link>
                                <Link to='/ajuda'>Suporte</Link>
                                <Link to='/usuario'>Área do Usuario</Link>
                            </li>
                        </section>
                    </section>
            <section className='container-espacamanto'>

            </section>
            <section className="faixaum">  
                <p>Compre o seu jogo aqui</p>
            </section>

            <BarraVantagens/>
            <section className='container flexboxrow'>
                <BarraFilto/>
                
                <div className='container-jogos'>
                    
                    <CardJogo jogos={currentJogos} loading={loading} jogo={jogos} />
                    <Pagination 
                        jogoPorPage={jogoPorPage} 
                        totalJogos={jogos.length} 
                        paginate={paginate}
                    />
                </div>
            </section>
            <Rodape/>

        </main>
    )
}